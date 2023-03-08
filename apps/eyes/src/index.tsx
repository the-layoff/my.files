import 'react-app-polyfill/ie11';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import React from 'react';
import { createRoot } from 'react-dom/client';

import reportWebVitals from './app/utils/reportWebVitals';

import App from './app/base/app';
import './app/base/index.css';

Sentry.init({
  dsn: 'https://9725c4a44bde45fd8383a2e7877239f1@o4504788985053184.ingest.sentry.io/4504788987936768',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);

reportWebVitals();
