<template>
    <div class='hhh'>
      <div id="box" class="box">
        <div class="small-box"></div>
      </div>
      <button @click="playAudio">重置</button>
      <audio ref="audio" :src="audioSource" controls/>
     </div>
</template>

<script>
export default {
  name: 'Game1',
  data() {
    return {
      audioSource: require('@/assets/mp3/野狼disco.mp3'),
      puzzles: []
    };
  },
  mounted() {

  },
  methods:{
    playAudio() {


      this.$refs.audio.play();


    },
 },
 
 
}
</script>

<style lang='less'>
    .hhh {
      height: 100vh;
      width: 100vw;
    }
    .box {
      width: 400px;
    }
    .box {
      width: 100%;
      height: 100%;
      display: flex;
      /* 小块自动换行排列 */
      flex-wrap: wrap;
      justify-content: center;
    }
    .small-box {
      width: 400px;
      height: 400px;
      margin: 50px auto;
      background-image: url('~@/assets/img/we.jpg');
      background-size: cover;
      box-sizing: border-box;
    }
    .small-box {
      /* ... */
      opacity: 0;
      animation: smallBoxAnimate 2000ms linear forwards;
    }
    @keyframes smallBoxAnimate {
      0% {
        opacity: 0;
      }
      40% {
        opacity: 0;
      }
      70% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }
</style>
