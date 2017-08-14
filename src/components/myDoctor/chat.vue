<template>
    <div>
      <v-header :title="title" :rightTitle="rightTitle"> </v-header>
      <div class="conversation">
        <section class="conversationList" ref="slideList" >
          <ul>
            <li v-for="(item,index) in chatText" ref="chatLi">
              <div class="other">
                <img src="../../../static/img/chatOrigin.jpg" alt="" >
                <div class="whatsay">
                  <div class="whatsay_svg">
                    <svg>
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#trigon-left"></use>
                    </svg>
                  </div>
                  <div class="whatsay_text">
                    {{item}}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <footer :class="{footshow:seeMore}" ref="footer">
        <section class="foot_top">
          <div class="chatInput">
            <input type="text"  maxlength="100" v-model="inputInfo" @input="whatInput" @keyup.enter="enterThing()">
          </div>
          <div class="chatSend">
            <div class="send" @touchstart.prevent="send()" v-if="light">
              <span>发送</span>
            </div>
            <div v-else @click="upMore()" class="addmore">
              <img src="../../../static/img/聊天界面-添加.png" alt="">
            </div>
          </div>
        </section>
        <section class="foot_bottom" v-if="gift">
          <div class="picture">
            <input type="file" name="picture" id="upPicture" ref="picture" @change="sendPicture()">
            <img src="../../../static/img/图片.png" alt="" @click="uploadPicture()">
            <span>图片</span>
          </div>
          <div class="camera">
          <img src="../../../static/img/拍照.png" alt="">
          <span>拍照</span>
          </div>
          <div class="camera" @click="goService()">
            <img src="../../../static/img/拍照.png" alt="">
            <span>预约服务</span>
          </div>
          <div class="camera" @click="selectGift()">
            <img src="../../../static/img/拍照.png" alt="">
            <span>小礼物</span>
          </div>
        </section>
        <section class="foot_bottom" v-else>
          <div class="picture">
            <input type="file" name="picture" id="upPicture" ref="picture" @change="sendPicture()">
            <img src="../../../static/img/图片.png" alt="" @click="uploadPicture()">
            <span>苹果</span>
            <span class="red">50心意</span>
          </div>
          <div class="camera">
            <img src="../../../static/img/拍照.png" alt="">
            <span>奖章</span>
            <span class="red">100心意</span>
          </div>
          <div class="camera">
            <img src="../../../static/img/拍照.png" alt="">
            <span>鲜花</span>
            <span class="red">500心意</span>
          </div>
          <div class="camera">
            <img src="../../../static/img/拍照.png" alt="">
            <span>锦旗</span>
            <span class="red">1000心意</span>
          </div>
        </section>
      </footer>
    </div>
</template>
<script>
  import header from '../../base/header'
  export default{
      data(){
        return{
            title:"李冰",
            rightTitle:"患者详情",
            seeMore:false,
            light:false,
            gift:true,
            inputInfo:"",
            chatText:["你好","我有点问题想咨询下"]
        }
      },
      components:{
          "VHeader":header
      },
      methods:{
        whatInput(){
          if(this.inputInfo.replace(/\s+/g,"") == ''){
            this.light=false
          }else{
            this.light=true
          }
        },
        enterThing(){
            if(this.light){
                this.send()
            }
        },
        send(){
          this.chatText.push(this.inputInfo)
          this.inputInfo = ''
        },
        upMore(){
            this.seeMore = !this.seeMore
            if(this.seeMore == true){
              this.gift = true
            }
        },
        selectGift(){
            this.gift = false
        },
        goService(){
            this.$router.push('/bookService')
        }
      },
  }
</script>
<style scoped lang="scss">
  @import '../../common/public.scss';
  .conversation{
    width:100%;
    /*padding-top: 50px;*/
    /*overflow: auto;*/
    /*height: 500px;*/
    position: fixed;
    top: 50px;
    bottom: 40px;
    overflow: hidden;
    /*-webkit-overflow-scrolling: touch;*/
    /*overflow: auto;*/
    background-color: white;
    ul{
      padding:0;
      margin:0;
    }
  }
  .conversationList{
    width:100%;
    /*position: relative;*/
    .loadTip{
      width:100%;
      span.pullMore{
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        img{
          width: 15px;
          height: 15px;
          margin-right: 5px;
        }
      }
    }
    li{
      .other{
        width:96%;
        display: flex;
        justify-content: flex-start;
        /*padding-top: 25px;*/
        margin-bottom: 25px;
        /*align-items: top;*/
        position: relative;
        img{
          width: 80rem/$rem;
          height: 80rem/$rem;
          border-radius: 50%;
          display: inline-block;
          margin-left: 30rem/$rem;
        }
        .whatsay{
          position: relative;
          margin-top: 0.4rem;
          .whatsay_svg{
            width:0.4266666667rem;
            height: 0.64rem;
            position: absolute;
            top:.5546667rem;
            left:.53rem;
            z-index:2;
            svg{
              display:block;
              width:0.4266666667rem;
              height: 0.64rem;
            }
          }
          .whatsay_text{
            margin-left: 20px;
            max-width: 490rem/$rem;
            background:#f5f5f5;
            padding:0.42rem 0.384rem;
            border-radius:10px;
            font-size: 28rem $rem;
            line-height: 48rem/$rem;
            color: #333333;
            word-break: break-all;
            img{
              border-radius: 0;
              margin-left: 0;
              width:100%;
              height:100%;
            }
          }
        }
      }
      .mysay{
        display:flex;
        flex-direction:row-reverse;
        .say-time{
          left:8.8rem;
        }
        .whatsay{

          .whatsay_svg{
            right: 0rem;
            left:auto;
          }
          .whatsay_text{
            margin-right: 0.38rem;
            margin-left:0;
            background:#9fe658;
          }
        }
      }
    }
  }
  footer{
    width:100%;
    height: 200px;
    position: fixed;
    bottom: -160px;
    background-color: white;
    .foot_top{
      display: flex;
      .chatInput{
        width: 566rem/$rem;
        margin-left: 30rem/$rem;
        text-align: center;
        input{
          width: 566rem/$rem;
          height: 64rem/$rem;
          border:none;
          font-size: 32rem/$rem;
          outline: medium;
          border-radius:7px;
          background-color: rgb(243,243,243);
          border-bottom: 1px solid #e0e0e0;
        }
        .greenBorder{
          border-bottom: 1px solid #19ad17;
          /*border-color:#19ad17;*/
        }
      }
      .chatSend{
        width: 110rem/$rem;
        height: 70rem/$rem;
        margin-left: 20rem/$rem;
        /*background-color: dodgerblue;*/
        text-align: center;
        .send{
          width: 110rem/$rem;
          height: 70rem/$rem;
          background:#16af17;
          border-radius:5px;
          display: flex;
          justify-content: center;
          align-items: center;
          span{
            display: block;
            color: white;
          }
        }
        .addmore{
          img{
            width: 58rem/$rem;
            height: 58rem/$rem;
          }
        }
      }
    }
    .foot_bottom{
      display: flex;
      .camera, .picture{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 30px;
        margin-top: 30px;
        img{
          width: 57px;
          height: 57px;
          display: block;
          margin-bottom: 15px;
        }
        span{
          font-size: 14px;
          color:#666666
        }
        span.red{
          margin-top: 5px;
          color: red;
        }
      }
      .picture{
        >input{
          display: none;
        }
      }
    }
  }
  .footshow{
    bottom:0;
    transition: all .2s;
  }
</style>
