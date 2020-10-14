// 多个图形加载数据渲染,函数:id和数据名必须一样
let ERdata = arr=>arr.forEach(item => {echarts.init(document.getElementById(item.id)).setOption(item.data)});