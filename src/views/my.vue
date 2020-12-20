<template>
  <div class="my">
    <div class="cont">
      <div class="pnt" v-for="(item,index) in forms" :key="index">
        <span>{{item.leftN}}</span>
        <div class="_right">
          <input type="text" v-model="item.name">
          <span v-show="item.isThrow">{{`${item.leftN}不能为空`}}</span>
        </div>
      </div>
      <div class="submit" @click="submit">
        提交
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      forms: [
        { name: '', leftN: '用户名' },
        { name: '黄北状', leftN: '姓名' },
        { name: '', leftN: '手机号' },
        { name: '', leftN: '身份证号' },
        { name: '', leftN: '备注' },]

    }
  },
  created () {
    this.forms.forEach((item) => {
      this.$set(item, 'isThrow', false)
    })
  },
  methods: {
    submit () {
      this.onSub();
      if (this.forms.every((item) => !item.isThrow) === false) {
        return
      }
      console.log('提交成功');

    },
    onSub () {
      this.forms.forEach((item) => {
        if (!item.name) {
          item.isThrow = true

        } else {
          item.isThrow = false
        }

      })


    }
  }
}
</script>

<style lang="scss" scoped>
.my {
  .pnt {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 30px;
    font-size: 20px;
    ._right {
      display: flex;
      flex-direction: column;
      span {
        color: red;
      }
    }
  }
  .submit {
    width: 200px;
    background-color: blue;
    color: #fff;
    margin: 30px auto;
    border-radius: 20px;
    line-height: 40px;
    cursor: pointer;
  }
}
</style>