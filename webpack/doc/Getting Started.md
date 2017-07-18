# 起步
## 别说话，看栗子

以前的我们，很单纯，没有模块，没有组件，**没有webpack**，只有简单的js引入

目录是这样的

```
|____index.html
|____package.json
|____src
| |____index.js
```
index.html是这样的

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>webpack demo</title>
</head>
<body>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
    <script src="./dist/bundle.js"></script>
</body>
</html>
```
index.js是这样的

``` javascript
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

效果很好，在chrome里打开我们的index.html文件能看到 hello webpack;很开心 ！！！

聪明的你，怎么可能没有发现，在我们的js文件中，使用的_.join方法是通过加载lodash之后，暴露在全局的一个方法，这个局限性很大，万一lodash文件没有请求过来，或者在我们的index.js加载之后再加载过来，程序就会无法正常运行，问题还不只这一个，让我们看下边:

> 1. 不能直观的看到脚本的执行依赖外部扩展库（就像这里的lodash）
> 2. 如果依赖不存在，或者引入顺序错误，程序将无法执行
> 3. 如果依赖补引入但是没有使用，浏览器将会被迫下载无用代码

这个时候，聪明的就应该想到，我们会以一种优雅的方式去引用外部依赖，并且不会存在上边这些问题

## 创建一个bundle文件

想一想我们上边的问题，我们应该怎样去解决？？

回到webpack的概念里边，webpack就是把我们引入的各种模块打包成一个bundle,然后引到html文件里，让浏览器去加载，OK，下边让我们一步一步去实现

这个时候，我们为了让我们的目录更清晰，我们再加一个文件夹dist（distribution的缩写）；让我们更深刻的了解一下src跟dist目录

> '/src': 源代码，用于书写跟编辑代码
> '/dist': '分发'代码，是构建过程产生的代码最小化和优化后的“输出”目录，最终将在浏览器中加载

看！！！新目录

```
|____index.html
|____package.json
|____src
| |____index.js
|____dist
| |____bundle.js
```
看到这个目录的时候，你应该就明白了，我们现在的目标就是把index.js 跟 lodash.js 两个文件打包成 bundle.js ； 然后通过 index.html 引入，让浏览器加载
***重点来了***
要在 index.js 文件里打包 lodash 依赖包， 我们需要在本地安装 library.

```
npm install --save-dev lodash
```
然后在我们的 index.js 中 import lodash 依赖
src/index.js

```
import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```
**关键CLI**

```
webpack ./src/index.js ./dist/bundle.js
```
通过这个命令，我们的 webpack 就会把 index.js 跟 lodash 打包成一个 bundle.js 的文件，然后我们只需要引入这个 bundle.js 文件到 index.html 文件里就可以了

回头看一下 index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>webpack demo</title>
</head>
<body>
    <!-- <script src="https://unpkg.com/lodash@4.16.6"></script> -->
    <!-- <script src="./src/index.js"></script> -->
    <script src="./dist/bundle.js"></script>
</body>
</html>
```
在浏览器里打开index.html, 看到 Hello webpack;  心里美美的 ^~^


