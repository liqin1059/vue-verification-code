# vue-verification-code

[![NPM version](https://img.shields.io/npm/v/vue-verification-code.svg)](https://www.npmjs.com/package/vue-verification-code)

> vue verification code component vue验证码插件
由于实现验证码输入时，ios多个输入框兼容问题颇多，于是发布一款验证码插件，以便大家使用，有number（主要用于验证码类型），password（支付密码一类的输入）
，插件回调返回输入值（目前是blur和enter键），欢迎提出问题

## 支持

| 参数 | 类型 | 备注 | 必须 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| type | String | 输入类型 | 否 | 'number'（'number'/'password'） |
| maxlength | Number | 验证码长度 | 否 | 6 |
| styles | Object | 输入框样式（驼峰命名） | 否 | {} |
| output | event | 输入框回调 | - | 参数（对象）<br>{data: string（输入框的值）,isfinished: boolean（是否输入完成）} |

# 使用

### 安装
```
npm install vue-verification-code --save
```

### 在main.js中引入

```js
import verificationcode from 'vue-verification-code'
Vue.use(verificationcode)
```
### 在组件中使用

```html
<vue-verification-code :styles="styles" :type="'password'" :maxlength="6" @output="output"></vue-verification-code>
```

# 展示

### 作为number类型使用
![avatar](/static/number.gif)

### 作为password类型使用
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
