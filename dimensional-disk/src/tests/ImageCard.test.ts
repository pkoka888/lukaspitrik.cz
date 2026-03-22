import { render } from '@astrojs/testing';
import ImageCard from '../components/ImageCard.astro';

test('ImageCard renders image and optional title/description', async () => {
  const { container } = await render(ImageCard, { props: { src: '/assets/astro.svg', alt: 'Astro logo', title: 'Logo', description: 'Astro logo' } });
  expect(container.querySelector('img')).toBeTruthy();
  expect(container.textContent).toContain('Logo');
  expect(container.textContent).toContain('Astro logo');
});
