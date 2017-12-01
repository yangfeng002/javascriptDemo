/* 
*Created by fengyang on 2017/11/30
**/
var i=0;//索引
var timer;//清除定时器的标识
$(function () {
    $("#igs").find(".ig:eq(0)").fadeIn().siblings().fadeOut();
    $("div.tab").eq("0").addClass("bg");
    showTime();//轮播效果开始执行

   //tab鼠标悬浮事件
   $(".tab").hover(function () {
       //鼠标移入事件,停止轮播
       i = $(this).index();
       show();
       clearInterval(timer);
   },function () {
       //鼠标移出事件，轮播开始
       i = $(this).index();
       showTime();
   });

   //向左点击事件
    $(".btn1").on("click",function () {
        clearInterval(timer);//停止轮播
        //判断i值是否小于0
        if(i<0){
            i=5;
        }
        show();
        showTime()
        i--;
    });
   //向右点击事件
    $(".btn2").on("click",function () {
        clearInterval(timer);//停止轮播
        //判断i值是否小于0
        if(i==5){
            i=0;
        }
        show();
        showTime();
        i++;
    });




});

//处理函数
function show(){
    $("img.ig").eq(i).fadeIn(300).siblings().fadeOut(300);
    $("div.tab").eq(i).addClass("bg").siblings().removeClass("bg");
}
//设置定时器
function showTime() {
   timer = setInterval(function () {
        i++;
        if(i==5){
            i=0;
        }
        show();
    },4000);
}
