/**
 * Created by baijunfeng on 17/6/16.
 */

window.onload = init()

function init() {
    $(document).ready(function() {
        // //获取url携带的参数
        // var urlParam = new Object();
        // urlParam = getUrlParam();
        // //根据url参数获取相关json文件数据
        var url = "../json/author_list.json";
        $.getJSON(url, function (data) {
            var dataObj = eval(data);
            initTable(dataObj)
        })

        // initTable()
    })
}

function initTable(dataObj) {
    for (var i = 0; i < dataObj.data.length; i++) {
        var id = stringify(dataObj.data[i].id);
        // alert(id)
        // alert(id);
        // alert(id.toString().charAt(1));
        // var noAuthor = false;
        // var dynastyId =
        // if (id.toString().substr(2, 4) == "999") {
        //     noAuthor = true;
        // }
        switch (id.toString().charAt(0)) {
            case "0":
                insertRow("xianqin", dataObj.data[i]);
                break;
            case "1":
                insertRow("lianghan", dataObj.data[i]);
                break;
            case "2":
                insertRow("liangjin", dataObj.data[i]);
                break;
            case "3":
                insertRow("suitang", dataObj.data[i]);
                break;
            case "4":
                insertRow("wudai", dataObj.data[i]);
                break;
            case "5":
                insertRow("songyuan", dataObj.data[i]);
                break;
            case "6":
                insertRow("mingqing", dataObj.data[i]);
                break;
            case "7":
                insertRow("jinxiandai", dataObj.data[i]);
                break;
            case "9":
                insertRow("qita", dataObj.data[i]);
                break;
        }

    }
    // switch (JSON.stringify(dataObj.data[i].index)) {
    //     case 5
    // }
    // // alert("in")
    // var t = document.getElementById('lianghan');
    // alert(t)
    // // $.t.append("<tr><td><input id=\"sd\" type=\"checkbox\" /></td><td><input type=\"text\" /></td></tr>");
    // // var t = document.getElementById('lianghan');
    // // var r = document.createElement('tr');
    // var r = t.insertRow();
    // var c = r.insertCell();
    // c.innerHTML = "0001";
    // var c2 = r.insertCell();
    // c2.innerHTML = "苏轼";
    // var c3 = r.insertCell();
    // c3.innerHTML = "sushi";
    //
    // // t.setAttribute('border', '1');
    // t.appendChild(r);

    // var t = document.createElement('table');
    // for (var i = 0; i < dataObj.data.length; i++) {
    //     var obj = JSON.stringify(dataObj.data[i]);
    //
    //     var r = t.insertRow();
    //     var c = r.insertCell();
    //     c.innerHTML = JSON.stringify(dataObj.data[i].id);
    //     var c2 = r.insertCell();
    //     c2.innerHTML = JSON.stringify(dataObj.data[i].title);
    //     var c3 = r.insertCell();
    //     c3.innerHTML = JSON.stringify(dataObj.data[i].abbr);
    // }
    //
    // document.getElementById('lianghan1').appendChild(t);
    // t.setAttribute('border', '1');
}

function insertRow(elementId, data) {
    var t = document.getElementById(elementId);
    var r = t.insertRow();
    var c = r.insertCell();
    c.innerHTML = stringify(data.id);
    var c2 = r.insertCell();
    // c2.innerHTML = JSON.stringify(data.title);
    var a=document.createElement('a');
    a.href = "shi.html?index=" + stringify(data.index) + "&id=" + stringify(data.id);
    a.innerHTML = stringify(data.title);
    c2.appendChild(a);
    var c3 = r.insertCell();
    c3.innerHTML = stringify(data.index);
}

function createAElement(url){
    var a=document.createElement("a");
    a.href=url;
    // a.innerHTML=text;
    a.style.color="orange";
    return a;
}

function stringify(string) {
    return deleteQuotation(JSON.stringify(string));
}

function deleteQuotation(s) {
    return s.replace(/\"/g, "");
}
