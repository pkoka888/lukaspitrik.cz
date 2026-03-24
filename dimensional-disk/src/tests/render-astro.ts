import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import type { ContainerRenderOptions } from 'astro/container';
import { Window } from 'happy-dom';

type AstroComponentFactory = Parameters<AstroContainer['renderToString']>[0];

export async function renderAstroComponent(
  Component: AstroComponentFactory,
  options: ContainerRenderOptions = {}
) {
  const container = await AstroContainer.create();
  
  let result: string;
  try {
    result = await container.renderToString(Component, options);
  } catch (error) {
    throw new Error(`Failed to render Astro component: ${error instanceof Error ? error.message : String(error)}`);
  }
  
  // Create a DOM-like object to match the original test expectations
  const window = new Window();
  const document = window.document;
  const containerEl = document.createElement('div');
  containerEl.innerHTML = result;
  
  return { container: containerEl };
}
