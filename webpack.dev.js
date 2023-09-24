const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: true, // 서버 시작 후 바로 열기
    historyApiFallback: true, // 라우터 설정 경로로 접근할 수 있도록 해줌
    hot: true,
  },
});
