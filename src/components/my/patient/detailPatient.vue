<template>
    <div>
      <v-header :title="title" :rightTitle="rightTitle"></v-header>
      <div class="patientInfo">
        <div class="basic">
          <div>
             就诊人信息
          </div>
        </div>
        <router-link tag="div" to="" class="illness border-1px">
          <div>
            姓名
            <div>
              <span>李小兵</span>
              <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <router-link tag="div" to="" class="history border-1px">
          <div>
             身份证号
            <div>
              <span>43859436258496754960452</span>
              <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <router-link tag="div" to="" class="family border-1px">
          <div>
             手机号
            <div>
              <span>321854136543</span>
              <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <router-link tag="div" to="" class="alergic border-1px">
          <div>
            年龄
            <div>
              <span>25</span>
              <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <router-link tag="div" to="" class="alergic border-1px">
          <div>
            性别
            <div>
              <span>男</span>
              <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <router-link tag="div" to="" class="alergic border-1px">
          <div>
            与我的关系
            <div>
              <span>本人</span>
              <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <div class="basic">
          <div>
            签约信息
          </div>
        </div>
        <router-link tag="div" to="" class="illness border-1px">
          <div>
            签约团队
            <div>
              <span>xxx社区团队</span>
              <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <router-link tag="div" to="" class="history border-1px">
          <div>
             签约详细
            <div>
              <span>查看</span>
              <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
      </div>
    </div>
</template>
<script>
  import header from '../../../base/header'
  export default{
      data(){
          return{
              title:"常用就诊人",
              rightTitle:""
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
.patientInfo{
  position: fixed;
  top: 50px;
  left:0;
  right:0;
  bottom:0;
  .basic,.illness,.history,.family,.alergic,.record{
    width: 100%;
    height: 90rem/$rem;
    /*border-top: 1px solid rgb(205,205,205);*/
    >div{
      width: 690rem/$rem;
      height: 90rem/$rem;
      margin:0 auto;
      display: flex;
      font-size: 32rem/$rem;
      font-family: PingFangSC;
      color: #333333;
      align-items: center;
      justify-content: space-between;
      >div{
        span{
          font-size: 32rem/$rem;
          display: inline-block;
          /*margin-right: 10px;*/
          font-size: 32rem/$rem;
          font-family: PingFangSC;
          color: #666666;
        }
        img{
          width: 7.5px;
        }
      }
    }
  }
  .basic,.record{
    background-color: rgb(245,245,245);
  }
  .basic{
    height:80rem/$rem;
    >div{
      font-size: 28rem/$rem;
      font-family: PingFangSC;
      color: #666666;
    }
  }
}
</style>
