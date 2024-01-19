import { path } from './node_modules/vue';
import { defineConfig } from '@vue/cli-service';
export default defineConfig({
  transpileDependencies: true,
  pwa: { 
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    },
    devServer: {
      proxy: {
        '/server': {
          target: 'http://localhost:8080',
          changeOrigin: true, // 解决跨域
          pathRewrite: {
            '^/server': '',
          },
        },
      },
    }
  },
  build:{
    index:path.resolve(__dirname,'./dist/index.html'),
    assetsRoot:path.resolve(__dirname,'./dist/'),
    assetsSubDirectory:'static',
    assetsPublicPath:'./'
  }
})
export const publicPath = '/';