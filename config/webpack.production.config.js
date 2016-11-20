const webpack = require('webpack');
const Config = require('webpack-config').default;

module.exports = new Config().extend('config/webpack.base.config.js').merge({
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            'process.env.API_URL': process.env.PRODUCTION_API_URL,
            'process.env.GOOGLE_API_KEY': process.env.PRODUCTION_GOOGLE_API_KEY,
            'process.env.SENTRY_DSN': process.env.SENTRY_DSN
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        })
    ]
});