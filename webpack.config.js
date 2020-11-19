const {
    newWebpackConfigBuilder,
    SourceType
} = require('@goldeimer/webpack-config')

const builder = newWebpackConfigBuilder(__dirname)

builder.loadSource(SourceType.JAVASCRIPT)

builder.setOutputPath('static')
builder.setPublicPath('/wp-content/plugins/[name]/static/')

module.exports = (...args) => builder.build(...args)
