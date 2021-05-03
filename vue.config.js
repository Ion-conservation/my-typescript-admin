// const path = require('path')
//
const buildInfo = {
  appVersion: require('./package.json').version,
  env: process.env.NODE_ENV,
};
// cdn预加载使用
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  moment: 'moment',
  'vue-i18n': 'VueI18n',
  'ant-design-vue': 'antd',
};

const cdn = {
  // 将会注入index.html js 顺序不可乱 注意版本
  css: [],
  js: [
    'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js',
    'https://cdn.jsdelivr.net/npm/vue-router@3.2/dist/vue-router.min.js',
    'https://cdn.jsdelivr.net/npm/vue-i18n@8.24.2/dist/vue-i18n.min.js',
    'https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.min.js',
    'https://cdn.jsdelivr.net/npm/moment@2.29.1/locale/zh-cn.js',
    'https://cdn.jsdelivr.net/npm/ant-design-vue@1.7.4/dist/antd.min.js',
  ],
};

module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV == 'development') {
      config.plugin('html').tap(args => {
        args[0].title = 'title development';
        return args;
      });
    } else {
      config.plugin('html').tap(args => {
        args[0].title = 'old-guy';
        return args;
      });
    }
    config
      .plugin('html') // 注入环境变量
      .tap(args => {
        args[0].cdn = cdn;
        args[0].buildInfo = buildInfo;
        return args;
      });
    // 生产环境下使用CDN
    config.when(process.env.NODE_ENV === 'production', config => {
      config.merge({
        externals: externals,
      });
      config.devtool('none');
      config.optimization.minimizer('terser').tap(args => {
        args[0].terserOptions.compress.drop_console = true; // 移除 console.log
        return args;
      });
    });
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['D:\\Project\\my-typescript-admin\\path\\to\\less\\variables\\*.less'],
    },
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
