<template>
  <div id="app">
    <div class="code-components">
      <verification-code :styles="styles" :type="'password'" :maxlength="6" @output="output"></verification-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      styles: {
        'border': '1px solid #dcdcdc',
        'padding': '10px',
        'margin': '15px',
      }
    }
  },
  methods: {
    output(data) {
      console.log(data);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.code-components{
  width: 600px;
  display: inline-block;
}
</style>
