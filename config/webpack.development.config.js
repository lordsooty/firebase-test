const webpack = require('webpack');
const Config = require('webpack-config').default;

module.exports = new Config().extend('config/webpack.base.config.js').merge({
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            'process.env.API_URL': process.env.DEVELOPMENT_API_URL || '"http://i4t-api-test.edge-labs.io"',
            // 'process.env.API_URL': process.env.DEVELOPMENT_API_URL || '"http://localhost:9001"',
            'process.env.GOOGLE_API_KEY': process.env.DEVELOPMENT_GOOGLE_API_KEY || '"AIzaSyCNDrY1aFohQ-IflLxbodBG9CeQILmSibA"',
            'process.env.SENTRY_DSN': process.env.SENTRY_DSN
        })
    ]
});