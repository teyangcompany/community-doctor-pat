<template>
  <transition name="slide">
  <div>
    <v-header :title="title" :rightTitle="rightTitle" @on-add="addPatient()"></v-header>
    <div class="usual">
      <router-link tag="div" to="/detailPatient" class="usualLine border-1px">
        <div class="usualCenter">
          <div class="usualLeft">
            <h4>小李 男 25岁</h4>
            <p>手机号: <span>3414312424</span></p>
            <p>身份证号: <span>3425423543654</span></p>
          </div>
          <div class="usualRight">
            <img src="../../../../static/img/查看更多.png" alt="">
          </div>
        </div>
      </router-link>
    </div>
  </div>
  </transition>
</template>
<script>
  import header from '../../../base/header'
  export default{
    data(){
      return{
          title:"常用就诊人",
          rightTitle:"添加"
      }
    },
    methods:{
      addPatient(){
        this.$router.push('/detailPatient')
      }
    },
    components:{
      "VHeader":header
    }
  }
</script>
<style scoped lang="scss">
  @import '../../../common/public.scss';
  @import '../../../common/mixin.scss';
  .usual{
    width:100%;
    height: 100%;
    position: fixed;
    top: 50px;
    background-color: white;
    .usualLine{
      width:100%;
      background-color: white;
    }
    .usualCenter{
      width:690rem/$rem;
      height:200rem/$rem;
      margin:0 auto;
      /*margin-top: 5px;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      .usualLeft{
        h4{
          font-weight:normal;
          font-size: 36rem/$rem;
          color: #333333;
          font-family: PingFangSC;
        }
        p{
          font-size: 36rem/$rem;
          color: #333333;
          font-family: PingFangSC;
          span{
            font-size:28rem/$rem;
            color: #666666;
            font-family: PingFangSC;
          }
        }
        line-height: 25px;
      }
      .usualRight{
        img{
          width: 16rem/$rem;
          height: 24rem/$rem;
        }
      }
    }
  }
  .slide-enter-active,.slide-leave-active{
    transition: all 0.3s;
    opacity: 1;
  }
  .slide-enter,.slide-leave-to{
    transform:  translate3d(100%,0,0);
    opacity: 1;
  }
</style>
