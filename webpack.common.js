const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 빌드 시 스크립트를 추가한 html파일을 자동으로 생성하는 플러그인
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.[contenthash:8].js', // 브라우저 캐싱으로 인해 사용자가 새로운 배포버전을 사용하지 못하는 상황을 방지하기위한 옵션
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // 웹팩에게 모듈의 확장자를 해석하는 방식을 알려주어 import시 배열에 나열한 확장자들에 대해 확장자 생략이 가능하게 하는 속성
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, //ts, tsx 파일일때
        exclude: /node_modules/, //node_modules을 제외하고
        loader: 'babel-loader', //babel로 트랜스파일
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico|webp)$/i, // ~일 때
        use: [
          {
            loader: 'file-loader', //file-loader로 읽어라
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new RefreshWebpackPlugin(),
  ],
};
