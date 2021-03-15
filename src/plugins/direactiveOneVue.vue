<template>
    <div>
        <div @click="change">按钮</div>
        <div v-ant="message"> 改善生活</div>
    </div>
</template>

<script>
   /* import ANT from '../util/direactiveOne'*/
    export default {
        name: "direactiveOneVue",
       /* directives:{
            ANT
        },*/
        data(){
            return{
                message:''
            }
        },
        methods:{
            change(){
                this.message='李敏镐'
            }
        }
    }
</script>

<style scoped>

</style>
