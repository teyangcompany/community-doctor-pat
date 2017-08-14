<template>
  <div>
    <v-header :title="title" :rightTitle="rightTitle"></v-header>
    <div class="verifyArea">
      <div class="blank border-1px"></div>
      <div class="formContent nameContent">
        <div class="form phone border-1px">
          <label for="">姓名</label>
          <input type="text" placeholder="请输入您的真实姓名">
        </div>
        <div class="form verifyCode border-1px">
          <label for="">身份证号</label>
          <input type="text" placeholder="请输入您的身份证号">
        </div>
      </div>
      <div class="blank border-1px"></div>
      <div class="formContent">
        <div class="form phone border-1px">
          <label for="">手机号</label>
          <input type="text" placeholder="请输入手机号">
        </div>
        <div class="form verifyCode border-1px">
          <label for="">验证码</label>
          <input type="text" placeholder="请输入验证码">
          <button>发送验证码</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import header from '../../../base/header'
  export default{
    data(){
      return{
        title:"添加就诊人",
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
  @import '../../../common/var.scss';
  @import '../../../common/mixin.scss';
  .verifyArea{
    position: fixed;
    top: 50px;
    left:0;
    right:0;
    bottom:0;
  }
  .blank{
    width:100%;
    height: 20px;
    background-color: rgb(245,245,245);
  }
  .formContent{
    width:100%;
    .form{
      width:100%;
      height: 40px;
      line-height: 40px;
      background-color:white;
      display: flex;
      label{
        width: 100px;
        font-size: 16px;
        padding-left:1rem;
      }
      input{
        flex: 1;
        border: none;
        outline: medium;
      }
    }
    .phone{
      /*margin-top: 20px;*/
    }
    .verifyCode{
      position: relative;
    }
    .verifyCode button{
      position: absolute;
      top:0;
      right:0;
      height: 40px;
      width: 100px;
      border:none;
    }
  }
</style>
