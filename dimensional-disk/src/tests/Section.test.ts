import { render } from '@astrojs/testing';
import Section from '../components/Section.astro';

test('Section renders title and content', async () => {
    const { container } = await render(Section, { props: { title: 'Test Section', children: 'Hello world' } });
    expect(container.querySelector('h2')?.textContent).toBe('Test Section');
    expect(container.textContent).toContain('Hello world');
});