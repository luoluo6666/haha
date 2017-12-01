/**
 * Created by Administrator on 2017/11/21.
 */

function get(){
     var Num = document.getElementById("import").value;
    var mask = document.getElementById("mask");
    var login = document.getElementById("login");
    var close_login=document.getElementById("close_login");

    if(Num>=4&&Num<=18) {
            location.href='js-3-Check the status.html';
    }
    else{                          
        mask.style.display="block";       //弹出模态框，提示请输入正确的玩家数量
        login.style.display="block";
        close_login.onclick=function(){    //点击确定或取消，模态框隐藏
            mask.style.display="none";
            login.style.display="none";
        };
    }
}

// 分出杀手和平民各有多少人
function allot() {
    var Num = document.getElementById("import").value;
    var b = document.getElementById("killer");
    var c = document.getElementById("people");
    if(Num>=4&&Num<=18){
        document.getElementById("killer").innerHTML= Math.floor(Num/4);
        b.innerHTML = Math.floor(Num/4);
        c.innerHTML = Num-b.innerHTML;
    }
    else {
        b.innerHTML = "";
        c.innerHTML = "";
    }
}

// 随机分配平民杀手
var num=document.getElementById("num");
num.onclick=function () {
    var Num = document.getElementById("import").value;
    var KillerNum= Math.floor(Num/4);//杀手数量
    var TotalArr = [];
    var k = [];
    for(var n=0;n<KillerNum;n++){
        TotalArr[n]="杀手"
    }
    for(n=KillerNum;n<Num;n++){
        TotalArr[n]="平民"
    }
    TotalArr.sort(function (){return 0.5 - Math.random() });//数组乱序
    for (var i = 0; i < Num; i++) {
        var m = i+1;
        k[i] = m +"号"+TotalArr[i];
    }
    document.getElementById("per").innerHTML = k;    //输出杀手平民分配情况

    s = JSON.stringify(TotalArr);  //数组转换成字符串
    console.log(TotalArr);
     //存入
    sessionStorage.TotalArr = s;
   
};


