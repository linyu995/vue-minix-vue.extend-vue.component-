<template>
  <div>
  <MinxVue></MinxVue>
  <CommonPlugin></CommonPlugin>
   <ComponentExtendVue></ComponentExtendVue>
   <ComponentExtendVueOne></ComponentExtendVueOne>
   <ComponentVue></ComponentVue>
   <DireactivVue></DireactivVue>
   <DireactiveOneVue></DireactiveOneVue>
   <PluginVue></PluginVue>
   <Renders></Renders>
  </div>
</template>
<script>
    import MinxVue from '../plugins/minixVue'
    import CommonPlugin from '../plugins/commonPlugin'
    import ComponentExtendVue from  '../plugins/componentExtendVue'
    import ComponentExtendVueOne from '../plugins/componentExtendVueOne'
    import ComponentVue from '../plugins/componentVue'
    import DireactivVue from '../plugins/direactiveVue'
    import DireactiveOneVue from '../plugins/direactiveOneVue'
    import PluginVue from '../plugins/pluginVue'
    import Renders from '../util/renderVue'
     export default {
        name: "HelloWord",
        components:{
            PluginVue,
            MinxVue,
            CommonPlugin,
            ComponentExtendVue,
            ComponentExtendVueOne,
            ComponentVue,
            DireactivVue,
            DireactiveOneVue,
            PluginVue,
            Renders
        },
    }
</script>
<style scoped>

</style>
