/* 
*Created by fengyang on 2018/3/16
**/
$(function () {
  /* var sInput = prompt("请输入一个1-100之间的数字");
   console.log(sInput);*/

  //猜数字游戏
   var iNumber = Math.floor(Math.random()*100+1);//产生1-100之间的随机数
   //循环猜5次
   for(var i=0;i<7;i++){
      if(i==6){
         alert("游戏结束，中奖号码为"+iNumber);
      }else{
        //猜数字开始,先输入猜的数字，需要是整数
          var sInput = prompt("请输入一个1-100之间的数字");
          try{
              var nInput = parseInt(sInput);
              if(sInput==nInput){
                  //判断输入的数字是否在1-100之间
                  if(nInput>100 || nInput<1){
                      alert("你输入的数字不在1-100之间");
                  }else{
                      if(nInput>iNumber){
                          alert("你输入的数字太大");
                      }else if(nInput<iNumber){
                          alert("你输入的数字太小");
                      }else{
                          alert("恭喜你中奖了");
                          return;//直接退出方法体
                      }
                  }
              }
          }catch (e){
             console.log("你输入的不是整数");
          }
      }
   }


});
