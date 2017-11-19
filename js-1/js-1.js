// /**
//  * Created by Administrator on 2017/11/16.
// //  */

function start() {
    // 选取随机数
    function GetRandomNum(Min,Max)
    {
        var Range = Max - Min;
        var Rand = Math.random();
        return(Min + Math.round(Rand * Range));
    }
    // 在0-8里选出三个不同的数
    for (i=0;i<9;i++){
        var num1 = GetRandomNum(0,8);
        var num2 = GetRandomNum(0,8);
        var num3 = GetRandomNum(0,8);
        if (num1!==num2&&num2!=num3&&num1!==num3){
        break;
        }
    }
    // 获取dom节点
    var choose=document.getElementsByClassName("box");
    for (var j=0;j<choose.length;j++){
    choose[j].style.background="orange";
}
    // 随机颜色
    function bg1(){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        return "rgb("+r+','+g+','+b+")";
    }
    // 给随机格子赋随机颜色
        choose[num1].style.backgroundColor = bg1();
        choose[num2].style.backgroundColor = bg1();
        choose[num3].style.backgroundColor = bg1();

    clearInterval(window.myVar);
    window.myVar = setInterval(function () { start() }, 1000);
}

function end() {
    clearInterval(window.myVar);                                                                    //停止变色并重置颜色
     var choose = document.getElementsByClassName("box");
    for (var x = 0; x <choose.length; x++) {
        choose[x].style.backgroundColor = "orange";
    }
}
