<template>
    <div>
        <div id="extendOne">
            <extendOne></extendOne>
        </div>
    </div>
</template>

<script>
    import extendOne from '../util/componentExtendOne'
    export default {
        name: "componentExtendVueOne",
        components:{
            extendOne,
        },
        /*data(){

        },*/
        mounted() {
          /*  new extendOne().$mount('#extendOne')*/
        }
    }
</script>

<style scoped>

</style>
