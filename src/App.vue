<template>
  <div id="app">

    <!-- 显示路由组件 -->
    <router-view/>
    <!-- $route代表当前路由,当我点击登陆路由时候，meta默认是false就不显示底部路由了，也就表名dom元素没有声明 -->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from "vuex"
import FooterGuide from "./components/FooterGuide/FooterGuide"
export default {
  name: 'App',
  mounted(){
    this.$store.dispatch('getAddress')
    // this.getAddress()
  },
  methods:{
    // ...mapActions(['getAddress'])
  },
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus">
.app
  width:100%
  height:100%
  background:#f5f5f5;
  display block
</style>

