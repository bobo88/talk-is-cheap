# Talk is cheap. Show me the code.
#### *每日一问*

--------------------------------------
### ⭐ **B. 前端主流框架和技术 - 小程序:**  
*<font color="#FF6600">选型主要考虑：跨端 / 案例生态 / 技术栈。</font>*
+ 原生original:
    + Todo
    + ...
    + 学习成本：
    + 特点：*<font color="#00BFFF">单个平台无法多端，todo</font>*
+ <font color="#FF6600" size="3">uni-app</font>:  
    + 官网地址：https://uniapp.dcloud.io/
    + 开发者：DCloud
    + 技术栈： Vue
    + 支持平台： 微信小程序 / H5 / App / 支付宝小程序 / 百度小程序
    + 学习成本：Vue、小程序
    + 特点：*<font color="#00BFFF">开发简单，小项目效率高，入门容易debug难，不适合中大型项目</font>*
    + uni-app其实内置了mpvue，类似mpvue的加强版
    + 项目搭建流程：
        + 下载 `HBuilderX` ：官方IDE下载地址 - https://www.dcloud.io/hbuilderx.html
        + 创建项目：  
            + 点击工具栏里的文件 -> 新建 -> 项目 
            + 选择uni-app类型，输入工程名，选择模板，点击创建，即可成功创建
        + 运行项目：
            + 浏览器运行：点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可在浏览器里面体验uni-app 的 H5 版
            + 运行App到手机或模拟器：
            + 在微信开发者工具里运行：
            + 在支付宝小程序开发者工具里运行：
            + 在百度开发者工具里运行：
            + Other......
        + 发布uni-app：
            + 发布为H5：
            + 发布为小程序：
            + Other......
        + xx
+ <font color="#FF6600" size="3">taro</font>: 
    + 官网地址： https://taro.jd.com/
    + 开发者：京东
    + 技术栈： React / Vue
    + 支持平台：微信小程序 / H5 / App / 支付宝小程序 / 百度小程序
    + 学习成本： React、RN、小程序、XCode、Android Studio
    + 特点：*<font color="#00BFFF">Todo</font>*
    + 项目搭建流程：
        + 1. xxx
        + 2. xxx
        + 3. ggg
+ mpvue: 
    + 官网地址：http://mpvue.com/
    + 开发者： 美团
    + 技术栈：Vue
    + 支持平台： 微信小程序 / H5 
    + 学习成本：
    + 特点：*<font color="#00BFFF">官方不再维护</font>*
    + 项目搭建流程：
        + 1. 全局安装 vue-cli：`npm i -g vue-cli`
        + 2. 创建项目基于 `mpvue-quickstart` 模板：`vue init mpvue/mpvue-quickstart my-project`
        + 3. 安装依赖&运行：`cd my-project` && `npm i` && `npm run dev`
        + 4. 搭建小程序开发环境：下载 `微信开发者工具`
        + 5. 调试开发 `mpvue` ：项目目录与微信开发者工具进行绑定
        + 6. 注意：新增的页面需要重新 `npm run dev` 来进行编译
        + 7. Todo...

###  ⭐ **小程序性能优化:**  
+ `setData` 的优化
    + 尽可能减少 `setData` 调用的频次
    + 尽可能减少单次 `setData` 传输的数据
+ taro在性能优化上做的更细致，使用uni-app需要自己注意代码优化
+ Todo....


