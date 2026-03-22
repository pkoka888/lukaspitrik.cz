import { render } from '@astrojs/testing';
import Hero from '../components/Hero.astro';

test('Hero renders with image and title', async () => {
  const { container } = await render(Hero);
  expect(container.querySelector('h1')).toBeTruthy();
  expect(container.querySelector('img')).toBeTruthy();
});
