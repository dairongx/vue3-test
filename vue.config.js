const path = require('path');
const merge = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')

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
    chainWebpack: config => {
        config.module
            .rule('ts')
            .use('ts-loader')
            .tap(options => {
                options = merge(options, {
                    happyPackMode: true,
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: 'vant',
                                libraryDirectory: 'es',
                                // 这句必须加上，不然修改主题没有效果
                                style: name => `${name}/style/less`
                            })
                        ]
                    }),
                    compilerOptions: {
                        module: 'es2015'
                    }
                })
                return options
            })
    },
    lintOnSave: false
}