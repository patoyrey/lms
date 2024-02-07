const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = (env) => ({
    mode: env.MODE,
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        })
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, "dist"),
        },
        historyApiFallback: true,
        port: 3000,
        hot: true,
      },
})