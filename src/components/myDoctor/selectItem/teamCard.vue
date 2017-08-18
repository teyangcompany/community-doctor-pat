<template>
  <div>
    <v-header :title="title" :rightTitle="rightTitle"></v-header>
    <div class="teamCard" ref="teamCard">
      <div>
        <div class="headImg">
          <img src="../../../../static/img/u409.png" alt="">
        </div>
        <div class="card border-1px">
          <div>
            <p>华立医生团队</p>
            <p class="insTitle">杭州市滨江区住院部19楼</p>
            <div>
              <span>签约患者 <span class="number">666</span></span>
              <span class="border-1px-right"></span>
              <span>评价 <span class="ratings">9.3分></span></span>
            </div>
          </div>
        </div>
        <div class="institutionDes border-1px">
          <div class="desCenter team">
            <h4>团队擅长</h4>
            <h6>全科预防、慢病管理、体质检测</h6>
          </div>
        </div>
        <div class="institutionDes border-1px">
          <div class="desCenter team">
            <h4>团队介绍</h4>
            <h6>华立全科团队是一支年轻的、充满活力的、专注于慢病管理、全科健康预诊的社区服务团队</h6>
          </div>
        </div>
        <div class="institutionDes border-1px">
          <div class="desCenter">
            <h4 class="teamMember">团队成员(6位) <span>查看更多<img src="../../../../static/img/查看更多.png" alt=""></span> </h4>
            <div>
              <router-link tag="div" to="/signSingle">
                <img src="../../../../static/img/ys1.jpg" alt="">
                <span class="name">华立<span class="chief ratings">首席</span></span>
                <span>全科</span>
                <span>主治医生</span>
              </router-link>
              <router-link tag="div" to="/signSingle">
                <img src="../../../../static/img/ys2.jpg" alt="">
                <span class="name">张康<span class="chief empty ratings"></span></span>
                <span>全科</span>
                <span>实习医生</span>
              </router-link>
              <router-link tag="div" to="/signSingle">
                <img src="../../../../static/img/ys3.jpg" alt="">
                <span class="name">李爱国<span class="chief empty ratings"></span></span>
                <span></span>
                <span>护工</span>
              </router-link>
              <router-link tag="div" to="/signSingle">
                <img src="../../../../static/img/ys4.jpg" alt="">
                <span class="name">赵乾坤<span class="chief empty ratings"></span></span>
                <span></span>
                <span>护工</span>
              </router-link>
              <router-link tag="div" to="/signSingle">
                <img src="../../../../static/img/ys5.jpg" alt="">
                <span class="name">吴魏<span class="chief empty ratings"></span></span>
                <span>全科</span>
                <span>实习医生</span>
              </router-link>
              <router-link tag="div" to="/signSingle">
                <img src="../../../../static/img/ys6.jpg" alt="">
                <span class="name">张莉<span class="chief empty ratings"></span></span>
                <span></span>
                <span>护工</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="border-1px articleListTitle">
          <div class="articleTitleCenter">
            <span class="picConsult">精选文章</span>
            <span class="consultTim">查看更多<img src="../../../../static/img/查看更多.png" alt=""></span>
          </div>
        </div>
        <div class="goodArticle">
          <ul class="border-1px">
            <li>
              <div class="mainContent">
                <p>孩子扁桃体发炎频繁肿大，割还是不割，春季小儿肺炎多发，怎么防浙江肺部医学中心帮您解决以上困惑</p>
              </div>
              <div class="ConsultRelate">

                <span class="name number"><span class="circle"></span>华佗</span>
                <span class="money">阅读5281</span>
              </div>
            </li>
          </ul>
          <ul  class="border-1px">
            <li>
              <!--<div>-->
                <!--<span class="picConsult">精选文章</span>-->
                <!--<span class="consultTim">查看更多</span>-->
              <!--</div>-->
              <div class="mainContent">
                <p>"基础体温"不可少，调经备孕都需要，杭州何氏妇科治疗不孕症经验，如何挂到我的专家号</p>
              </div>
              <div class="ConsultRelate">

                <span class="name number"><span class="circle"></span>华佗</span>
                <span class="money">阅读5281</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="aboutTeam border-1px-top">
      <span class="border-1px-right number" @click="goConsult()">咨询团队</span>
      <span class="green" @click="goSign()">签约团队</span>
    </div>
  </div>
