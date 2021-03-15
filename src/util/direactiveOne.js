//全局自定义指令1
import Vue from 'vue';
var ant=Vue.directive('ant',{
    bind(el,binding,vnode,oldNode){
     el.style.color=binding.value
},
update(el,binding){
    el.innerHTML=binding.value
}
})
Vue.component('ant',ant)
export default ant
