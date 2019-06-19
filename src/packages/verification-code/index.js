import verificationcode from './verification-code'

verificationcode.install = Vue => Vue.component(verificationcode.name, verificationcode);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(verificationcode);
}

export default verificationcode