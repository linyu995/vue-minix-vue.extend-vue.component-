//minix 混合案例
export const minixUtil={
   data() {
       return {
           message:'minixTest'
       }
  },
   methods:{
      change(){
           console.log("数据")
          document.getElementById('minx').style.height=100+'px';
          document.getElementById('minx').style.width=100+'px';
          document.getElementById('minx').style.backgroundColor='red'


      }
   }
}

