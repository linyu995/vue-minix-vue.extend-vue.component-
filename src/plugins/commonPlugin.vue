<template>
  <div>
   <div>{{times}}</div>
    <div>{{names}}</div>
  </div>
</template>

<script>
    import {name,time} from '../util/commonplugin'
    export default {
        name: "commonPlugin",
        data(){
          return{
                times:'',
                names:''
            }
        },
        mounted() {
          this.times=time
          this.names=name()
        }
    }
</script>
<style scoped>

</style>
