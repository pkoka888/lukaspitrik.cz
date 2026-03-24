// @vitest-environment node
import { renderAstroComponent } from './render-astro';
import Section from '../components/Section.astro';

test('Section renders title', async () => {
    const { container } = await renderAstroComponent(Section, { 
        props: { title: 'Test Section' }
    });
    expect(container.querySelector('h2')?.textContent).toBe('Test Section');
});

test('Section renders children content', async () => {
    const { container } = await renderAstroComponent(Section, { 
        props: { title: 'Test Section', children: 'Hello world' }
    });
    expect(container.textContent).toContain('Hello world');
});
