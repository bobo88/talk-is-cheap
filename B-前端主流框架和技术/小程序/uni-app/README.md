# Talk is cheap. Show me the code.
#### *每日一问*

--------------------------------------
### ⭐ **小程序: uni-app**  
*<font color="#FF6600">uni-app</font>*

#### 一、教程：
1. 【工程简介】：一个 uni-app 工程，就是一个 Vue 项目，你可以通过 HBuilderX 或 cli 方式快速创建 uni-app 工程
1. 【目录结构】：  
    ┌─uniCloud              云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）  
    │─components            符合vue组件规范的uni-app组件目录  
    │  └─comp-a.vue         可复用的a组件  
    ├─hybrid                App端存放本地html文件的目录，详见  
    ├─platforms             存放各平台专用页面的目录，详见  
    ├─pages                 业务页面文件存放的目录  
    │  ├─index  
    │  │  └─index.vue       index页面  
    │  └─list  
    │     └─list.vue        list页面  
    ├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此  
    ├─uni_modules           存放[uni_module](/uni_modules)规范的插件。  
    ├─wxcomponents          存放小程序组件的目录，详见  
    ├─main.js               Vue初始化入口文件  
    ├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期  
    ├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见  
    ├─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见  
    └─uni.scss              这里是uni-app内置的常用样式变量   
    
1. 【页面介绍】：
    + `.vue` / `.nvue`：区别是uni-app发行到app平台时，.vue文件会使用webview来渲染，而.nvue会使用原生渲染。
    + 【新建页面】：HBuilderX会自动在`pages.json`中完成页面注册（一步操作）。
    + 【删除页面】：删除对应的`.vue`/`.nvue`文件，在`pages.json`中删除页面注册（两步操作）。
    + 【应用首页】：uni-app会将pages.json -> pages配置项中的第一个页面，作为当前工程的首页（启动页）。
    + 【生命周期】：onInit / onLoad / onShow / onReady / onHide / onUnload / onResize / onPullDownRefresh / onReachBottom / onTabItemTap / onShareAppMessage / onPageScroll / onNavigationBarButtonTap / onBackPress / onNavigationBarSearchInputChanged / onNavigationBarSearchInputConfirmed / onNavigationBarSearchInputClicked / onShareTimeline / onAddToFavorites。
        + 重点需要掌握的hooks： <font color="#FF6600">Todo</font>
    + 【页面调用接口】：getApp() / getCurrentPages() / $getAppWebview()
    + 【页面通讯】：uni.$emit / uni.$on / uni.$once / uni.$off / 
    + 【路由】： uni-app 有两种页面路由跳转方式：使用navigator组件跳转、调用API跳转。
    + 【页面栈】：
    + 【组件生命周期】：uni-app 组件支持的生命周期，与vue标准组件的生命周期相同。

1. 【互相引用】：
    + 引用组件：导入-注册-使用（vue3.x之前）， 导入-使用（setup语法糖），直接使用（uni-app）。

1. 【高效开发技巧】：
1. todo
#### 二、全局文件：
1. 【pages.json】页面路由：
1. 【package.json】：
1. 【vue.config.js】：
1. 【uni.scss】：
1. 【App.vue】：
1. 【main.js】：
#### 三、组件：
1. 【内置组件】：
1. 【拓展组件】(uni-ui)：
1. todo
#### 四、插件：
1. xxxx
1. xxxx
1. xxxx
1. xxxx
#### 五、工程化：
1. xxxx
1. xxxx
1. xxxx
1. xxxx
#### 六、其他：
1. xxxx
1. xxxx
1. xxxx
1. xxxx
 
