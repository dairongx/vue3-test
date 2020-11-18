const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'src': path.resolve(__dirname, 'src'),
                '@': path.resolve(__dirname, 'src'),
                'components': path.resolve(__dirname, 'src/components'),
                'views': path.resolve(__dirname, 'src/views'),
            }
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px-to-viewport")({
                        unitToConvert: "px",
                        viewportWidth: 750,
                        unitPrecision: 3,
                        propList: [
                            "*"
                        ],
                        viewportUnit: "vw",
                        fontViewportUnit: "vw",
                        selectorBlackList: ['.pxToVwBlack_'],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: true,
                        exclude: /(\/|\\)(node_modules)(\/|\\)/,
                    })
                ]
            }
        }
    },
    lintOnSave: false
}