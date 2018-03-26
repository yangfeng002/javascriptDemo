/* 
*Created by fengyang on 2018/3/22
**/
var raNum=0;
$(function () {
   $("#d2").on("click",function () {
      raNum = Math.random()*360;

      //判断，定义raNum的值
       //旋转插件
       $(this).rotate({
           angle: 0,//开始角度
           animateTo: raNum+1440,//旋转的角度
           duration: 3000,//持续的时间
          /* easing:function(x, t, b, c, d) {
               return (t/d)*c ;
           },*/
           callback: function () {
              //执行完成后的回调
               rotateMethod();
           }
       })

   });
});
function rotateMethod() {
   //旋转多少度，然后中奖情况
   if(0<raNum && raNum<=22.5){
       alert("有惊喜");
       return;
   }else if(22.5<raNum && raNum<=67.5){
      alert("摇一摇");
      return;
   }else if(67.5<raNum && raNum<=112.5){
     alert("有惊喜");
     return;
   }


}
