<template>
  <div class="code-box">
    <input ref="codeinput"
          v-model="inputdata"
          type="tel"
          pattern="[0-9]*"
          :maxlength="maxlength"
          class="code-input"
          @blur="inputBlur()"
          @keyup.enter="inputBlur()">
    <div class="code-all" @click="focus" v-if="type === 'password'">
      <div class="code-item"
           v-for="(item, index) in codeData"
           :key="index"
           :class="{'code-active': index === 0 || inputdata.length - 1 >= index, 'code-password': inputdata.length - 1 >= index }"
           :style="[styles]"
           contenteditable="true"></div>
    </div>
    <div class="code-all" @click="focus" v-else>
      <div class="code-item"
           v-for="(item, index) in codeData"
           :class="{'code-active': index === 0 || inputdata.length - 1 >= index }"
           :key="index"
           :style="[styles]"
           contenteditable="true">{{ item }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vue-verification-code',
  components: {},
  props: {
    type: {
      type: String,
      required: false,
      default: 'number'
    },
    maxlength: {
      type: Number,
      required: false,
      default: 6
    },
    styles: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      inputdata: '',
      codeData: []
    };
  },
  watch: {
    inputdata(newVal, oldVal) {
      if (/[^\d]/g.test(newVal)) {
        this.inputdata = this.inputdata.replace(/[^\d]/g, '');
      } else if (newVal.length < oldVal.length) {
        // 清空输入值
        if (newVal === '') {
          this.$data.codeData = ['', '', '', '', '', ''];
        } else {
          // 依次删除按键
          this.$data.codeData[oldVal.length - 1] = '';
        }
      } else if (newVal.length - 1 === oldVal.length) {
        // 依次输入
        this.$data.codeData[newVal.length - 1] = newVal[newVal.length - 1];
      } else {
        // 验证码自动填充
        newVal.split('').map((item, index) => {
          this.$data.codeData[index] = item;
        });
      }
    },
  },
  computed: {},
  mounted() {
    this.$refs.codeinput.focus();
    for (let i = 0, j = this.maxlength; i < j; i++) {
      this.codeData.push('');
    }
  },
  methods: {
    focus() {
      this.$refs.codeinput.focus();
    },
    inputBlur() {
      this.$emit('output', {
        data: this.$data.inputdata,
        isfinished: !this.$data.codeData.includes('')
      });
    }
  }
};
</script>
<style lang="scss" scoped>
// 激活样式
.code-active{
  border: 1px solid #343646!important;
}
// .code-box > .code-all > .code-item.code-active{
//   border: 1px solid #333333;
// }
.code-box{
  width: 100%;
  position: relative;
  overflow-x: hidden;
  & > .code-input{
    position: absolute;
    width: 300%;
    left: -200%;
    z-index: -1;
    opacity: 0;
  }
  & > .code-all {
    padding: 60px 30px 0 30px;
    display: flex;
    align-content: space-between;
    & > .code-item {
      flex: 1;
      width: 20px;
      font-size: 24px;
      line-height: 60px;
      text-align: center;
      margin: 0 15px;
      background: transparent;
      border: 1px solid #8a8a8a;
      outline: none;
    }
    .code-item.code-password{
      position: relative;
    }
    .code-item.code-password::after{
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6px;
      height: 6px;
      background: #000000;
      border-radius: 50%;
    }
  }
}
</style>
