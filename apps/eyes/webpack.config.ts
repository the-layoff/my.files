import SentryWebpackPlugin from '@sentry/webpack-plugin';
import StatoscopeWebpackPlugin from '@statoscope/webpack-plugin';
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import CopyPlugin from 'copy-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import dotenv from "dotenv";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import webpack, { Configuration, DefinePlugin } from 'webpack';

dotenv.config();

const miniCSSLoader =
  [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      }
    }
  ]

// Compiles Postcss to CSS
const postCSSLoader = {
  loader: 'postcss-loader', options: {
    postcssOptions: { config: Path.resolve(__dirname, "./.config/postcss.config.js")},
    implementation: require.resolve("postcss")
  }
}; 

function devConfig(): Configuration {
  const IMAGE_SIZE_LIMIT = 10000;
  const devMode = process.env.NODE_ENV !== 'production';

  return {
    name: "root",
    mode: devMode ? 'development' : 'production',
    entry: './src/index.tsx',
    devtool: "source-map",
    output: {
      path: devMode ? Path.resolve(__dirname, 'public') : Path.resolve(__dirname, 'dist'),
      filename: 'static/js/[name].[contenthash:8].js',
      chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
      assetModuleFilename: 'static/media/[name].[hash][ext]',
      clean: true,
    },
    plugins: [
      new DefinePlugin({
        production: JSON.stringify('production'),
        development: JSON.stringify('development'),
        devMode: JSON.stringify(!devMode),
        'process.env': JSON.stringify(process.env),
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: devMode ? 'development' : 'production',
        DEBUG: devMode ? true : false,
      }),
      new SentryWebpackPlugin({
        org: "techdeus",
        project: "myfiles-game",

        // Specify the directory containing build artifacts
        include: "./dist",

        // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
        // and needs the `project:releases` and `org:read` scopes
        authToken: process.env.SENTRY_AUTH_TOKEN,

        // Optionally uncomment the line below to override automatic release name detection
        release: process.env.RELEASE,
      }),
      new ForkTsCheckerWebpackPlugin({
        async: true,
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        hash: false,
        template: devMode ? Path.join(__dirname, 'src/app/templates', 'index_dev.html') : Path.join(__dirname, 'src/app/templates', 'index.html'),
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: devMode ? false : true,
        minifyCSS: devMode ? false : true,
        minifyURLs: devMode ? false : true,
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? 'static/css/[name].css' : 'static/css/[name].[contenthash:8].css',
        chunkFilename: devMode ? 'static/css/[name].css' : 'static/css/[name].[contenthash:8].chunk.css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
      new CaseSensitivePathsPlugin({ debug: devMode ? false : false }),
      new CopyPlugin({
        patterns: [
          {
            from: './src/app/assets/',
            to: './static/assets',
          },
          {
            from: './src/app/files/',
            to: './static/files',
          }
        ],
      }),
    ],
    optimization: {
      minimize: true,
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'async',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 2018,
            },
            compress: {
              ecma: 5,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            keep_classnames: false,
            keep_fnames: false,
          },
        }),
        new CssMinimizerPlugin(),
      ],
    },
    performance: {
      hints: false,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
      alias: {
        src: Path.resolve(__dirname, 'src/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              cacheDirectory: true,
              cacheCompression: false,
              compact: true,
            },
          },
        },
        {
          test: /\.css$/i,
          use: 
            devMode ? [ "style-loader",
                  {
                    loader: "css-loader",
                    options: { url: true }
                  },
                postCSSLoader
            ] : [miniCSSLoader[0], miniCSSLoader[1], postCSSLoader],
          include: Path.resolve(__dirname, "../"),
        },
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: '@mdx-js/loader',
              /** @type {import('@mdx-js/loader').Options} */
              options: {}
            }
          ]
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: IMAGE_SIZE_LIMIT,
            },
          },
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash].[ext]',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                prettier: false,
                svgo: false,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
                ref: true,
              },
            },
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash].[ext]',
              },
            },
          ],
        },
      ],
    },
  };
}

devConfig().plugins?.push(new StatoscopeWebpackPlugin({
  saveReportTo: "reports/size/report-[name]-[hash].html",
  saveStatsTo: "reports/size/stats-[name]-[hash].json",
  normalizeStats: false,
  saveOnlyStats: false,
  disableReportCompression: false,
  statsOptions: {
    /* any webpack stats options */
  },
  additionalStats: ['reports/size/stats.json'],
  watchMode: false,
  name: 'My.Files File Size Report/s',
  open: 'file',
  compressor: 'gzip',
}));

export default devConfig;
