module.exports = {
  // 公共文件目录
  publicPath: './',
  // 关闭eslint
  lintOnSave: false,
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
}