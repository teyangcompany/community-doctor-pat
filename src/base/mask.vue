<template>
  <div>
    <div class="list-mask" transition="fade" v-if="showList"></div>
  </div>
</template>
<script>
  export default{
    props:{
      showList:{
        type:Boolean
      }
    }
  }
</script>
<style scoped lang="scss">
  .list-mask{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index: 1;
    background-color: rgba(0,0,0,.3);
  }
  .fade-transition{
    transition: all 0.5s;
    opacity: 1;
    background: rgba(7, 17, 27, 0.6);
  }
  .fade-enter,.fade-leave{
    opacity: 0;
    background: rgba(7, 17, 27, 0);
  }
</style>
