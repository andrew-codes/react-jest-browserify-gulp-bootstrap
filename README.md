# Front-end Bootstrap with React + Jest + Browserify + Gulp

This is a bootstrap project to help you get started quickly with a front-end project using React, Jest, Browserify, and gulp.

## Quick Start
```shell
npm install

# Run tests
npm test

# Build output
npm run build

# Build output and then start local server at http://localhost
npm run dev
```

## Adding Additional Third-Party Dependencies
Third-party dependencies are included via a CDN instead of with Bower. This is done by design to utilize the caching of common libraries in end-users' browsers. In order to include a new dependency, follow the steps below:

1. Include a script reference in the `__web/index.html` to their hosted CDN URL.
2. Include a reference to the library in `package.json` under `browserify-shim`. As an example: if you are using `require('jquery')` in your application, then you must tell browserify where `'jquery'` comes from. The shim in `package.json` gives you the ability to associate a name, `'jquery'` with its reference, `$` found in the global namespace.
3. [Optional]: By default Jest mocks all dependencies unless otherwise specified. If you wish Jest to not mock a dependency that is a third-party dependnecy, then you must install the dependency as a npm package. The reason why is so that when Jest encounters a `require('underscore')`, for example, and underscore is not mocked, it will look to require it from your npm modules.
