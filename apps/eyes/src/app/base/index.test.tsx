import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from './app';

describe('My Files Test Suite', () => {
  let container: HTMLElement | null = null;
  let root: Root | null = null;
  let rootElement: HTMLElement | null = null;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    container.setAttribute('id', 'root');
    document.body.appendChild(container);
  });

  it('renders index without crashing', () => {
    act(() => {
      rootElement = document.getElementById('root');
      root = createRoot(rootElement!);
      root?.render(<App />);
    });
    expect(container?.textContent).toBe('GamerBreak the worldFiles');
  });

  afterEach(() => {
    // cleanup on exiting
    act(() => {
      root?.unmount();
      container!.remove();
      container = null;
      root = null;
      rootElement = null;
    });
  });
});
