/**
 * Created by baijunfeng on 17/6/19.
 */
window.onload = init;

function init() {
    // alert("in")
    $(document).ready(function() {
        //获取url携带的参数
        var urlParam = new Object();
        urlParam = getUrlParam();

        //根据url参数获取相关json文件数据
        var url = "../json/literature/" + urlParam["index"] + ".json";
        // alert(url)
        $.getJSON(url, function (data) {
            var dataObj = eval(data);
            // alert(stringify(dataObj.title))
            var title = stringify(dataObj.title);
            document.getElementById('title').innerHTML = title;
            var author = stringify(dataObj.author);
            document.getElementById('author').innerHTML = author;
            var content = return2Br(stringify(dataObj.content));
            document.getElementById('content').innerHTML = content;
            var annotation = return2Br(stringify(dataObj.annotation));
            document.getElementById('annotation').innerHTML = annotation;
        })
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

function replaceEnter(string) {
    return string.replace(/\n/g, '/n/r');
}

function return2Br(str) {
    return str.replace(/(\\r)?\\n/g,"<br>");
}

function stringify(string) {
    return deleteQuotation(JSON.stringify(string));
}

function deleteQuotation(s) {
    return s.replace(/\"/g, "");
}