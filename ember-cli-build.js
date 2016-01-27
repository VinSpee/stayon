/* global require, module */
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = (defaults) => {
  const matchCSS = [new RegExp(/.*\.(css)/)];
  const moreStyles = mergeTrees([
    new Funnel('web_modules', {
      srcDir: '/',
      include: matchCSS,
    }),
    new Funnel('app/styles', {
      srcDir: '/',
      include: matchCSS,
    }),
  ]);
  const app = new EmberApp(defaults, {
    svgstore: {
      files: {
        sourceDirs: 'app/icons',
        outputFile: '/assets/icons.svg',
        excludeSources: true,
      },
    },
    babel: {
      includePolyfill: true,
    },
    postcssOptions: {
      plugins: [
        {
          module: require('postcss-import'),
        },
        {
          module: require('postcss-nesting'),
        },
        {
          module: require('postcss-quantity-queries'),
        },
        {
          module: require('postcss-modular-scale'),
        },
        {
          module: require('postcss-cssnext'),
        },
        {
          module: require('cssnano'),
        },
        {
          module: require('postcss-reporter'),
        },
        {
          module: require('postcss-browser-reporter'),
        },
      ],
    },
    trees: {
      styles: moreStyles,
    },
  });

  return app.toTree();
};
