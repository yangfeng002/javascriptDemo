/* 
*Created by fengyang on 2017/12/25
**/
var iNum1;
var iNum2;
//省份为一维数组
var aProvince = ["河北","山西","湖北"];
//城市 二维数组
var aCity = [["石家庄","唐山"],["大同"],["宜昌市","襄阳市"]];
//县区三维数组
var aCountry = [[["桥西区","新华区"],["开平区","丰润区"]],[["南郊区","新荣区"]],[["兴山县","秭归县"],["襄州","襄城","樊城"]]];

$(function () {
    //添加省份内容
   $.each(aProvince,function (i,v) {
       $("#selProvince").append('<option>'+v+'</option>');
   });

    //表示选择省份的事件
    $("#selProvince").on("change",function () {
        $("#selCity").children().not(":eq(0)").remove();//清空子元素
        iNum1 = $(this).children("option:selected").index();//获取索引
        var aaCity = aCity[iNum1-1];
        $.each(aaCity,function (i,v) {
            $("#selCity").append('<option>'+v+'</option>');
        });
    });
    $("#selCity").on("change",function () {
        $("#selCountry").children().not(":eq(0)").remove();//清空子元素
        iNum2 = $(this).children("option:selected").index();//获取索引
        var aaCountry = aCountry[iNum1-1][iNum2-1];
        $.each(aaCountry,function (i,v) {
            $("#selCountry").append('<option>'+v+'</option>');
        });
    });

});
