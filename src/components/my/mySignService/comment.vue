<template>
    <div class="comment">
          <v-header :title="title" :rightTitle="rightTitle"></v-header>
          <div class="commentArea">
            <div class="star">
              <p>评价<span>华立</span>医生</p>
              <div id="shoplist">
                <p class="all" >
                  <input type="radio" name="b" value="0"  v-model="inputdata"/>
                  <span>★</span>
                  <input type="radio" name="b" value="1" v-model="inputdata" />
                  <span>★</span>
                  <input type="radio" name="b" value="2" v-model="inputdata" />
                  <span>★</span>
                  <input type="radio" name="b" value="3" v-model="inputdata" />
                  <span>★</span>
                  <input type="radio" name="b" value="4" v-model="inputdata" />
                  <span>★</span>
                  <input type="radio" name="b" value="5" v-model="inputdata" />
                  <span>★</span>
                </p>
              </div>
            </div>
            <div class="text border-1px">
              <div>
                <textarea placeholder="请输入评论（可以不填）"></textarea>
              </div>
            </div>
            <div class="submitComment">
              <router-link tag="div" to="/detailService" >
                <button>提交评价</button>
              </router-link>
            </div>
          </div>
    </div>
</template>
<script>
  import header from '../../../base/header'
  export default{
      data(){
         return{
           title:"评价",
           rightTitle:"",
           inputdata:''
         }
      },
      components:{
          "VHeader":header
      },
    watch: {
      inputdata(value) {
        console.log(value)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../../common/public.scss';
  @import '../../../common/mixin.scss';
  .comment{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgb(245,245,245);
    .commentArea{
      position: fixed;
      top: 50px;
      width:100%;
      .star{
        width:100%;
        height:260rem/$rem;
        background-color: rgb(245,245,245);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span{
          img{
            width: 30px;
            height: 30px;
            margin-top: 20px;
          }
        }
      }
      .text{
        width:100%;
        height: 180px;
        background-color: #FFFFFF;
        >div{
          width:690rem/$rem;
          margin:0 auto;
          -top: 5px;
        }
        textarea{
          width:690rem/$rem;
          height: 180px;
          outline: medium;
          border: none;
          resize: none;
          font-size: 32rem/$rem;
          color:#999999;
          /*margin-top: 5px;*/
        }
      }
      .submitComment{
        width:100%;
        height: 80rem/$rem;
        margin-top: 20px;
        >div{
          width:690rem/$rem;
          height: 80rem/$rem;
          margin:0 auto;
          button{
            width:690rem/$rem;
            height: 80rem/$rem;
            border:none;
            outline: medium;
            background-color: #3CC51F;
            color: white;
            font-size: 32rem/$rem;
            border-radius: 7px;
          }
        }
      }
    }

  }
  .all>input{opacity:0;position:absolute;width:2em;height:2em;margin:0;}
  .all>input:nth-of-type(1),
  .all>span:nth-of-type(1){display:none;}
  .all>span{font-size:2em;color:gold;
    -webkit-transition:color .2s;
    transition:color .2s;
  }
  .all>input:checked~span{color:#666;}
  .all>input:checked+span{color:gold;}
</style>
