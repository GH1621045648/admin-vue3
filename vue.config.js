var path = require('path');
module.exports = {
  //baseUrl
  publicPath:
    process.env.NODE_ENV === 'production' ? 'http://production.com' : '/',
  //放置打包后生成的文件目录。
  outputDir: 'dist',
  //放置打包生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  //放置打包生成的 index.html 的 (相对于 outputDir 的,也可以是一个绝对路径) 目录。
  indexPath: 'index.html',
  //是否需要打包后的文件名添加哈希值
  filenameHashing: true,
  //是否启用eslint
  lintOnSave: process.env.NODE_ENV !== 'production',
  //Vue 组件中使用 templatexu 选项
  runtimeCompiler: true,
  //打包时map源码，定位问题位置，设置true极为影响性能
  productionSourceMap: false,
  //开发服务配置
  devServer: {
    port: 8081,
    host: 'localhost',
    //添加http请求头返回
    headers: {
      // 'X-foo': '112233',
    },
    //热更新，也可以 --hot打开，局部更新视图
    hot: process.env.NODE_ENV !== 'production',
    //使用默认浏览器去启动
    open: true,
    //编译错误时页面显示信息
    overlay: true,
    //对所有服务器资源采用gzip进行压缩
    compress: true,
    proxy: {
      '/api': {
        // 目标接口的域名
        target: 'http://production.com',
        // secure: true,  // https 的时候 使用该参数
        // 是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // 重写路径，把/api重写为''，http://XXX.com/abcd
        },
      },
    },
  },
  configureWebpack: (config) => {
    // 入口文件;
    config.entry.app = './src/main.js';
    // 按照环境配plugins;
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production';
    } else {
      config.mode = 'development';
      // 为开发环境修改配置...
    }
    // 开发生产共同配置
    Object.assign(config, {
      resolve: {
        // 别名配置
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@p': path.resolve(__dirname, './src/pages'),
        },
      },
    });
  },
  chainWebpack: (config) => {
    config.module;
    config.plugin('html').tap((args) => {
      args[0].title = '你想设置的title名字';
      return args;
    });
  },
  css: {
    //设置为flase后，非*moudle.css/less···也视为css.mouldle
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          //自动生成moudle类名
          localIdentName: '[name]-[hash]',
        },
        //破折号转驼峰
        localsConvention: 'camelCaseOnly',
      },
    },
  },
};
