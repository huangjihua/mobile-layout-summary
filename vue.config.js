const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  devServer: {
    host: 'localhost',
    port: '5000',
    disableHostCheck: true,
    open: true, //  npm run serve 自动打开浏览器
    index: '/index.html', //  默认启动页面
    overlay: {
      warnings: false,
      error: false,
    },
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : '',
  },
  transpileDependencies: ['ky', 'abortcontroller-polyfill'],
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@comps', resolve('src/components'));
    const basePath = `${__dirname}/src/assets/`;
    config.plugin('spritesmith').use(require('webpack-spritesmith'), [
      {
        src: { cwd: `${basePath}img/`, glob: 'icon-*.png' },
        target: {
          image: `${basePath}img/sprite.png`,
          css: `${basePath}scss/_sprite_variables.scss`,
        },
        apiOptions: { cssImageRef: '~@assets/img/sprite.png' },
        spritesmithOptions: { padding: 6 },
      },
    ]);
    if (process.env.NODE_ENV === 'production') {
      config.optimization
        .minimizer('noconsole')
        .use(require('terser-webpack-plugin'), [
          {
            test: /\.js(\?.*)?$/i,
            terserOptions: {
              compress: {
                drop_console: true,
                pure_funcs: ['console.log'],
              },
            },
          },
        ]);
    } else {
      // disable optimization during tests to speed things up
      config.optimization.minimize(false);
    }
  },
};
