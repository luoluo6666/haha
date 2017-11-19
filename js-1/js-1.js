// /**
//  * Created by Administrator on 2017/11/16.
// //  */
// function start() {
//         //原数组
//         var arr = [0,1,2,3,4,5,6,7,8];
//         //输出数组
//         var out = [];
// // 输出不重复的三个格子
//         while(out.length < 3) {
//             var temp = (Math.random()*arr.length) ;
//             out.push(arr.splice(temp,1));
//         }
// // 为格子添加随机颜色
//         var choose_num = document.getElementsByClassName("box") ;
//         for (var i=0;i<3;i++){
//             choose_num[out[i]].style.backgroundColor = bg1();
//         }
// // 获取随机颜色
//         function bg1(){
//             var r=Math.floor(Math.random()*256);
//             var g=Math.floor(Math.random()*256);
//             var b=Math.floor(Math.random()*256);
//             return "rgb("+r+','+g+','+b+")";
//         }
//         for (var j = 0; j < arr.length; j++) {
//             choose_num[arr[j]].style.backgroundColor = "orange";
//         }
//
//     clearInterval(window.myVar);
//     window.myVar = setInterval(function () { start() }, 1000);
// }
// function end() {
//     clearInterval(window.myVar);                                                                    //停止变色并重置颜色
//     var choose_num = document.getElementsByClassName("box");            //进行DOM节点控制
//     var arr = [0,1,2,3,4,5,6,7,8];
//     for (var x = 0; x < arr.length; x++) {
//         choose_num[arr[x]].style.backgroundColor = "orange";
//     }
// }

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
