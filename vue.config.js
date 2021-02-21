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
    }
}