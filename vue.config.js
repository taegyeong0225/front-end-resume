const { defineConfig } = require('@vue/cli-service');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/front-end-resume/'
  : './',
  
  transpileDependencies: true,

  // Webpack 설정 확장
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxSize: 244000,
      },
    },
    plugins: [
      new PurgeCSSPlugin({
        paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
    ],
  },

  css: {
    extract: true,
    sourceMap: false,
  },

  productionSourceMap: false,

  // 개발 서버 설정
  devServer: {
    port: 8080, // 개발 서버 포트 번호
    open: true, // 브라우저 자동 열기
    client: {
      overlay: {
        warnings: true, // 경고 표시
        errors: true, // 오류 표시
      },
    },
  },
});