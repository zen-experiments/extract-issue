# extract-issue

When using ExtractTextPlugin to extract CSS, via `sass-loader`, `postcss-loader`, `css-loader` chain, all CSS files are emitted on any change to any one of the SCSS files.

The expectation is that only the relevant SCSS file is processed and updated.

## Explorations

Some of these are just due diligence, of sorts, but mostly to eliminate some sort of misconfiguration on my part (at least partially).

### CSS instead of SCSS

To test whether the issue is with (somehow) the SCSS toolchain, I've replaced `require('./index.scss')` with `require('./index.css')`.

Same result. All CSS files are emitted.

### Change JS files

To test whether the issue is with Webpack (or at least to kind of unverify it), I've changed JS files.

The behavior is as expected (within this issue): only relevant JS file is emitted, while all CSS files are emitted, again.

### Add JS loaders

To test whether the issue is with loaders application, I've added `babel-loader` to JS chain and transferred `index.js` files to be ES6.

The behavior is as expected (within this issue): only relevant JS file is emitted, while all CSS files are emitted, again.

## Installation

1. `yarn install`  
2.`yarn watch`  
3. change any SCSS file to see all being emitted all the time

