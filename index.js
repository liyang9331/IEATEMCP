

// 学校教师数量
var RegionalTeachers = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    color: ["#38d2ff", "#72ff1d", "#ffad33"],
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    },
    grid: {
        top: "10px",
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            // 网格样式
            // splitLine: {
            //     show: true,
            //     lineStyle: {
            //         color: ['red'],
            //         width: 1,
            //         type: 'solid'
            //     }
            // },
            interval: 1,
            // boundaryGap:false
            axisTick: {    // 坐标轴 刻度
                show: false,  // 是否显示
                inside: true,  // 是否朝内
                length: 1,     // 长度
                lineStyle: {   // 默认取轴线的样式
                    width: 1,
                    type: 'solid'
                }
            },
            axisLabel: {    // 坐标轴标签
                show: true,  // 是否显示
                inside: false, // 是否朝内
                rotate: 0, // 旋转角度
                margin: 5, // 刻度标签与轴线之间的距离
            }
        }
    ],
    yAxis: [
        {
            min: 0,
            max: 1400,
            splitNumber: 7,
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            //网格样式
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#022a54'],
                    width: 1,
                    type: 'solid'
                }
            },
        }
    ],
    series: [
        {
            name: '高中教师',
            type: 'bar',
            stack: '1',
            data: [320, 332, 301, 334, 390, 330, 320],
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            },
            barWidth: 40, //图形宽度
            // barGap:'10%',
            barCategoryGap: '10%',
        },
        {
            name: '初中教师',
            type: 'bar',
            stack: '1',
            data: [120, 132, 101, 134, 90, 230, 210],
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        },
        {
            name: '小学教师',
            type: 'bar',
            stack: '1',
            data: [220, 182, 191, 234, 290, 330, 310],
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        }
    ]
};

// 日活跃老师总人数
var RegionalTeachersLine = {
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
    //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //     }
    // },
    // color:["#38d2ff","#72ff1d","#ffad33"],
    // legend: {
    //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    // },
    // grid: {
    //     top: "10px",
    //     left: '0',
    //     right: '0',
    //     bottom: '15px',
    //     containLabel: true
    // },
    // xAxis: [
    //     {
    //         type: 'category',
    //         data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    //         axisLine: {
    //             lineStyle: {
    //                 color: "#87d9ff"
    //             }
    //         },
    //         //网格样式
    //         // splitLine: {
    //         //     show: true,
    //         //     lineStyle: {
    //         //         color: ['red'],
    //         //         width: 1,
    //         //         type: 'solid'
    //         //     }
    //         // },
    //         interval: 1,
    //         // boundaryGap:false
    //         axisTick: {    // 坐标轴 刻度
    //             show: false,  // 是否显示
    //             inside: true,  // 是否朝内
    //             length: 1,     // 长度
    //             lineStyle: {   // 默认取轴线的样式
    //                 width: 1,
    //                 type: 'solid'
    //             }
    //         },
    //         axisLabel: {    // 坐标轴标签
    //             show: true,  // 是否显示
    //             inside: false, // 是否朝内
    //             rotate: 0, // 旋转角度
    //             margin: 5, // 刻度标签与轴线之间的距离
    //         }
    //     }
    // ],
    // yAxis: [
    //     {
    //         min: 0,
    //         max: 1400,
    //         splitNumber: 7,
    //         type: 'value',
    //         axisLine: {
    //             lineStyle: {
    //                 color: "#87d9ff"
    //             }
    //         },
    //         //网格样式
    //         splitLine: {
    //             show: true,
    //             lineStyle: {
    //                 color: ['#022a54'],
    //                 width: 1,
    //                 type: 'solid'
    //             }
    //         },
    //     }
    // ],
    // series: [
    //     {
    //         name: '高中教师',
    //         type: 'line',
    //         stack: '1',
    //         data: [320, 332, 301, 334, 390, 330, 320],
    //         label: {
    //             normal: {
    //                 show: true //在图上显示文字
    //             }
    //         },
    //         barWidth: 40, //图形宽度
    //         // barGap:'10%',
    //         barCategoryGap: '10%',
    //     }
    // ]
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: "10px",
        left: '0',
        right: '0',
        bottom: '15px',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: "#87d9ff"
            }
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "#87d9ff"
            }
        },
        //网格样式
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#022a54'],
                width: 3,
                type: 'solid'
            }
        },
        axisTick:{       
            "show":false   //去掉x轴刻度线
        },
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        // areaStyle: {},
        // 设置折线上圆点大小
        symbolSize: 10,
        barWidth: 40, //图形宽度
        barCategoryGap: '10%',
        areaStyle: {
            color: '#0a3d6a'    //折线区域的背景颜色
        },
        itemStyle: {
            normal: {
                color: '#fff',
                fontSize: 14,
                lineStyle:{
                    width:2, //折线宽度

                  //折线颜色渐变
                    color: "#00c6ff"
                }
            },
            emphasis: {   //鼠标经过时折点小圆圈样式
            borderColor: 'rgba(0,196,132,0.2)',
            borderWidth: 10
            }
        },
    }]
};

