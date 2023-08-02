import { defineConfig } from 'vite'
import { resolve } from 'path'
import viteImagemin from 'vite-plugin-imagemin'
import cssnano from 'cssnano'
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
			input: {
				main: resolve(root, 'index.html'),
				example: resolve(root, 'example', 'index.html')
			},
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
