<template>
  <transition name="slide">
    <div class="signWhole">
       <v-header :title="title" :rightTitle="rightTitle"></v-header>
      <div class="mySign" ref="mySign">
        <div>
        <ul class="border-1px">
          <router-link tag="div" to="/mySignService">
            <li>
              <div class="cancelImg">
                <img src="../../../../static/img/ys1.jpg" alt="">
              </div>
              <div class="cancelIntro">
                <div>
                  <span class="followName">华立全科团队</span>
                  <!--<div class="badgeDoc">-->
                  <!--<span class="myDoctor"></span>-->
                  <!--</div>-->
                  <p>杭州市上城区紫阳卫生院</p>
                  <p>签约患者 <span class="number">296</span>  | 评价 <span class="ratings"> 9.5分></span></p>
                </div>
              </div>
              <div class="cancelTime">
                <div class="forArrow">
                <span>
                    <img src="../../../../static/img/查看更多.png" alt="">
                </span>
                </div>
              </div>
            </li>
          </router-link>
        </ul>
        <div class="illness border-1px">
          <div>
            签约有效期
            <div>
              <span>2017-8-3至2018-8-2</span>
              <!--<img src="../../../../static/img/查看更多.png" alt="">-->
            </div>
          </div>
        </div>
        <div class="history border-1px">
          <div>
            签约价格
            <div>
              <span class="ratings">¥300/年</span>
              <!--<img src="../../../../static/img/查看更多.png" alt="">-->
            </div>
          </div>
        </div>
        <div class="basic border-1px">
          <div>
            签约服务
          </div>
        </div>
        <div class="illness border-1px">
          <div>
            图文咨询
            <div>
              <span>不限次数</span>
            </div>
          </div>
        </div>
        <div class="history border-1px">
          <div>
            电话咨询
            <div>
              <span>共12次,剩余8次</span>

            </div>
          </div>
        </div>
        <div class="family border-1px">
          <div>
            上门服务
            <div>
              <span>共12次,剩余8次</span>

            </div>
          </div>
        </div>
        <div class="family border-1px">
          <div>
            保健品鉴别
            <div>
              <span>共12次,剩余8次</span>

            </div>
          </div>
        </div>
        <div class="basic border-1px">
          <div>
            服务历史
          </div>
        </div>
        <router-link tag="div" to="/detailService" class="historyList border-1px">
            <div class="listCenter">
                <div class="leftWord">
                    <p>2017-8-3 8:58 - 2017-8-3 9:30</p>
                    <p><img src="../../../../static/img/ys1.jpg" alt="">华立 上门服务</p>
                </div>
                <div class="rightWord">
                    详细 <img src="../../../../static/img/查看更多.png" alt="">
                </div>
            </div>
        </router-link>
        <router-link tag="div" to="/detailService" class="historyList border-1px">
          <div class="listCenter">
            <div class="leftWord">
              <p>2017-8-3 8:58 - 2017-8-3 9:30</p>
              <p><img src="../../../../static/img/ys2.jpg" alt="">张康 电话咨询</p>
            </div>
            <div class="rightWord">
              详细 <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <router-link tag="div" to="/detailService" class="historyList border-1px">
          <div class="listCenter">
            <div class="leftWord">
              <p>2017-8-3 8:58 - 2017-8-3 9:30</p>
              <p><img src="../../../../static/img/ys3.jpg" alt="">李爱国 电话咨询</p>
            </div>
            <div class="rightWord">
              详细 <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <router-link tag="div" to="/detailService" class="historyList border-1px">
          <div class="listCenter">
            <div class="leftWord">
              <p>2017-8-3 8:58 - 2017-8-3 9:30</p>
              <p><img src="../../../../static/img/ys4.jpg" alt="">赵乾坤 图文咨询</p>
            </div>
            <div class="rightWord">
              详细 <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <router-link tag="div" to="/detailService" class="historyList border-1px">
          <div class="listCenter">
            <div class="leftWord">
              <p>2017-8-3 8:58 - 2017-8-3 9:30</p>
              <p><img src="../../../../static/img/ys5.jpg" alt="">陈刚 上门服务</p>
            </div>
            <div class="rightWord">
              详细 <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <router-link tag="div" to="/detailService" class="historyList border-1px">
          <div class="listCenter">
            <div class="leftWord">
              <p>2017-8-3 8:58 - 2017-8-3 9:30</p>
              <p><img src="../../../../static/img/ys6.jpg" alt="">谢尚全 电话咨询</p>
            </div>
            <div class="rightWord">
              详细 <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <router-link tag="div" to="/detailService" class="historyList border-1px">
          <div class="listCenter">
            <div class="leftWord">
              <p>2017-8-3 8:58 - 2017-8-3 9:30</p>
              <p><img src="../../../../static/img/ys7.jpg" alt="">华立 图文咨询</p>
            </div>
            <div class="rightWord">
              详细 <img src="../../../../static/img/查看更多.png" alt="">
            </div>
          </div>
        </router-link>
        <div class="revoke">
           <div>
             <button>解约</button>
           </div>
        </div>
        <div class="placehold">

        </div>
      </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import header from '../../../base/header'
  import BScroll from 'better-scroll'
  export default{
      data(){
          return{
             title:"我的签约服务",
             rightTitle:""
        }
      },
      mounted(){
         this.$nextTick(()=>{
             this._initMySign()
         })
      },
      methods:{
         _initMySign(){
             this.mySign = new BScroll(this.$refs.mySign,{
                 click:true
             })
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
  .signWhole{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: #FFFFFF;
  }
.mySign{
  position: fixed;
  top: 50px;
  bottom:0;
  left:0;
  right:0;
  ul{
    padding:0;
    margin:0;
    height: 200rem/$rem;
    /*border-bottom: 1px solid rgb(205,205,205);*/
    li{
      list-style-type: none;
      height: 200rem/$rem;
      display: flex;
      .cancelImg{
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .cancelIntro{
        flex:2;
        display: flex;
        align-items: center;
        line-height: 25px;
        >div{
          .followName{
            font-size: 32rem/$rem;
            font-family: PingFangSC;
            color: #333333;
          }
          p{
            margin:0;
            padding:0;
            color: #999999;
            font-size: 28rem/$rem;
          }
        }
      }
      .cancelTime{
        flex:1;
        .forArrow{
          display: flex;
          height: 200rem/$rem;
          align-items: center;
          justify-content: flex-end;
          margin-right: 12px;
          span{
            display: inline-block;
            text-align: right;
            img{
              width: 8px;
              height: 12px;
            }
          }
        }
      }
      img{
        width: 80rem/$rem;
        height: 80rem/$rem;
        border-radius: 50%;
      }
    }
  }
  .basic,.illness,.history,.family,.alergic,.record{
    width: 100%;
    height: 90rem/$rem;
    /*border-top: 1px solid rgb(205,205,205);*/
    >div{
      width: 690rem/$rem;
      height: 90rem/$rem;
      color: #333333;
      font-size: 32rem/$rem;
      font-family: PingFangSC;
      margin:0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      >div{
        span{
          font-size: 32rem/$rem;
          display: inline-block;
          color: #666666;
          /*margin-right: 10px;*/
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
      font-size:28rem/$rem;
      color: #666666;
      font-family: PingFangSC;
    }
  }
  .historyList{
    width:100%;
    .listCenter{
      width:690rem/$rem;
      height:200rem/$rem;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .leftWord{
        p{
          font-size: 32rem/$rem;
          color: #333333;
          margin-bottom: 30rem/$rem;
          font-family: PingFangSC;
          display: flex;
          align-items: center;
          img{
            width:50rem/$rem;
            height:50rem/$rem;
            margin-right: 20rem/$rem;
            border-radius: 50%;
          }
        }
      }
      .rightWord{
          font-size: 32rem/$rem;
          color: #999999;
          font-family: PingFangSC;
      }
      img{
        width:16rem/$rem;
        height:24rem/$rem;
      }
    }
  }
  .revoke{
    width:100%;
    margin-top: 20px;
    >div{
      width:690rem/$rem;
      margin:0 auto;
      button{
        width:690rem/$rem;
        border:none;
        outline:medium;
        color:white;
        height: 50px;
        font-size: 32rem/$rem;
        border-radius: 7px;
        background-color:red;
      }
    }
  }
  .placehold{
    margin-top: 20rem/$rem;
    height: 20px;
    width:100%;
  }
}
  .ratings{
    color: #FF9900!important;
  }
  .number{
    color: #3399FF!important;
  }
  .green{
    color: green!important;
  }
  .slide-enter-active,.slide-leave-active{
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform:  translate3d(100%,0,0);
  }
</style>
