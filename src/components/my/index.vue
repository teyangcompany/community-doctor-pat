<template>
  <div class="my">
      <div class="myTop border-1px">
          <div>
            <p>我的</p>
          </div>
      </div>
      <div class="myInfo">
         <div class="avatar border-1px">
            <div class="avatarCenter">
              <img class="profile" src="../../../static/img/p1.jpg" alt="">
              <div class="rightWord">
                  <div>
                    <span>刘劲松</span><span>恒大绿洲小区</span><span>男 27岁</span>
                  </div>
                <img class="look" src="../../../static/img/查看更多.png" alt="">
              </div>
            </div>
         </div>
        <div class="blank border-1px"></div>
        <router-link tag="div" to="/mySignService" class="list border-1px">
             <p >我的签约服务 <img src="../../../static/img/查看更多.png" alt=""> </p>
        </router-link>
        <div class="blank border-1px"></div>
        <router-link tag="div" to="/addPatient" class="list border-1px">
          <p >常用就诊人 <img src="../../../static/img/查看更多.png" alt=""> </p>
        </router-link>
        <router-link tag="div" to="/healthFile" class="list border-1px">
          <p >健康档案 <img src="../../../static/img/查看更多.png" alt=""> </p>
        </router-link>
        <div class="blank border-1px"></div>
        <div class="list border-1px">
          <p >我的钱包 <img src="../../../static/img/查看更多.png" alt=""> </p>
        </div>
        <div class="blank border-1px"></div>
        <div class="list border-1px">
          <p >账户相关 <img src="../../../static/img/查看更多.png" alt=""> </p>
        </div>
        <div class="list border-1px">
          <p >关于 <img src="../../../static/img/查看更多.png" alt=""> </p>
        </div>
      </div>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped lang="scss">
  @import '../../common/public.scss';
  @import '../../common/mixin.scss';
  .my {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .myTop {
      width: 100%;
      height: 50px;
      display: flex;
      position: fixed;
      justify-content: center;
      align-items: center;
      >div{
        p{
          margin:0;
          font-size: 36rem/$rem;
          color: #333333;
        }
      }
    }
    .myInfo{
      position: fixed;
      top: 50px;
      bottom:0;
      left:0;
      right:0;
      .avatar{
        width:100%;
        height:85px;
        .avatarCenter{
          width:690rem/$rem;
          height: 80px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          .rightWord{
            height: 80px;
            width:690rem/$rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            >div{
              display: flex;
              flex-direction: column;
            }
            img.look{
              width: 16rem/$rem;
              height: 20rem/$rem;
            }
            span{
              height: 25px;
              font-size: 32rem/$rem;
              font-family: PingFangSC;
              color: #333333;
            }
            span:nth-child(2),span:nth-child(3){
              color: #999999;
            }
          }
          img.profile{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }
      .blank{
        width:100%;
        height: 10px;
        background-color: rgb(245,245,245);
      }
      .list{
        width:100%;
        height: 50px;
        display: block;
        p{
          width:690rem/$rem;
          height: 50px;
          margin:0 auto;
          height: 50px;
          font-size: 32rem/$rem;
          color: #333333;
          display: flex;
          align-items: center;
          justify-content: space-between;
          img{
            width: 16rem/$rem;
            height: 20rem/$rem;
          }
        }
      }
    }
  }

</style>