</template>
<script>
  import header from '../../../base/header'
  import BScroll from 'better-scroll'
  export default{
      data(){
         return{
             title:"团队",
             rightTitle:""
         }
      },
      mounted(){
          this.$nextTick(()=>{
              setTimeout(()=>{
                this._initArticleScroll()
              },100)
          })
      },
      methods:{
          _initArticleScroll(){
              this.articleScroll = new BScroll(this.$refs.teamCard,{
                  click:true
              })
             console.log(this.articleScroll)
          },
        goConsult(){
              this.$router.push('/doctorCard')
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
  .teamCard{
    position: fixed;
    top: 50px;
    bottom:50px;
    left:0;
    right:0;
    overflow: hidden;
    .headImg{
      width:100%;
      img{
        width:100%;
      }
    }
    .card{
      width:100%;
      height:250rem/$rem;
      margin:0 auto;
      /*background-color: green;*/
      display: flex;
      justify-content: center;
      align-items: center;
      >div{
        text-align: center;
        p{
          margin:0;
          font-size: 32rem/$rem;
          font-family: PingFangSC;
          color: #333333;
        }
        p.insTitle{
          font-size: 28rem/$rem;
          font-family: PingFangSC;
          color: #999999;
        }
        >div{
          display: flex;
          align-items: center;
          span{
            font-size: 28rem/$rem;
            color: #999999;
            display: inline-block;
            height:30rem/$rem;
            line-height: 30rem/$rem;
            /*background-color: #3CC51F;*/
          }
          span:nth-child(2){
            margin-right: 20rem/$rem;
            margin-left: 20rem/$rem;
          }
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
        .teamMember{
          margin-top: 5px;
        }
        h4,h6{
          margin:0;
          padding:0;
          font-weight: normal;
        }
        h4{
          font-size: 32rem/$rem;
          color: #333333;
          font-family: PingFangSC;
          /*margin-top: 5px;*/
          display: flex;
          justify-content: space-between;
          span{
            color: #999999;
            font-size: 28rem/$rem;
            img{
              width:16rem/$rem;
              height:24rem/$rem;
            }
          }
        }
        h6{
          font-size:32rem/$rem;
          color: #999999;
          /*margin-top: 5px;*/
        }
        >div{
          display: flex;
          flex-wrap:wrap ;
          margin-top: 15px;
          margin-bottom: 15px;
          >div{
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap:wrap ;
            width:33.33333%;
            margin-top: 10px;
            span{
              color: #999999;
              font-size: 28rem/$rem;
              margin-top: 5px;
            }
            span.name{
              color: #000;
              margin-left: 60rem/$rem;
              font-size: 32rem/$rem;
              span.chief{
                position: relative;
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
            img{
              width:80rem/$rem;
              height:80rem/$rem;
              border-radius: 50%;
            }
          }
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
          color: #666666;
        }
        span.consultTim {
          font-size: 28rem/$rem;
          color: #666666;
          img{
            width:16rem/$rem;
            height:24rem/$rem;
          }
        }
      }
    }
    .goodArticle{
      ul {
        margin-top: 10px;
        margin-bottom: 0;
        padding:0;
        li {
          width: 690rem/$rem;
          height: 160rem/$rem;
          background-color:white;
          list-style-type: none;
          margin: 0 auto;
          padding: 0px 8px 8px 8px;
          div.mainContent {
            p {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              font-size: 32rem/$rem;
              color: gray;
              height: 52px;
              /*background-color: #E64340;*/
            }
          }
          div.ConsultRelate {
            margin-top: 5px;
            display: flex;
            justify-content: space-between;
            span.name {
              font-size: 14px;
              color: gray;
              .circle {
                display: inline-block;
                width: 10px;
                height: 10px;
                margin-right: 3px;
                background-color: red;
                border-radius: 50%;
              }
            }
            span.money {
              font-size: 14px;
              color: #999999;
            }
          }
        }
      }
    }
  }
  .aboutTeam{
    position: fixed;
    bottom:0;
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
    span{
      flex:1;
      height: 50px;
      display: inline-block;
      line-height: 50px;
      text-align: center;
      font-size: 32rem/$rem;
      color: #333333;
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
</style>
