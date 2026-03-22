import { render } from '@astrojs/testing';
import Nav from '../components/Nav.astro';

test('Nav renders with dark mode toggle', async () => {
  const { container } = await render(Nav);
  expect(container.querySelector('#theme-toggle')).toBeTruthy();
});
