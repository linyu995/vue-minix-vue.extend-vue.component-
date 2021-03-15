//vue.extend案例2
import Vue from 'vue';
var extendOne=Vue.extend({
    template:`<p>{{name}}</p>`,
    data:function () {
        return{
            name:'李知道'
        }
    }
});
Vue.component('extendOne',extendOne);
export default extendOne
