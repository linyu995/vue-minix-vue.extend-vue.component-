<template>
    <div>
        <div @click="change()" id="minx">{{message}}</div>
    </div>
</template>
<script>
    import  {minixUtil} from '../util/minixUtil'
    export default {
        name: "minixVue",
        mixins:[minixUtil]
    }
</script>
<style scoped>

</style>
