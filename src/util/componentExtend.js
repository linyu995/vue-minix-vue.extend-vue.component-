//vue.extend案例1
import Vue from 'vue';
 var  vueExtend=Vue.extend({
    template:`<p>{{firstname}}{{lastname}}</p>`,
    data:function () {
        return {
            firstname:'张',
            lastname:'三丰'
        }
    },



});
/*Vue.component('vueExtend',vueExtend);*/
export default vueExtend
