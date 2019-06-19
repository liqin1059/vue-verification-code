# vue-verification-code

[![NPM version](https://img.shields.io/npm/v/vue-verification-code.svg)](https://www.npmjs.com/package/vue-verification-code)

> vue verification code component 验证码插件

## 支持

| 参数 | 类型 | 备注 | 必须 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| type | String | 输入类型 | 否 | 'number' |
| maxlength | Number | 验证码长度 | 否 | 6 |
| styles | Object | 输入框样式（驼峰命名） | 否 | {} |

# 使用

### 安装
```
npm install vue-verification-code --save
```

### 在main.js中引入

```js
import verificationcode from './index.js'
Vue.use(verificationcode)
```
### 在组件中使用

```html
<vue-verification-code :styles="styles" :type="'password'" :maxlength="6" @output="output"></vue-verification-code>
```

# 展示

## 作为number类型使用
![avatar](/static/number.gif)

## 作为password类型使用
![avatar](/static/password.gif)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-verification-code).
