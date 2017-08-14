<template>
  <transition name="slide">
    <div>
          <v-header :title="title" :rightTitle="rightTitle"></v-header>
          <div class="want">
            <div class="basic border-1px">
              <div>
                咨询信息
              </div>
            </div>
            <div class="illness border-1px">
              <div>
                咨询对象
                <div>
                  <span>全部团队</span>
                  <img src="../../../static/img/查看更多.png" alt="">
                </div>
              </div>
            </div>
            <div class="history border-1px">
              <div>
                就诊人
                <div>
                  <span>张三 男 24岁</span>
                  <img src="../../../static/img/查看更多.png" alt="">
                </div>
              </div>
            </div>
            <div class="family border-1px">
              <div>
                疾病名称
                <div>
                  <span>未确诊请不要填写</span>
                  <img src="../../../static/img/查看更多.png" alt="">
                </div>
              </div>
            </div>
            <div class="alergic border-1px">
              <div>
                悬赏金额
                <div>
                  <span class="ratings">¥50</span>
                  <img src="../../../static/img/查看更多.png" alt="">
                </div>
              </div>
            </div>
            <div class="basic border-1px">
              <div>
                病情资料
              </div>
            </div>
            <div class="detail border-1px">
              <div class="detailInput">
                <textarea placeholder="请详细描述患者的主要症状、持续时间、已经确诊的疾病和接诊医生的意见。(如有症状照片、病历、检查单，可在下方上传)" v-model="description"></textarea>
              </div>
            </div>
            <div class="upload">
              <div class="addPicture">
                <input type="file" name="upload" id="upload" ref="upload" @change="onFileChange()">
                <img src="../../../static/img/添加图片.png" alt=""  @click="selectImg()">
              </div>
              <div class="wordFor">
                <span>添加图片</span>
                <span>请上传患处图片,让医生更了解您的病情</span>
              </div>
            </div>
          </div>
    </div>
    </transition>
</template>
<script>
  import header from '../../base/header'
  export default{
      data(){
          return{
              title:"我要咨询",
              rightTitle:'立即提问',
              description:""
          }
      },
      components:{
          "VHeader":header
      }
  }
</script>
<style scoped lang="scss">
  @import '../../common/public.scss';
  @import '../../common/mixin.scss';
.want{
  position: fixed;
  top: 50px;
  bottom:0;
  left:0;
  right:0;
  background-color: white;
  .basic,.illness,.history,.family,.alergic,.record{
    width: 100%;
    height: 90rem/$rem;
    >div{
      width: 690rem/$rem;
      height: 90rem/$rem;
      font-family: PingFangSC;
      font-size: 32rem/$rem;
      color: #333333;
      margin:0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      >div{
        span{
          font-size: 32rem/$rem;
          color: #666666;
          font-family: PingFangSC;
          display: inline-block;
          margin:0;
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
  .detail{
    width:100%;
    height:230rem/$rem;
    .detailInput{
      width: 690rem/$rem;
      height: 230rem/$rem;
      border-radius: 10px;
      margin:0 auto;
      textarea{
        width: 690rem/$rem;
        height:230rem/$rem;
        border:none;
        resize: none;
        outline: medium;
        font-size: 32rem/$rem;
        padding-top: 5px;
        color: #cccccc;
      }
    }
  }
  .upload{
    width: 690rem/$rem;
    height: 460rem/$rem;
    border-radius: 10px;
    word-break: break-all;
    position: relative;
    margin: 30rem/$rem auto;
    /*display: flex;*/
    .addPicture{
      float: left;
      margin-right: 16.2px;
      .deleteImg{
        position: absolute;
        top:0;
        left:0;
        background-color: #E64340;
      }
      >input{
        display: none;
      }
      img{
        width: 140rem/$rem;
        height: 140rem/$rem;
      }
    }
    .wordFor{
      span:first-child{
        font-size: 32rem/$rem;
        color: #333333;
        display: block;
      }
      span:last-child{
        font-size: 28rem/$rem;
        display: block;
        margin-top: 14.5px;
        color: #999999;
      }
    }
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
