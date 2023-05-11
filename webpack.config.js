import { resolve } from 'node:path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default {
  entry: {
    main: './src/index.tsx'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[fullhash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.[jt]s(x)?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx']
        }
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
        type: 'asset/resource'
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './public/index.html')
    }),
    new CleanWebpackPlugin(),
    new Dotenv()
  ],
  resolve: {
    alias: {
      '@public/*': resolve(__dirname, './public/')
    }
  }
}
