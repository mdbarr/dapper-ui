module.exports = {
  devServer: { proxy: { '^/api': { target: 'http://localhost:1389' } } },
  productionSourceMap: false
};
