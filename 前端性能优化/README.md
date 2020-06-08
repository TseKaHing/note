## 前端页面性能监控

## 如何做前端的性能优化？

1. 减少 http 请求
2. 封装通用组件
3. webpack uglyjs 压缩项目打包体积
4. 减少不必要的缓存 cookie
5. 封装工具类，避免方法重用
6. 使用 JSON 传输数据，避免使用 XML（别问，问就是 JSON 存储空间小）
7. 路由懒加载

- vue 异步组件
  vue 异步组件技术 ==== 异步加载
  vue-router 配置路由 , 使用 vue 的异步组件技术 , 可以实现按需加载 .
  但是,这种情况下一个组件生成一个 js 文件
  ```
  component: resolve => require(['@/components/home'],resolve)
  ```
- es 提案的 import()
  组件懒加载方案二 路由懒加载(使用 import)
  ```
  // 下面2行代码，没有指定webpackChunkName，每个组件打包成一个js文件。
  /* const Home = () => import('@/components/home')
  const Index = () => import('@/components/index')
  const About = () => import('@/components/about') */
  // 下面2行代码，指定了相同的webpackChunkName，会合并打包成一个js文件。 把组件按组分块
  const Home =  () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')
  const Index = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/index')
  const About = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/about')
  ```
- webpack 的 require,ensure()
  webpack 提供的 require.ensure()
  vue-router 配置路由，使用 webpack 的 require.ensure 技术，也可以实现按需加载。
  这种情况下，多个路由指定相同的 chunkName，会合并打包成一个 js 文件。
  ```
  /* 组件懒加载方案三: webpack提供的require.ensure() */
  {
  path: '/home',
  name: 'home',
  component: r => require.ensure([], () => r(require('@/components/home')), 'demo')
  }, {
  path: '/index',
  name: 'Index',
  component: r => require.ensure([], () => r(require('@/components/index')), 'demo')
  }, {
  path: '/about',
  name: 'about',
  component: r => require.ensure([], () => r(require('@/components/about')), 'demo-01')
  }
  ```

8. 图片懒加载
9. 服务端渲染
