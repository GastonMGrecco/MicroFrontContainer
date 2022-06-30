const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production';
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'build'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js'
    },
    devServer: {
      port: 8080,
      open: true
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-runtime'],
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new ModuleFederationPlugin({
        name: 'container',
        filename: 'remoteEntry.js',
        remotes: {
          login: 'login@http://localhost:8082/remoteEntry.js',
          logup: 'login@http://localhost:8082/remoteEntry.js',
          home: 'login@http://localhost:8082/remoteEntry.js', // 'login@https://mflogin.netlify.app/remoteEntry.js',
          nav: 'nav@http://localhost:8081/remoteEntry.js'
        },
        exposes: {
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: deps.react
          }
        }
      })
    ]
  };
};
