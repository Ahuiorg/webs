# 起步
## 安装
```
npm install --save-dev webpack  // 开发目录
npm install -g webpack          // 全局
````
## 起步
### 概念
> webpack是一个现代JavaScript应用程序打包器。当webpack处理应用程序时，会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将这边模块打包成少量的bundle - 通常只有一个，由浏览器加载。  
> 有四个核心概念：入口（entry）、出口（output）、loader、插件（plugins）
#### 入口（Entry）
> 依赖关系图的起点称为入口起点。入口起点告诉webpack从哪里开始，并根据依赖关系图确定要打包的内容。
#### 出口（Output）
> 将所有资源(assets)归拢在一起后，还需要告诉webpack在哪里打包应用程序。  
webpack的output属性描述了如何处理归拢在一起的代码
#### loader
> webpack loader在文件被添加到依赖图中时，将其转换为模块  
> 识别出(identify)应该对应的lodar进行转换(transform)的那些文件。  
> 转换这些文件，从而使其能够被添加到依赖图中（并且最终添加到bundle中）。
#### 插件（plugins）
> 由于loader仅在每个文件的基础上进行执行转换，面插件（plugins）更常用于（但不限于）在打包模块 的'compilation'各'chunk'生命周期中执行操作不自定义功能。
