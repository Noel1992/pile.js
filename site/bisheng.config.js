const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

console.log('[env]: ', process.env.NODE_ENV)

module.exports = {
  source: {
    components: './components',
    docs: './docs',
  },
  theme: path.resolve(__dirname, 'bisheng-theme-pile'),
  themeConfig: {
    home: '/',
    sitename: 'pile',
    // tagline: 'pile theme',
    navigation: [{
      title: 'pile-ui',
      link: 'https://github.com/didi/pile.js',
    }],
    footer: 'Copyright © 2018 滴滴企业版设计体验技术部联合出品',
    // hideBisheng: true,
    github: 'https://github.com/didi/pile.js',
  },
  root: process.env.NODE_ENV === 'virtual' ?  '/pile-docs/' : '/',
  webpackConfig(config) {
    const conf = config;
    conf.resolve.alias = {
      'pile-ui': path.join(process.cwd(), 'components'),
    };

    config.module.rules = config.module.rules.filter(rule => !/\.svg/.test(rule.test));

    // console.log('svgRule:', svgRule);
    config.module.rules.push({
      test: /\.svg$/,
      include: [/node_modules\/pile-icons/],
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: '[name]',
            // extract: true,
          },
        },
      ],
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      exclude: [/node_modules\/pile-icons/],
      loader: 'url-loader?limit=10000&minetype=image/svg+xml',
    });

    config.plugins.push(new SpriteLoaderPlugin());

    conf.devtool = 'source-map';
    return conf;
  },
};
