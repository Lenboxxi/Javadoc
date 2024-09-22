// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'JavaDoc',
			social: {
				github: 'https://github.com/Lenboxxi/Javadoc',
			},
            locales: {
                root: {
                    label: 'Deutsch',
                    lang: 'de',
                },
            },
			sidebar: [
				{
					label: 'Java',
                    autogenerate: { directory: 'java' },
				},
			],
		}),
	],
});
