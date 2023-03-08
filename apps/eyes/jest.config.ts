import { Config } from '@jest/types';

export type JestConfigOptions = Partial<Config.InitialOptions>;

export default async (_: (relativePath: string) => void, rootDir: string = '.'): Promise<JestConfigOptions> => {
    const config: JestConfigOptions = {
      bail: 1,
      testEnvironment: "jsdom",
      setupFilesAfterEnv: ['<rootDir>/./.tests/setupJest.ts'],
      globals: {
        IS_REACT_ACT_ENVIRONMENT: true
      },
      transform: {
        '.(ts|tsx)$': require.resolve('ts-jest/dist'),
        '.(js|jsx)$': require.resolve('babel-jest'), // jest's default
      },
      transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
      collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],

      testMatch: ['<rootDir>/src/**/*.(spec|test).{ts,tsx,js,jsx}'],
      testEnvironmentOptions: {
        url: 'http://localhost',
      },
      roots: ['<rootDir>/'],
      rootDir,
      verbose: true,
      watchPlugins: [
        require.resolve('jest-watch-typeahead/filename'),
        require.resolve('jest-watch-typeahead/testname'),
      ],
    }
    return config;
  };
