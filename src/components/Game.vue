<template>
    <div class="box">
    <button @click="shuffle">重置</button>
        <transition-group name="cell" tag="div" class="container">
            <div
                @click.prevent="clickBlock(index)"
                v-for="(puzzle,index) in puzzles"
                :key="puzzle"
                v-text="puzzle"
                :class="puzzle === ''? 'cell cells':'cell'"
            ></div>
        </transition-group>
    </div>
</template>

<script>
import _ from 'lodash' //  导入loadsh插件
export default {
  name: 'Game',
  data() {
    return {
      puzzles: []
    };
  },
  mounted() {
    this.rander();
  },
  methods:{
    shuffle() {
      this.puzzles = _.shuffle(this.puzzles);
    },
     rander() {
      this.puzzles = ['赵煜1','赵煜2','赵煜3','赵煜4','赵煜5','赵煜6','赵煜7','赵煜8','']
    },
  },
 
 
}
</script>

<style scoped>
.box {
    width: 400px;
    margin: 60px auto 0;
}

.container {
    margin: 20px auto 0;
    display: flex;
    flex-wrap: wrap;
    width: 306px;
    margin-top: 10px;
    border: 1px solid #ccc;
}
.cell {
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    height: 100px;
    margin: 1px;
    -moz-box-shadow: 0px 0px 3px #333333;
    -webkit-box-shadow: 0px 0px 3px #333333;
    box-shadow: 0px 0px 3px #333333;
    background-color: #6620b28c;
}
.cells {
    background-color: #fff;
    -moz-box-shadow: 0px 0px 0px #333333;
    -webkit-box-shadow: 0px 0px 0px #333333;
    box-shadow: 0px 0px 0px #333333;
    z-index: -999;
}
.cell-move {
    transition: transform 0.5s;
}
</style>
