/**
 * Created by Administrator on 2017/11/30.
 */

s = sessionStorage.TotalArr;
//重新转换为数组
TotalArr = JSON.parse(s);
console.log(TotalArr);
console.log(TotalArr.length);

var container=[];
var identity;
var i;
for (i = 0; i < TotalArr.length; i++) {
    identity = '<div class="option">'+ '<div class="people">' + TotalArr[i] +
        '</div>' +'<div class="number"> ' + (i + 1) + "号" + '</div>'+
        '<img src="../css-7/img7/coin3.png" class="knife"/>'+'</div>' ;

    container.push(identity);

}

document.getElementById("diary").innerHTML=container.join('');