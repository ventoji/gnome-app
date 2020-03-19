const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
    const isProduction = env === 'production';
    let env1=isProduction ? dotenv.config({path:'.env'}).parsed : dotenv.config({path:'.env.development'}).parsed;
    let publicPathSite = isProduction ? process.env.PUBLIC_URL +'/dist/': 'dist/' ;
         
    const envKeys = Object.keys(env1).reduce((prev, next) => {
            prev[`process.env.${next}`] = JSON.stringify(env1[next]);
            return prev;
          }, {});
  

   // console.log(publicPathSite);

    return {
        entry: './src/index.js',
    output :{
        path: path.join(__dirname,'public','dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use:[
                'style-loader',
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: publicPathSite,
                    },
                  },
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [autoprefixer()]
                    }
                  },
                'sass-loader'
            ]
        },
        {
            test: /\.html$/,
            use: [{
                loader: 'ejs-loader'
            }, {
                loader: 'extract-loader'
            }, {
                loader: 'html-loader',
                    options: {
                    interpolate: true
                    }
                }]
          }]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map', 
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: '[id].css'
        }),
        new webpack.DefinePlugin(envKeys),
        new HtmlWebpackPlugin({  
            inject: false,
            filename: '../index.html',
            template: './src/index.html',
            templateParameters: {
              title: 'gnome app',
              src: isProduction ? process.env.PUBLIC_URL +'/dist/bundle.js':'/dist/bundle.js',
              srcStyle:  isProduction ? process.env.PUBLIC_URL +'/dist/style.css':'/dist/style.css'
             }
          })
    ]
    };
};
 