# 起步
## 别说话，看栗子

以前的我们，很单纯，没有模块，没有组件，**没有webpack**，只有简单的js引入

目录是这样的

```
|____index.html
|____package.json
|____src
| |____index.js
```
index.html是这样的
```
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
```
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```
效果很好，在chrome里打开我们的index.html文件能看到 hello webpack;很开心 ！！！