<template>
  <div class="doctor">
    <v-header :title="title" :rightTitle="rightTitle"></v-header>
    <div class="doctorCard" ref="doctorCard">
      <div>
        <div class="doctorFunc border-1px">
          <div class="doctorImg">
            <img src="../../../../static/img/chatOrigin.jpg" alt="">
          </div>
          <div class="doctorIntro">
            <h4><span class="mainTitle">华佗</span><span class="chief">首席</span></h4>
            <h6>全科 主任医生</h6>
            <h6>杭州市xxx社区服务中心</h6>
            <div class="checkRating"> <span>签约患者 </span><span class="number">296</span> <span>|</span> <span>评价</span> <span class="ratings">9.5分></span> </div>
          </div>
        </div>
        <div class="attachTeam border-1px">
          <div class="attachCenter">
            <span>所属团队</span>
            <span class="number">华佗全科团队></span>
          </div>
        </div>
        <div class="institutionDes border-1px">
          <div class="desCenter team">
            <h4>医生公告</h4>
            <h6>赛车运动赛车运动分为两大类，场地赛车和非场地赛车。起源距今已有超过100年的历史。最早的赛车比赛是在城市间的公路上进行的。</h6>
          </div>
        </div>
        <div class="institutionDes border-1px">
          <div class="desCenter team">
            <h4>医生擅长</h4>
            <h6>赛车运动赛车运动分为两大类，场地赛车和非场地赛车。起源距今已有超过100年的历史。最早的赛车比赛是在城市间的公路上进行的。</h6>
          </div>
        </div>
        <div class="institutionDes border-1px">
          <div class="desCenter team">
            <h4>医生介绍</h4>
            <h6>赛车运动赛车运动分为两大类，场地赛车和非场地赛车。起源距今已有超过100年的历史。最早的赛车比赛是在城市间的公路上进行的。</h6>
          </div>
        </div>
        <div class="border-1px articleListTitle">
          <div class="articleTitleCenter">
            <span class="picConsult">精选文章</span>
            <span class="consultTim">查看更多</span>
          </div>
        </div>
        <div class="goodArticle">
          <ul class="border-1px">
            <li>
              <div class="mainContent">
                <p>我有一个问题想要咨询一下，是这样的，去年我在我们那里的医院做了一个检查</p>
              </div>
              <div class="ConsultRelate">

                <span class="name"><span class="circle"></span>丁克峰</span>
                <span class="money">阅读5281</span>
              </div>
            </li>
          </ul>
          <ul  class="border-1px">
            <li>
              <div class="mainContent">
                <p>我有一个问题想要咨询一下，是这样的，去年我在我们那里的医院做了一个检查</p>
              </div>
              <div class="ConsultRelate">

                <span class="name"><span class="circle"></span>丁克峰</span>
                <span class="money">阅读5281</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="scanCode border-1px">
          <img src="../../../../static/img/qr.png" alt="">
        </div>
      </div>
    </div>
    <div class="sign border-1px-top">
      <span class="green" @click="goSign()">签约医生</span>
    </div>
  </div>
</template>
<script>
  import header from '../../../base/header'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return{
        title:"医生团队",
        rightTitle:""
      }
    },
    mounted(){
      this._initDoctorScroll()
    },
    methods:{
      _initDoctorScroll(){
        this.doctorScroll = new BScroll(this.$refs.doctorCard,{
          click:true
        })
      },
      goSign(){
        this.$router.push('/signTeam')
      }
    },
    components:{
      "VHeader":header
    }
  }
</script>
<style scoped lang="scss">
  @import '../../../common/public.scss';
  @import '../../../common/var.scss';
  @import '../../../common/mixin.scss';
  .doctor{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }
  .doctorCard{
    position: fixed;
    left:0;
    right:0;
    bottom: 50px;
    top: 50px;
    .doctorFunc{
      width:100%;
      height: 240px;
      margin-bottom: 15px;
      background-color: white;
      .doctorImg {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
      }
      .doctorIntro {
        width: 100%;
        height: 70px;
        margin-top: 10px;
        text-align: center;
        h4{
          font-weight: normal;
          margin:0;
          span.mainTitle{
            margin-left: 60rem/$rem;
            font-size: 32rem/$rem;
          }
          span.chief{
            position: relative;
            font-size: 28rem/$rem;
            color: #FF9900;
            display: inline-block;
            border: 1px solid #FF9900;
            width:58rem/$rem;
            height: 29rem/$rem;
            margin:0;
            line-height: 31rem/$rem;
            text-align: center;
            left: 12rem/$rem;
          }
          span.empty{
            border:none;
          }
        }
        h6{
          font-weight:normal;
          color: gray;
          margin:0;
        }
        .checkRating{
          span{
            color: #666666;
            font-size: 28rem/$rem;
          }
        }
        /*background-color: #0BB20C;*/
      }
    }
    .attachTeam{
      width:100%;
      height: 40px;
      .attachCenter{
        width:690rem/$rem;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        span{
          font-size: 32rem/$rem;
          color: #333333;
        }
        span:last-child{
          color: #666666;
        }
      }
    }
    .institutionDes{
      .desCenter{
        width: 690rem/$rem;
        margin:0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h4,h6{
          margin:0;
          padding:0;
          font-weight: normal;
        }
        h4{
          font-size: 32rem/$rem;
          color: #333333;
          display: flex;
          justify-content: space-between;
          span{
            color: #999999;
            font-size: 24rem/$rem;
          }
        }
        h6{
          font-size:28rem/$rem;
          color: #999999;
        }
      }
      .team{
        height:210rem/$rem;
      }
    }
    div.articleListTitle{
      height:80rem/$rem;
      background-color: rgb(245,245,245);
      .articleTitleCenter{
        width:690rem/$rem;
        height:80rem/$rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span.picConsult {
          font-size: 28rem/$rem;
          color: #333333;
        }
        span.consultTim {
          font-size: 28rem/$rem;
          color: #999999;
        }
      }
    }
    .goodArticle{
      ul {
        margin-top: 10px;
        margin-bottom: 0;
        padding:0;
        li {
          width: 90%;
          /*height: 116px;*/
          border-radius: 7px;
          background-color:white;
          /*border: 1px solid rgb(205, 205, 205);*/
          list-style-type: none;
          margin: 0 auto;
          padding: 8px 8px 8px 8px;
          div {
            display: flex;
            justify-content: space-between;
            span.picConsult {
              font-size: 16px;
            }
            span.consultTim {
              font-size: 12px;
              color: gray;
            }
          }
          div.mainContent {
            p {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              font-size: 15px;
              color: gray;
              height: 52px;
              /*padding-top: 5px;*/
              /*background-color: #E64340;*/
            }
          }
          div.ConsultRelate {
            margin-top: 5px;
            span.name {
              font-size: 14px;
              color: gray;
              .circle {
                display: inline-block;
                width: 12px;
                height: 12px;
                margin-right: 3px;
                background-color: red;
                border-radius: 50%;
              }
            }
            span.money {
              font-size: 14px;
              color: red;
            }
          }
        }
      }
    }
    .scanCode{
      width:100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 150px;
        height: 150px;
      }
    }
  }
  .sign{
    position: fixed;
    bottom:0;
    width:100%;
    height: 50px;
    display: flex;
    background-color: white;
    font-size: 32rem/$rem;
    color: #333333;
    justify-content: center;
    align-items: center;
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
</style>
