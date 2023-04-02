module.exports = {
  // 公共文件目录
  publicPath: './',
  // 关闭eslint
  lintOnSave: false,
  // 跨域配置
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  },
  // 像素适配 宽度px转换成rem; vant-375
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
              rootValue: 37.5,
              propList: ['*']
          })
        ]
      }
    },
  },
}