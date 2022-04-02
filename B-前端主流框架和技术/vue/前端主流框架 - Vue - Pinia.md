# 前端主流框架 - Vue - Pinia

## 基础操作

### Pinia 是一个用于 Vue 的状态管理库，类似 Vuex, 是 Vue 的另一种状态管理方案

### 使用步骤

- 1、安装： yarn add pinia@next
- 2、创建一个 pinia（根存储）并将其传递给应用程序：

import { createPinia } from 'pinia';
app.use(createPinia());
- 3、核心概念与基本使用

	- Store

		- 定义

			- // store.ts
import { defineStore } from 'pinia'

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useStore = defineStore({
    //  id: 必须的，在所有 Store 中唯一
    id: "myGlobalState",

    // state: 返回对象的函数
    state: () => ({
        counter: 0
    }),
    ......
})

		- 使用

			- <script lang="ts" setup>
    // 导入 Store， 使用自己的路径
    import { useStore } from '@/store/store'
    import { storeToRefs } from 'pinia'

    // 调用函数 获得Store
    const store = useStore()
    // state解构：storeToRefs
    const { counter } = storeToRefs(store)
</script>

	- Getters

		- 子主题 1

	- actions

		- 修改state
		- 异步 action

			- actions: {
    async login(account, pwd) {
          const { data } = await api.login(account, pwd)
          return data
    },
    ......
}

		- action 间的相互调用直接用 this 访问即可
		- 子主题 1

- 4、常用插件

	- 数据持久化： pinia-plugin-persist

		- 官网： https://seb-l.github.io/pinia-plugin-persist/#install
		- 安装： yarn add pinia-plugin-persist
		- 使用： 
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist) // 注意这里是store.use，而不是app.use
		-   actions:{......},
  // 开启缓存
  persist: {
    enabled: true,
    // 自定义 key
    strategies: [
      {
        key: 'my_user',
        storage: localStorage,
      },
      {
        // 持久化部分 state
        // 默认所有 state 都会进行缓存，你可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
        // 未指定 key 的话，则直接存到当前store的名下
        storage: localStorage,
        paths: ['name']
      },
      {
        // 未指定 storage，则缓存到 Session Storage里面
        key: 'Counter'
      }
    ]
  }

	- 子主题 2

### 子主题 3

## 源码分析: packages/pinia/*

### rollup.config.js

- 概述： Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码
- rollup中文文档：
---- https://www.rollupjs.com/

### 主入口： src/index.ts

- export （导出汇总）

	- setActivePinia

		- 设置当前活跃的 pinia

	- getActivePinia

		- 获取当前活跃的 pinia

	- createPinia
	- defineStore
	- skipHydrate
	- storeToRefs
	- PiniaVuePlugin
	- mapActions
	- mapStores
	- mapState
	- mapWritableState
	- mapGetters
	- setMapStoreSuffix
	- acceptHMRUpdate
	- PiniaVuePlugin

- 核心导出

### env.ts

- export const IS_CLIENT = typeof window !== 'undefined'

### global.d.ts

### types.ts

### rootStore.ts

- 变量：activePinia
- fn: setActivePinia
- fn: getActivePinia
- interface/type：Pinia / PiniaPluginContext / PiniaPlugin / PiniaStorePlugin

### createPinia.ts

- // Creates a Pinia instance to be used by the application
export function createPinia(): Pinia {
    ......
}
- const pinia: Pinia = markRaw({
    install(app: App) {......}, // 这是vue的插件机制，对外暴露install方法
    use(plugin) {......},
    ......
})
return pinia

	- createPinia函数调用后 「返回的主体」

### store.ts

- fn: defineStore（重载）

	- Method 1： defineStore(id, options)

		- options里面不能有id属性

	- Method 2：defineStore(options)

		- options里面必须有id属性

	- Method 3：defineStore(id, storeSetup: ()=>SS, options)
	- defineStore创建的实例，可以通过$id访问到实例ID
	- 主要逻辑函数： createSetupStore / createOptionsStore

		- createSetupStore(id, setup, options, pinia)

			- 逻辑原理： TODO

		- createOptionsStore(id, options as any, pinia)

			- 内部还是会调用： createSetupStore(id, setup, options, pinia)

- fn: skipHydrate
- interface/type: StoreState / StoreGetters / StoreActions / 

### storeToRefs.ts

-   // 简化版本
  const refs = {}
  for (const key in store) {
    const value = store[key]
    if (isRef(value) || isReactive(value)) {
      refs[key] = toRef(store, key)
     }
  }
  return refs
- 核心代码原理是： for in 遍历store，然后逐个属性进行toRef处理

### mapHelpers.ts

- ?????
- mapState等

### vue2-plugin.ts

- export const PiniaVuePlugin: Plugin = function (_Vue) {
    _Vue.mixin({
        beforeCreate() {......},
        destroyed() {......}
    })
}

### 依赖包：vue-demi

- Vue Demi是一个让你可以开发同时支持Vue2和3的通用的Vue库的开发工具，而无需担心用户安装的版本
- 参考文档： 

	- 使用 Vue Demi 构建同时兼容Vue2和Vue3的组件库：
https://segmentfault.com/a/1190000041397887
	- vue-demi: 一拳打穿vue2和3的版本次元壁：
https://juejin.cn/post/7032860019880099847

## 官网

### https://pinia.vuejs.org/

## 参考文档

### Pinia 快速入门

- https://segmentfault.com/a/1190000040373313

### Pinia(皮尼亚)源码分析

- https://juejin.cn/post/7031727358369333279

### Pinia.js 上手指南

- https://segmentfault.com/a/1190000041246156

### 拥抱pinia，快速上手，详解指南

- https://juejin.cn/post/7063376847198748702

### 子主题 4

*XMind - Trial Version*