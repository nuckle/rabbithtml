# rabbithtml

Fast and ligtweight Vite template


# Features

- SASS support
- SVG sprites support (just paste your .svg files in src/img/svg folder)
- CSS, JS minification and optimization
- Prettier format for production
- Live preview (for dev and build versions)


# How to use

```sh
git clone https://gitlab.com/nuckle/rabbithtml
cd rabbithtml
npm i
npm run dev
```

Now you should be able to access the template in your browser using `localhost:3000'



# Commands

`dev` - run Vite in dev mode
`build` - build a website to **/dist** folder
`preview` - preview the build 
`prod` - the same as `build` except the format .html files with `prettier`


# File structure


```
├── package.json
├── README.md
├── src
│   ├── css
│   │   └── style.css
│   ├── example
│   │   └── index.html
│   ├── img
│   │   ├── cat1.png
│   │   ├── cat2.png
│   │   ├── sprite.svg
│   │   └── svg
│   │       ├── github.svg
│   │       └── gitlab.svg
│   ├── index.html
│   ├── main.js
│   ├── parts
│   │   ├── footer.html
│   │   └── header.html
│   ├── public
│   │   ├── favicon.ico
│   │   └── fonts
│   │       ├── ...woff2
│   └── sass
│       ├── base
│       │   ├── config.scss
│       │   ├── main.scss
│       │   └── media.scss
│       ├── blocks
│       │   └── example.scss
│       ├── style.scss
│       └── vendor
│           └── normalize.css
└── vite.config.js
```






