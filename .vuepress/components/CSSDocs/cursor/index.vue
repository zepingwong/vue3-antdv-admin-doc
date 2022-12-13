<style scoped lang="stylus">
.cursor-container
  .cursor-item
    width:90px
    height:90px
    border:2px solid #99a9bf
    font-size: 16px
    border-radius: 50%
    display: inline-block
    line-height: 90px
    text-align: center
    margin:5px
    background: transparent
</style>

<template>
  <div class="cursor-container">
    <div class="cursor-item" v-for="(value,index) in cursorArr" :key="index" :style="{cursor:value}">{{value}}</div>
  </div>
</template>

<script>
export default {
  name: 'CursorIndex',
  data () {
    return {
      cursor: 'auto,text,default,none,help,pointer,progress,wait,progress,cell,crosshair,text,vertical-text,alias,copy,no-drop,not-allowed,grab,grabbing,all-scroll,all-scroll,move,col-resize,row-resize,n-resize,se-resize,n-resize,s-resize,ns-resize,e-resize,s-resize,w-resize,ne-resize,nw-resize,se-resize,sw-resize,ew-resize,ns-resize,nesw-resize,nwse-resize,zoom-in,zoom-out'
    }
  },
  computed: {
    cursorArr: function () {
      return Array.from(new Set(this.cursor.split(',')))
    }
  }
}
</script>
