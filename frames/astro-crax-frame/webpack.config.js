const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const federationConfig = require('./federation.config.json');
const { dependencies } = require('./package.json');
const {
  default: WebpackRemoteTypesPlugin,
} = require('webpack-remote-types-plugin');

const port = 3000;

module.exports = {
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port,
    historyApiFallback: true,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'dts-loader',
            options: {
              ...federationConfig,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      filename: 'remoteEntry.js',
      ...federationConfig,
      shared: {
        '@astrojs/react': {
          singleton: true,
          requiredVersion: dependencies['@astrojs/react'],
        },
        '@types/react': {
          requiredVersion: dependencies['@types/react'],
        },
        '@types/react-dom': {
          singleton: true,
          requiredVersion: dependencies['@types/react-dom'],
        },
        astro: {
          singleton: true,
          requiredVersion: dependencies.astro,
        },
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
    new WebpackRemoteTypesPlugin({
      ...federationConfig,
      outputDir: 'types',
      remoteFileName: '[name]-dts.tgz',
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};
