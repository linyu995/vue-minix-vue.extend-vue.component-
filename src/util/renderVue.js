//render渲染
import Vue from 'vue'
 const renders=Vue.component('renders', {
     render(h, params) {
         return h('div',{
             style:{
                 width:'100px',height:'100px',backgroundColor:'red'
             }
             },"地方"
         )
     }
 })
export default renders
