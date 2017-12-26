/* 
*Created by fengyang on 2017/11/30
**/
$(function () {
   //offset是表示在jq中获取方位的
    var $bird = $("#bird");//获取小鸟对象
    var pos = $bird.offset();//获取方位 top left
    console.log(pos);
    var birdSize = {width:$bird.width(),height:$bird.height()};//获取小鸟的宽度和高度
    var speed = 10;//飞行的速度
    var keyCode = 39;
    //按下左右键盘事件
    $(document).on("keydown",function (event) {
        var key = event.keyCode;//获取到按下键的key
        if(key!=keyCode){
            //样式处理
            $("#bird").removeClass().addClass("dir_"+key);
        }
        keyCode = key;
        switch (key){
            case 37:
                //向左
                pos.left-=speed;
                if(pos.left<=-birdSize.width){
                    pos.left = $(window).width();
                }
                break;
            case 38:
                //向上
                pos.top-=speed;
                if(pos.top<=-birdSize.height){
                    pos.top = $(window).height();
                }
                break;
            case 39:
                //向右
                pos.left+=speed;
                if(pos.left>=$(window).width()){
                    pos.left = -birdSize.width;
                }
                break;
            case 40:
                //向下
                pos.top+=speed;
                if(pos.top>=$(window).height()){
                    pos.top = -birdSize.height;
                }
                break;
            default:
                //默认情况

                break;
        }

        //小鸟对象的位置要重新修改下
        $bird.offset(pos);

    })



});
