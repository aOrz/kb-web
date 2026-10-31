# kb-web

> kb

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Regression checks

The regression tests require Node.js 18+ and no installed dependencies:

```bash
npm test
```

They cover calendar leap years/month boundaries, course response validation,
request cancellation, stale responses, and reuse of a course route. They do not
replace a production build or browser/real-backend testing. The legacy webpack
and node-sass build dependencies need a separately planned modernization before
assuming compatibility with current Node.js releases.
