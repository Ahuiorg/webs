# 起步
## 安装
```
npm install --save-dev webpack  // 开发目录
npm install -g webpack          // 全局
```
## 起步
### 概念
> webpack是一个现代JavaScript应用程序打包器。当webpack处理应用程序时，会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将这边模块打包成少量的bundle - 通常只有一个，由浏览器加载。
> 有四个核心概念：入口（entry）、出口（output）、loader、插件（plugins）

***用方言说一下***
把要引入页面里的资源文件通过一定的处理，打包成一个或者多个文件（打包之后的东西大家叫做bundle）， 然后通过引入到hmtl中，让浏览器加载。
在以往的开发过程中，经常会遇到以下三种情况：
1. **项目中资源多样性和依赖性** - js、css、png、less、jade等。 为了方便开发，我们经常会使用不同的语法来编写文档，用less、sass、jade等会提高开发效率，但同时我们需要借助gulp或grunt来编写任务编译文件或对图片进行压缩等。
2. **js模块规范复杂化** - AMD、CommonJS、UMD、ES6等。 requireJS主要用来处理AMD规范的js文件，若使用CommonJS规范的js库文件，需进行AMD规范的封装，才能正常使用。而browserify主要处理CommonJS规范的文件，其他规范也需要进行转化。近期ES6的兴起，前面两种打包工具已经不能满足我们的需求了。
3. **开发与线上文件不一致性**（打包压缩造成影响）
所以：
**webpack**可以很好地解决上面的问题，它具有Grunt、Gulp对于静态资源自动化构建的能力，是一个出色的前端自动化构建工具、模块化工具、资源管理工具。

#### 入口（Entry）
> 依赖关系图的起点称为入口起点。
> 入口起点告诉webpack从哪里开始，并根据依赖关系图确定要打包的内容。

#### 出口（Output）
> 将所有资源(assets)归拢在一起后，还需要告诉webpack在哪里打包应用程序。
> webpack的output属性描述了如何处理归拢在一起的代码

#### loader
> webpack loader在文件被添加到依赖图中时，将其转换为模块
> 识别出(identify)应该对应的lodar进行转换(transform)的那些文件。
转换这些文件，从而使其能够被添加到依赖图中（并且最终添加到bundle中）。

#### 插件（plugins）
> 由于loader仅在每个文件的基础上进行执行转换，面插件（plugins）更常用于（但不限于）在打包模块 的'compilation'各'chunk'生命周期中执行操作不自定义功能。


