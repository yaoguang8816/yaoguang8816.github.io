/**
 * Created by baijunfeng on 17/5/27.
 */

window.onload = init;

function init() {
    alert("init!")
    for (var i=0; i<25; i++) {
        var newNum = Math.floor(Math.random() * 75) + 1;
        document.getElementById("square" + i).innerHTML = newNum;
    }
}

document.getElementById('test').onclick = clickTest;

function clickTest() {
    alert("clickTest!")
}
