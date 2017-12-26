/* 
*Created by fengyang on 2017/12/4
**/
$(function(){
   //页面初始化加载
   $(".pics ul li").on("mouseover",function () {
       //stop(true)表示动画暂停，stop(true,true)表示迅速结束动画
        $(this).stop(true).animate({width:"789px"},500).siblings().stop(true).animate({width:"100px"},500);
   });


});
