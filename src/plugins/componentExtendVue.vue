<template>
    <div >
        <div id="extends">
            <vueExtend></vueExtend>
        </div>
    </div>
</template>
<script>
   import vueExtend from '../util/componentExtend';
    export default {
        name: "componentExtendVue",
        components:{
          vueExtend
        },
        mounted() {
            /* new vueExtend().$mount('#extends')*/
        },
       /* data(){
         return{

         }
        },*/

    }
</script>

<style scoped>

</style>
