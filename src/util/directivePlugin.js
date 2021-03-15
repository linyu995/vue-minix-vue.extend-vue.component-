//局部自定义指令
import Vue from 'vue'

const dir=Vue.directive('demo',{
    /* bind:function (el,binding,vnode) {
      el.innerHTML=
          'name:'+ JSON.stringify(binding.name)+'<br>'+
          'value'+JSON.stringify(binding.value)+'<br>'+
          'expression'+JSON.stringify(binding.expression)+
          'argument: '   + JSON.stringify(binding.arg) + '<br>' +
          'modifiers: '  + JSON.stringify(binding.modifiers) + '<br>' +
          'vnode keys: ' + Object.keys(vnode).join(', ')

     }*/
    bind:function(el,binding,vnode){

        /*binding.value
        var s=binding.value*/
        console.log(binding.arg)
        el.style.color=binding.value
    },

    update:function (el,binding) {
        el.style.color=binding.value
    }
})
Vue.component('dir',dir);
export default dir

