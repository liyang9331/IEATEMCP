// 多个图形加载数据渲染,函数:id和数据名必须一样
let ERdata = arr=>arr.forEach(item => {echarts.init(document.getElementById(item.id)).setOption(item.data)});
function readcookie(name) {
    var cookievalue = "";
    var search = name + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexof(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexof(";", offset);
            if (end == -1) end = document.cookie.length;
            cookievalue = unescape(document.cookie.substring(offset, end))
        }
    }
    return cookievalue;
}
// 开发环境跨域请求
let api = '/api'