<template>
  <div class="top_bar main_head border-1px">
    <section class="goBack"  v-if="path == '/index/recent'"></section>
    <section class="goBack"  v-else-if="path == '/index/signDoctor'"></section>
    <section class="goBack"  v-else-if="path == '/onlineIndex'"></section>
    <section class="goBack"  v-else-if="path == '/myConsult'"></section>
    <section class="goBack" @click="back()" v-else>
      <img src="../../static/img/返回.png" alt="">
    </section>
    <section class="title">
      <span class="word">{{title}}</span>
    </section>
    <section class="nav"  @click="addPatient()" v-if="path == '/addPatient'">
      <span class="rightWord">{{rightTitle}}</span>
    </section>
    <section class="nav"  @click="detailPage()" v-else-if="path == '/addRecord'">
      <span class="rightWord">{{rightTitle}}</span>
    </section>
    <section class="nav"  @click="apply()" v-else>
      <span class="rightWord">{{rightTitle}}</span>
    </section>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        path:""
      }
    },
    props:{
      title:{
        type:String
      },
      rightTitle:{
        type:String
      },
    },
    mounted(){
      this.path = this.$route.path
    },
    methods:{
      back(){
        this.$router.back(-1)
      },
      apply(){
        this.$emit("on-apply")
      },
      addPatient(){
        this.$emit("on-add")
      },
      detailPage(){
          this.$emit("on-detail")
      }
    },
    watch:{
      "$route":function(){
        this.path = this.$route.path
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../common/public.scss';
  @import '../common/mixin.scss';
  .top_bar{
    background-color: white;
    height: 50px;
    line-height: 50px;
    width:100%;
    top:0;
    left:0;
    position: fixed;
    display: flex;
    z-index:10;
    section{
      text-align: center;
      .word{
        font-size: 36rem/$rem;
        color: #333333;
        font-family: PingFang SC;
      }
      span{
        display: block;
      }
    }
    .goBack{
      flex:1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img{
        height: 15px;
        padding-left: 30rem/$rem;
      }
    }
    .scanImg{
      flex:1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      /*padding-left: 15px;*/
      img{
        width:40rem/$rem;
        padding-left: 30rem/$rem;
      }
    }
    .title{
      flex:2;
    }
    .nav{
      flex:1;
      .rightWord{
        font-size: 32rem/$rem;
        color: #0FBDFF;
      }
    }
  }
</style>
