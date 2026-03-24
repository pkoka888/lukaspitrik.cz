// @vitest-environment node
import { renderAstroComponent } from './render-astro';
import Hero from '../components/Hero.astro';

test('Hero renders with image and title', async () => {
    const { container } = await renderAstroComponent(Hero);
    expect(container.querySelector('h1')).toBeTruthy();
    expect(container.querySelector('img')).toBeTruthy();
});
