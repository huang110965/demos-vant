<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created () {
    // this.goOut();
    // this.goOn();
    Promise.all([this.goOn(), this.goOut()]).then(res => {
      console.log(res);
    })
  },
  methods: {
    goOut () {
      return this.$axios.get('/api').then(res => {
        console.log('111');
        return res
      })
    },
    goOn () {
      return this.$axios.post('/query', {
        type: 'shentong',
        postid: '777029004785825'
      }).then(res => {
        console.log('222');
        return res
      })
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
