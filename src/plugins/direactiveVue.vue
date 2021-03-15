<template>
    <div>
    <p v-demo="message" @click="change">Stick me 200px from the top of the page</p>
    <p v-demo="message">change</p>
    </div>
</template>

<script>
    import dir from '../util/directivePlugin'
    export default {
        name: "direactiveVue",
        directives:{
            dir
        },
        data(){
            return{
                message:'green',
                direction:'yellow'
            }
        },
        methods:{
           change(){
               this.message='red'
           }
        }
    }
</script>

<style scoped>

</style>
