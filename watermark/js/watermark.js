/* 
*Created by fengyang on 2018/3/20
**/
+function($){
    $.extend({
        addWaterMark: function (height) {
            // var body = document.body, html =
            // document.documentElement;
            // var height = Math.max( body.scrollHeight,
            // body.offsetHeight,
            // html.clientHeight, html.scrollHeight, html.offsetHeight
            // );
            $(".transparentbox p").html(" 水印测试");
            $.multiplyNode(document.querySelector('.transparentbox'),
                Math.ceil(height / 140), true);
        },
        multiplyNode: function (node, count, deep) {
            // 水印函数
            for (var i = 0, copy; i < count + 1; i++) {
                copy = node.cloneNode(deep);
                node.parentNode.insertBefore(copy, node);
            }
        }
    })
}(jQuery);

