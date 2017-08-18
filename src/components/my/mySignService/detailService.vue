<template>
    <div>
          <v-header :title="title" :rightTitle="rightTitle"></v-header>
          <div class="detailService" ref="detailService">
            <div>
              <ul class="border-1px">
                <router-link tag="div" to=" ">
                  <li>
                    <div class="cancelImg">
                      <img src="../../../../static/img/p2.jpg" alt="">
                    </div>
                    <div class="cancelIntro">
                      <div>
                        <span class="followName">张老爷(红梅社区)</span>
                        <!--<div class="badgeDoc">-->
                        <span class="myDoctor"></span>
                        <!--</div>-->
                        <p>姓名：张文物</p>
                        <p>男 56岁</p>
                      </div>
                    </div>
                    <div class="cancelTime">
                      <div class="forArrow">
                <span>
                    <!--<img src="../../../../static/img/查看更多.png" alt="">-->
                </span>
                      </div>
                    </div>
                  </li>
                </router-link>
              </ul>
              <div class="history border-1px">
                <div>
                  服务类型
                  <div>
                    <span>上门服务</span>
                    <!--<img src="../../../../static/img/查看更多.png" alt="">-->
                  </div>
                </div>
              </div>
              <div class="history border-1px">
                <div>
                  开始时间
                  <div>
                    <span>2017-8-3 8:58</span>
                    <!--<img src="../../../../static/img/查看更多.png" alt="">-->
                  </div>
                </div>
              </div>
              <div class="history border-1px">
                <div>
                  定位
                  <div>
                    <span>红梅社区附近</span>
                    <!--<img src="../../../../static/img/查看更多.png" alt="">-->
                  </div>
                </div>
              </div>
              <div class="imgArea border-1px">
                <div class="imgCenter">
                  <img src="../../../../static/img/c5.jpg" alt="">
                  <img src="../../../../static/img/c3.jpg" alt="">
                  <img src="../../../../static/img/c7.jpg" alt="">
                  <img src="../../../../static/img/c2.jpg" alt="">
                  <img src="../../../../static/img/c13.jpg" alt="">
                  <img src="../../../../static/img/c10.jpg" alt="">
                </div>
              </div>
              <div class="history border-1px">
                <div>
                  结束时间
                  <div>
                    <span>2017-8-5 13:58</span>
                    <!--<img src="../../../../static/img/查看更多.png" alt="">-->
                  </div>
                </div>
              </div>
              <div class="history border-1px">
                <div>
                  定位
                  <div>
                    <span>红梅社区附近</span>
                    <!--<img src="../../../../static/img/查看更多.png" alt="">-->
                  </div>
                </div>
              </div>
              <div class="imgArea border-1px">
                <div class="imgCenter">
                  <img src="../../../../static/img/c15.jpg" alt="">
                  <img src="../../../../static/img/c16.jpg" alt="">
                  <img src="../../../../static/img/c18.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
  import header from '../../../base/header'
  import BScroll from 'better-scroll'
  export default{
      data(){
         return{
             title:"服务详情",
             rightTitle:"评价"
         }
      },
      mounted(){
         this._initServiceScroll()
      },
      methods:{
          _initServiceScroll(){
              this.serviceScroll = new BScroll(this.$refs.detailService,{
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
.detailService{
  position: fixed;
  top: 50px;
  left:0;
  right:0;
  bottom:0;
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
        .followName{
          font-size: 16px;
        }
        .badgeDoc{
          display: inline-block;
          padding-top: -5px;
          .myDoctor{
            width: 60px;
            height: 18px;
            background-color: darkturquoise;
            border-radius:5px;
            display: inline-block;
            font-size: 10px;
            color: white;
            line-height: 18px;
            text-align: center;
          }
        }
        p{
          margin:0;
          color: #999999;
          font-size: 14px;
        }
        span{

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
      margin:0 auto;
      display: flex;
      font-size: 32rem/$rem;
      color: #333333;
      font-family: PingFangSC;
      align-items: center;
      justify-content: space-between;
      >div{
        span{
          font-size: 32rem/$rem;
          display: inline-block;
          color: #666666;
          font-family: PingFangSC;
        }
        img{
          width: 7.5px;
        }
      }
    }
  }
  .imgArea{
    width:100%;
    .imgCenter{
      width:690rem/$rem;
      margin: 0 auto;
      img{
        width: 70px;
        height: 70px;
        margin-top: 10px;
      }

    }
  }
}
</style>
