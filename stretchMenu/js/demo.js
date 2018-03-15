/* 
*Created by fengyang on 2018/3/13
**/
$(function () {
   //item a对象点击事件
   $("li.item a").on("click",function () {
     $(this).next(".uitem").slideToggle();
       //$(this).parent().siblings().find("ul.uitem").slideUp();
       var index = $(".uitem").index($(this).next());//获取ul.uitem的索引位置
       $(".uitem").not(":eq("+index+")").slideUp();
   }); 
});
