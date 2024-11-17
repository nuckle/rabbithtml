# rabbithtml

Fast and ligtweight Vite starter template

## Demo 

- [GitHub](https://nuckle.github.io/rabbithtml/)
- [GitLab](https://nuckle.gitlab.io/rabbithtml)

## Features

- SASS support
- SVG sprites support (just paste your .svg files in src/img/svg folder)
- CSS, JS minification and optimization
- Prettier format for production
- Live preview
- CI/CD support for GitHub and GitLab

## How to use

```sh
git clone https://gitlab.com/nuckle/rabbithtml
cd rabbithtml
npm i
npm run dev
```

Now you should be able to access the template in your browser using `localhost:3000'

## Commands

- `dev` - run Vite in dev mode
- `build` - build a website to **/dist** folder
- `preview` - preview the build
- `prod` - the same as `build` except the format .html files with `js-beautify`

## File structure

```
├── package.json
├── README.md
├── src
│   ├── css
│   │   └── style.css
│   ├── example
│   │   └── index.html
│   ├── img
│   │   └── svg
│   ├── index.html
│   ├── js
│   │   └── example.js
│   ├── main.js
│   ├── parts
│   │   ├── footer.html
│   │   └── head.html
│   ├── public
│   │   └── fonts
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