// 区域学生总人数
var RegionalStudent = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    color: ["#38d2ff", "#72ff1d", "#ffad33"],
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    },
    grid: {
        top: "10px",
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            // 网格样式
            // splitLine: {
            //     show: true,
            //     lineStyle: {
            //         color: ['red'],
            //         width: 1,
            //         type: 'solid'
            //     }
            // },
            interval: 1,
            // boundaryGap:false
            axisTick: {    // 坐标轴 刻度
                show: false,  // 是否显示
                inside: true,  // 是否朝内
                length: 1,     // 长度
                lineStyle: {   // 默认取轴线的样式
                    width: 1,
                    type: 'solid'
                }
            },
            axisLabel: {    // 坐标轴标签
                show: true,  // 是否显示
                inside: false, // 是否朝内
                rotate: 0, // 旋转角度
                margin: 5, // 刻度标签与轴线之间的距离
            }
        }
    ],
    yAxis: [
        {
            min: 0,
            max: 6000,
            splitNumber: 4,
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            //网格样式
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#022a54'],
                    width: 1,
                    type: 'solid'
                }
            },
        }
    ],
    series: [
        {
            name: '高中教师',
            type: 'bar',
            stack: '1',
            data: [320, 332, 301, 334, 390, 330, 320],
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            },
            barWidth: 40, //图形宽度
            // barGap:'10%',
            barCategoryGap: '10%',
        },
        {
            name: '初中教师',
            type: 'bar',
            stack: '1',
            data: [120, 132, 101, 134, 90, 230, 210],
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        },
        {
            name: '小学教师',
            type: 'bar',
            stack: '1',
            data: [220, 182, 191, 234, 290, 330, 310],
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        }
    ]
};

// 区域年级学生总人数
var StudentPieChart={
    grid: {
        top: "10px",
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        // formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
            ]
        }
    ]
}
// 区域年级学生优秀人数
var ExcellentStudentPieChart={
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
            ]
        }
    ]
}

// 基于准备好的dom，初始化echarts实例
var op1 = echarts.init(document.getElementById('RegionalTeachersChart'));
var op2 = echarts.init(document.getElementById('RegionalTeachersLine'));
var op3 = echarts.init(document.getElementById('RegionalStudentChart'));
var op4 = echarts.init(document.getElementById('StudentPieChartChart-left'));
var op5 = echarts.init(document.getElementById('StudentPieChartChart-right'));
// 使用刚指定的配置项和数据显示图表。
op1.setOption(RegionalTeachers);
op2.setOption(RegionalTeachersLine);
op3.setOption(RegionalStudent);
op4.setOption(StudentPieChart);
op5.setOption(ExcellentStudentPieChart);

