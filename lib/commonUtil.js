/**
 * 经典的公共方法
 * Created by fengyang on 2017/8/8.  direction
 */
/*命名空间 namespace*/
var FY = {};

//鸭式辨型方式（最完美的实现javascript接口的方式）
//1.接口类 Interface实现多个接口
/*接口需要2个参数
 * 参数1：接口的名称 string
 * 参数2：接口方法的集合（Array）
 * */
FY.Interface = function(name,methods){
    //判断接口的参数个数
    if(arguments.length!=2){
        throw new Error("instance required 2 param");
    }
    this.name = name;
    this.methods = [];//内置1个空数组对象，接收参数methods的方法名称
    for(var i= 0,len = methods.length;i<len;i++){
        if(typeof methods[i]!=='string'){
            //不是string类型抛出一个异常
            throw new Error("the Instance method name must be a string!");
        }
        this.methods.push(methods[i]);
    }

};

//2.检验接口里的方法
//如果检验成功，不做任何操作，如果有不通过的，抛出一个异常
//这个方法的主要目的就是监测方法的
FY.Interface.ensureImplements = function (object) {
    //首先判断参数的个数是不是有2个参数
    if(arguments.length<2){
        throw new Error("Interface.ensureImplements method constructor must be >=2");
    }

    //处理接口
    for(var i= 1,len = arguments.length;i<len;i++){
        var instanceInterface = arguments[i];
        if(instanceInterface.constructor!==FY.Interface){
            //检验接口的名称
            throw new Error('the argument constructor not be Interface Class');
        }
        //循环接口实例对象里面的每一个方法
        for(var j=0;j<instanceInterface.methods.length;j++){
            //用一个临时的变量接收方法的名称（注意是字符串）
            var methodName = instanceInterface.methods[j];
            //判断接口实现类CompositeImpl是不是有这个方法，并且方法是否为函数
            if(!object[methodName] || typeof object[methodName]!=='function'){
                throw new Error("the '"+methodName+"' method is not found");
            }

        }

    }


};
/*鸭式辨型方法结束*/


/*
* @extend继承的实现
* */
//实现方法
 FY.extend = function(sup,sub){
    //sup超类，sub子类
    //目的：实现只继承父类的原型对象
    var F = new Function();//1.创建一个空函数,目的是进行中转
    F.prototype = sup.prototype;//2.实现空函数的原型对象和超类的原型对象转换
    sub.prototype = new F(); //3.原型继承（F是空模板，所以没有实现继承模板对象）
    sub.prototype.constructor = sub;//4.还原子类的构造器
    //保存一下父类的原型对象：一方面方便解耦，一方面获得父类的原型对象
    sub.supClass = sup.prototype;//5.自定义一个子类的静态属性，保存父类的原型对象
    //判断父类的原型对象的构造器（加保险）
    if(sup.prototype.constructor==Object.prototype.constructor){
        //还原父类构造器
        sup.prototype.constructor = sup;
    }

}

