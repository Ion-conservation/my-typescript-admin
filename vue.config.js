// const path = require('path')

module.exports = {
    chainWebpack: (config) => {
        if (process.env.NODE_ENV == 'development') {
            config.plugin('html').tap(args => {
                args[0].title = 'title development'
                return args
            })
        } else {
            config.plugin('html').tap(args => {
                args[0].title = 'title else'
                return args
            })
        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
          'D:\\Project\\my-typescript-admin\\path\\to\\less\\variables\\*.less'
        ]
      },
      i18n: {
        locale: 'zh',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
}