$("#RegionalTeachersDom,#RegionalTeachersLineDom,#RegionalStudentDom").niceScroll({
    cursorcolor: "#54669b", // 改变滚动条颜色，使用16进制颜色值
    cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
    cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
    cursorwidth: "8px", // 滚动条的宽度，单位：像素
    cursorborder: "none", // CSS方式定义滚动条边框
    cursorborderradius: "5px", // 滚动条圆角（像素）
    zindex: "auto", // 改变滚动条的DIV的z-index值（auto或数字）
    scrollspeed: 60, // 滚动速度
    mousescrollstep: 40, // 鼠标滚轮的滚动速度 (像素)
    touchbehavior: false, // 激活拖拽滚动
    hwacceleration: true, // 激活硬件加速
    boxzoom: false, // 激活放大box的内容
    dblclickzoom: true, // (仅当 boxzoom=true时有效)双击box时放大
    gesturezoom: true, // (仅 boxzoom=true 和触屏设备时有效) 激活变焦当out/in（两个手指外张或收缩）
    grabcursorenabled: true, // (仅当 touchbehavior=true) 显示“抓住”图标display "grab" icon
    autohidemode: false, // 隐藏滚动条的方式, 可用的值如下:
    /**
      true  无滚动时隐藏
      "cursor"  隐藏
      false 不隐藏,
      "leave" 仅在指针离开内容时隐藏
      "hidden" 一直隐藏
      "scroll" 仅在滚动时显示
    **/
    background: "#102153", // 轨道的背景颜色
    iframeautoresize: true, // 在加载事件时自动重置iframe大小
    cursorminheight: 32, // 设置滚动条的最小高度 (像素)
    preservenativescrolling: true, // 你可以用鼠标滚动可滚动区域的滚动条和增加鼠标滚轮事件
    railoffset: false, // 可以使用top/left来修正位置
    bouncescroll: false, // (only hw accell) 启用滚动跳跃的内容移动
    spacebarenabled: true, // 当按下空格时使页面向下滚动
    railpadding: { top: 0, right: 0, left: 0, bottom: 0 }, // 设置轨道的内间距
    disableoutline: true, // 当选中一个使用nicescroll的div时，chrome浏览器中禁用outline
    horizrailenabled: true, // nicescroll可以管理水平滚动
    railalign: "right", // 对齐垂直轨道
    railvalign: "bottom", // 对齐水平轨道
    enabletranslate3d: true, // nicescroll 可以使用CSS变型来滚动内容
    enablemousewheel: true, // nicescroll可以管理鼠标滚轮事件
    enablekeyboard: true, // nicescroll可以管理键盘事件
    smoothscroll: true, // ease动画滚动
    sensitiverail: true, // 单击轨道产生滚动
    enablemouselockapi: true, // 可以用鼠标锁定API标题 (类似对象拖动)
    cursorfixedheight: false, // 修正光标的高度（像素）
    hidecursordelay: 400, // 设置滚动条淡出的延迟时间（毫秒）
    directionlockdeadzone: 6, // 设定死区，为激活方向锁定（像素）
    nativeparentscrolling: true, // 检测内容底部便于让父级滚动
    enablescrollonselection: true, // 当选择文本时激活内容自动滚动
    cursordragspeed: 0.3, // 设置拖拽的速度
    rtlmode: "auto", // DIV的水平滚动从左边开始
    cursordragontouch: false, // 使用触屏模式来实现拖拽
    oneaxismousemode: "auto", // 当只有水平滚动时可以用鼠标滚轮来滚动，如果设为false则不支持水平滚动，如果设为auto支持双轴滚动
    scriptpath: "", // 为boxmode图片自定义路径 ("" => same script path)
    preventmultitouchscrolling: true // 防止多触点事件引发滚动
});
// 容器内高度，宽度发生变化后重新刷新滚动条
// mainNav：jquery对象
$("#RegionalTeachersDom").getNiceScroll().resize()