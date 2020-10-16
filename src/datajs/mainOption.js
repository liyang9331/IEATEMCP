// 1.区域学校数量
let RegionalSchoolsEchart = {
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
            data: RegionalSchools.Xaxis,
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
            max: RegionalSchools.max,
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
            name: '高中',
            type: 'bar',
            stack: '1',
            data: RegionalSchools.hdSchool,
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            },
            barWidth: 30, //图形宽度
            // barGap:'10%',
            barCategoryGap: '10%',
        },
        {
            name: '初中',
            type: 'bar',
            stack: '1',
            data: RegionalSchools.mdSchool,
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        },
        {
            name: '小学',
            type: 'bar',
            stack: '1',
            data: RegionalSchools.smSchool,
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        }
    ]
};
// 2.区域教师数量
let RegionalTeachers = {
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
            data: teacher.Xaxis,
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
            max: teacher.max,
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
            data: teacher.hdSchool,
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
            data: teacher.mdSchool,
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
            data: teacher.smSchool,
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        }
    ]
};
// 3.日活跃老师总人数
let RegionalTeachersLine = {
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
        data: active.Xaxis,
        axisLine: {
            lineStyle: {
                color: "#87d9ff"
            }
        },
    },
    yAxis: {
        min:0,
        max:active.max,
        splitNumber:5,
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
        axisTick: {
            "show": false   //去掉x轴刻度线
        },
    },
    series: [{
        data: active.count,
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
                lineStyle: {
                    width: 2, //折线宽度

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
// 4.区域学生总人数
let RegionalStudent = {
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
// 饼图
// 5.区域年级学生总人数
let StudentPieChart = {
    color: ["#38d2ff", "#72ff1d", "#ffad33"],
    grid: {
        top: "10px",
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    tooltip: {
        show: false, // 关闭鼠标移上去后显示浮框信息
        // trigger: 'item',
        // confine: true
    },
    legend: {
        selectedMode: false, // 取消标题点击后事件-这里显示和隐藏指定项
        orient: 'vertical',
        left: 10,
        data: []
    },
    graphic: [{
        type: 'text',
        left: 'center',
        top: '40%',
        style: {
            text: '',
            textAlign: 'center',
            fill: '#FEB045',
            fontSize: 24
        }
    }],
    legend: {
        show: false
    },
    series: [
        {
            name: '人数',
            type: 'pie',
            radius: ['20%', '60%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                normal: {
                    formatter: '{c}\n{d}%',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 12
                    }
                }
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            data: [
                { name: "高中", value: 600 },
                { name: "七八九年级", value: 310 },
                { name: "一至六年级", value: 800 }
            ],
            itemStyle: {
                normal: {
                    label: {        //此处为指示线文字
                        show: true,
                        position: 'outside', //标签的位置 inside:扇区外部
                        textStyle: {
                            fontWeight: 200,
                            fontSize: 10    //文字的字体大小
                        },
                        formatter: function (p) {   //指示线对应文字
                            let data = p.data;
                            return data;
                        }
                    },
                    labelLine: {    //指示线状态
                        show: true,
                        smooth: 0.2,
                        length: 3
                    }
                }
            },
        }
    ]
}
// 6.区域年级学生优秀人数
let ExcellentStudentPieChart = {
    color: ["#38d2ff", "#72ff1d", "#ffad33"],
    grid: {
        top: "10px",
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    tooltip: {
        show: false, // 关闭鼠标移上去后显示浮框信息
        // trigger: 'item',
        // confine: true
    },
    legend: {
        selectedMode: false, // 取消标题点击后事件-这里显示和隐藏指定项
        orient: 'vertical',
        left: 10,
        data: []
    },
    graphic: [{
        type: 'text',
        left: 'center',
        top: '40%',
        style: {
            text: '',
            textAlign: 'center',
            fill: '#FEB045',
            fontSize: 24
        }
    }],
    legend: {
        show: false
    },
    series: [
        {
            name: '人数',
            type: 'pie',
            radius: ['20%', '60%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                normal: {
                    formatter: '{c}\n{d}%',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 12
                    }
                }
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            data: [
                { name: "高中", value: 600 },
                { name: "七八九年级", value: 310 },
                { name: "一至六年级", value: 800 }
            ],
            itemStyle: {
                normal: {
                    label: {        //此处为指示线文字
                        show: true,
                        position: 'outside', //标签的位置 inside:扇区外部
                        textStyle: {
                            fontWeight: 200,
                            fontSize: 10    //文字的字体大小
                        },
                        formatter: function (p) {   //指示线对应文字
                            let data = p.data;
                            return data;
                        }
                    },
                    labelLine: {    //指示线状态
                        show: true,
                        smooth: 0.2,
                        length: 3
                    }
                }
            },
        }
    ]
}
// 7.区域资源建设
let RegionalResourcesChart = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    color: ["#00c6ff", "#60ff00", "#ffa400", "#ff5353", "#ff7cd6", "#9f95ff", "#72dcc9"],
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
            data: ['语文', '数学', '英语', '物理', '化学', '生物', '政治', '历史', '地理'],
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
            max: 200000,
            splitNumber: 6,
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
            name: '课件',
            type: 'bar',
            stack: '1',
            data: RegionalResourcesData,
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
            name: '教案',
            type: 'bar',
            stack: '1',
            data: RegionalResourcesData,
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        },
        {
            name: '学案',
            type: 'bar',
            stack: '1',
            data: RegionalResourcesData,
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        },
        {
            name: '试卷',
            type: 'bar',
            stack: '2',
            data: RegionalResourcesData,
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        },
        {
            name: '微课',
            type: 'bar',
            stack: '2',
            data: RegionalResourcesData,
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        },
        {
            name: '素材',
            type: 'bar',
            stack: '3',
            data: RegionalResourcesData,
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        },
        {
            name: '题库',
            type: 'bar',
            stack: '3',
            data: RegionalResourcesData,
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        }
    ]
}