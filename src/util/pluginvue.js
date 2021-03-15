//插件
import Vue from  'vue';
let test={}
test.install=function (Vue,options) {
  Vue.directive('my-directive',{
     bind:function(el,binding){
           el.style.color='red'
      }
  })

  Vue.mixin({
      methods:{
          change(){
              console.log("点击有效")
              /*el.style.color='blue'*/
          }
      }

  })

   Vue.prototype.name='李祥龙'
   Vue.prototype.$myMethod=function () {
        console.log("方法我建立饿了")
   }

}
Vue.component('test',test);
export default test

