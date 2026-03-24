// @vitest-environment node
import { renderAstroComponent } from './render-astro';
import Nav from '../components/Nav.astro';

test('Nav renders with dark mode toggle', async () => {
    const { container } = await renderAstroComponent(Nav);
    expect(container.querySelector('#theme-toggle')).toBeTruthy();
});
