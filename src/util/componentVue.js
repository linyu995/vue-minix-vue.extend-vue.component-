//vue.component 案例
import Vue from 'vue'
const componentVues=Vue.component('componentVue',{
    template:`<p>{{score}}</p>`,
    data:function () {
        return {
            score:90
        }
    },

})
export default componentVues

