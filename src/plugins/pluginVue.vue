<template>
    <div>
        <div v-my-directive @click="change()">{{name}}</div>
    </div>
</template>

<script>
    export default {
        name: "pluginVue",
        data(){
          return{
              name:this.name
          }
        },
        mounted(){
            console.log(this.$myMethod())
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>
