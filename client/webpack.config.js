const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                        sourceMap: true,
                        // options...
                        }
                    }
                    ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: [
                  {
                    loader: 'url-loader?limit=100000',
                  },
                ],
              },
              {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$\.(png|jpe?g|gif|svg)$/i,
                use: "file-loader"
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        }),
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