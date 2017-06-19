/**
 * Created by baijunfeng on 17/6/16.
 */

window.onload = init;

function init() {
    $(document).ready(function() {
        //获取url携带的参数
        var urlParam = new Object();
        urlParam = getUrlParam();

        var types = new Array();
        types[0] = "shi";
        types[1] = "ci";
        types[2] = "guwen";
        types[3] = "gutishi";

        // var preType = urlParam["id"].toString();

        $.ajaxSettings.async = false;
        for (var i = 0; i < types.length; i++) {
            var preType = urlParam["id"].toString();
            preType = preType + i;

            //根据url参数获取相关json文件数据
            var url = "../json/" + types[i] + "/" + urlParam["index"] + ".json";
            $.getJSON(url, function (data) {
                var dataObj = eval(data);
                //类型前缀，包括朝代、作者、作品类型
                createTable(dataObj, preType);
            })
        }
        $.ajaxSettings.async = true;
    })
}

function getUrlParam() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function createTable(dataObj, preType) {
    // var obj = stringify(dataObj.data)
    // alert(preType)
    var t = document.createElement('table');
    for (var i = 0; i < dataObj.data.length; i++) {
        var r = t.insertRow();
        var c = r.insertCell();
        c.innerHTML = stringify(dataObj.data[i].id);
        var c2 = r.insertCell();
        var a=document.createElement('a');
        a.href = "literatureDetail.html?index=" + preType + stringify(dataObj.data[i].id);
        a.innerHTML = stringify(dataObj.data[i].title);
        c2.appendChild(a);
        var c3 = r.insertCell();
        c3.innerHTML = stringify(dataObj.data[i].abbr);
    }

    document.getElementById('table1').appendChild(t);
    t.setAttribute('border', '1');
}

function stringify(string) {
    return deleteQuotation(JSON.stringify(string));
}

function deleteQuotation(s) {
    return s.replace(/\"/g, "");
}