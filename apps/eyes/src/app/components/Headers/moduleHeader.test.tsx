import { screen } from '@testing-library/dom';
import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import ModuleHeader from './moduleHeader';

describe('Module header', () => {
  let container: HTMLElement | null = null;
  let root: Root | null = null;
  let rootElement: HTMLElement | null = null;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    container.setAttribute('id', 'root');
    document.body.appendChild(container);
  });

  it('renders a h1 header', () => {
    act(() => {
      rootElement = document.getElementById('root');
      root = createRoot(rootElement!);
      root?.render(
        <ModuleHeader primary={true} headerTag="h1" headerContent="Gamers" />
      );
    });

    const header = screen.getByTestId('header');
    const headerHtml: string =
      '<h1 data-testid="header" class="mf-text-black mf-border-white dark:mf-text-whitemf-border-purple">Gamers</h1>';

    expect(header?.textContent).toBe('Gamers');
    expect(header.outerHTML).toBe(headerHtml);
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
