/* 
*Created by fengyang on 2017/12/14
* 飘雪效果演示js
**/
var minSize = 5;//雪花的最小值
var maxSize = 50;//雪花的最大值
var flakeColor = "#fff";//雪花的颜色
var flakeSpeed = 200;//毫秒 间隔时间
var flake = $("<div>❄</div>").css({"position":"absolute","top":"-50px"}); // ✽、✲、✻、✼、❄、❅、❆、❊
//var flake = $("<div></div>").css({"position":"absolute","top":"-50px"}).html("<img src='images/money.jpg' width='300' />"); // 图片
$(function () {
   //页面初始化加载
    var docHeight = $(document).height();//浏览器高度
    var docWidth = $(document).width();//浏览器宽度

    //间隔一段时间执行某个事件
    setInterval(function () {
        var startPositionLeft = docWidth * Math.random();//距离左边的距离
        var startOpacity = 0.7 + Math.random()*0.3; //刚开始的时候比较大,保证透明度不大于1
        var endPositionTop = docHeight;//下降到底部的位置固定
        var endPositionLeft = docWidth * Math.random(); //下降到底部距离左侧的距离
        var durationFall = 4000+Math.random()*3000;//下降的时间范围
        var sizeFlake = minSize+maxSize*Math.random();//雪花的大小
        flake.clone().appendTo("body").css({
            "left":startPositionLeft,
            "font-size":sizeFlake,
            "opacity":startOpacity,
            "color":flakeColor
        }).animate({
            "top":endPositionTop,
            "left":endPositionLeft,
            "opacity":0.5
        },durationFall,function () {
            //回调函数
            $(this).remove();
        });
    },flakeSpeed);
});
