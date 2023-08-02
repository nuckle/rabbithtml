import { defineConfig } from 'vite'
import { resolve, relative, extname } from 'path'
import { fileURLToPath } from 'url'
import glob from 'fast-glob'
import cssnano from 'cssnano'
import viteImagemin from 'vite-plugin-imagemin'
import handlebars from 'vite-plugin-handlebars'
import viteSvgSpriteWrapper from 'vite-svg-sprite-wrapper'


const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
	root,
	css: {
		postcss: {
			plugins: [
				cssnano({
					preset: ['default', { discardComments: { removeAll: true } }]
				}),
			]
		}
	},
	plugins: [
		viteSvgSpriteWrapper({
			icons: 'src/img/svg/*.svg',
			outputDir: 'src/img',
			sprite: {
				svg: {
					dimensionAttributes: false
				},
			},
		}),
		handlebars({
			partialDirectory: resolve(__dirname, 'src/parts'),
		}),
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 20,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [
					{
						name: 'removeViewBox',
					},
					{
						name: 'removeEmptyAttrs',
						active: false,
					},
				],
			},
		}),
	],
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			// input: {
			// 	main: resolve(root, 'index.html'),
			// 	example: resolve(root, 'example', 'index.html')
			// },
			input: Object.fromEntries(
				glob.sync(['./src/*.html', './src/**/*.html', '!./src/parts/**']).map(file => [
					// This remove `src/` as well as the file extension from each
					// file, so e.g. src/nested/foo.html becomes nested/foo
					relative(__dirname, file.slice(0, file.length - extname(file).length)),
					// This expands the relative paths to absolute paths, so e.g.
					// src/nested/foo becomes /project/src/nested/fo.js
					fileURLToPath(new URL(file, import.meta.url)),
				]),
			),
			output: {
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',

				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
						return 'img/[name]-[hash][extname]';
					}

					if (/\.css$/.test(name ?? '')) {
						return 'css/[name]-[hash][extname]';
					}

					// default value
					// ref: https://rollupjs.org/guide/en/#outputassetfilenames
					return 'assets/[name]-[hash][extname]';
				},
			},
		}
	}
})
