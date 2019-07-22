module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '~emfomy/mtg/'
    : '/',
};
