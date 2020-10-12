
// 模拟数据

var RegionalResources = [
    { "name": "课件", "number": "120,308", "MonthlyAddition": "1,456", "color": "#00c6ff" },
    { "name": "教案", "number": "120,308", "MonthlyAddition": "1,456", "color": "#60ff00" },
    { "name": "学案", "number": "120,308", "MonthlyAddition": "1,456", "color": "#ce7f0d" },
    { "name": "试卷", "number": "120,308", "MonthlyAddition": "1,456", "color": "#ce4750" },
    { "name": "微课", "number": "120,308", "MonthlyAddition": "1,456", "color": "#ff7cd6" },
    { "name": "素材", "number": "120,308", "MonthlyAddition": "1,456", "color": "#9f95ff" },
    { "name": "题库", "number": "120,308", "MonthlyAddition": "1,456", "color": "#264d66" },
]
// 区域活跃值最高学校TOP10
var SchoolsTop10 = [
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "ActiveValue": 99.9, "Ranking": 1 },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "ActiveValue": 98.9, "Ranking": 2 },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "ActiveValue": 97.9, "Ranking": 3 },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "ActiveValue": 96.9, "Ranking": 4 },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "ActiveValue": 95.9, "Ranking": 5 },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "ActiveValue": 94.9, "Ranking": 6 },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "ActiveValue": 93.9, "Ranking": 7 },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "ActiveValue": 94.9, "Ranking": 8 },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "ActiveValue": 92.9, "Ranking": 9 },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "ActiveValue": 91.9, "Ranking": 10 },
]
var StarClass = [
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "grade": "七年级", "subject": "数学", "DemonstrationClass": "孔乙己", "StartLevel": new Array(1) },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "grade": "七年级", "subject": "数学", "DemonstrationClass": "孔乙己", "StartLevel": new Array(2) },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "grade": "七年级", "subject": "数学", "DemonstrationClass": "孔乙己", "StartLevel": new Array(3) },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "grade": "七年级", "subject": "数学", "DemonstrationClass": "孔乙己", "StartLevel": new Array(4) },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "grade": "七年级", "subject": "数学", "DemonstrationClass": "孔乙己", "StartLevel": new Array(5) },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "grade": "七年级", "subject": "数学", "DemonstrationClass": "孔乙己", "StartLevel": new Array(5) },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "grade": "七年级", "subject": "数学", "DemonstrationClass": "孔乙己", "StartLevel": new Array(5) },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "grade": "七年级", "subject": "数学", "DemonstrationClass": "孔乙己", "StartLevel": new Array(5) },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "grade": "七年级", "subject": "数学", "DemonstrationClass": "孔乙己", "StartLevel": new Array(5) },
    { "SchoolName": "清华附属中学", "SchoolAttribute": "高中", "grade": "七年级", "subject": "数学", "DemonstrationClass": "孔乙己", "StartLevel": new Array(5) },
]
var SchoolsNumber = [
    {"name":"教师总人数","number":250},
    {"name":"优秀活跃人数","number":250},
    {"name":"优秀率","number":250},
    {"name":"学生总人数","number":250},
    {"name":"班级数","number":250},
]




var Tdate = function () {
    var myDate = new Date();
    // myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
    var Day = function () {
        switch (myDate.getDay()) {
            case 0: return "星期日"; break;
            case 1: return "星期一"; break;
            case 2: return "星期二"; break;
            case 3: return "星期三"; break;
            case 4: return "星期四"; break;
            case 5: return "星期五"; break;
            case 6: return "星期六"; break;
        }
    }
    return myDate.getFullYear() + "年" + myDate.getMonth() + "月" + myDate.getDate() + "日" + "  " + Day();
}
var vue = new Vue({
    el: "#app",
    data: {
        RegionalResources: RegionalResources,
        SchoolsTop10: SchoolsTop10,
        Tdate: Tdate(),
        StarClass: StarClass,
        SchoolsNumber:SchoolsNumber,
        model: {
            total: 300,//总页数
            size: 5,//每页显示条目个数不传默认10
            page: 1,//当前页码
        }
    },
    methods: {
        //页码切换执行方法
        pageFn(val) {
            this.model.page = val;
            console.log(val);
        }
        // axios请求
        // total：总页数 
        // size：每页显示条目个数不传默认10 
        // page：设置默认页码，默认1 
        // changge：页码切换方法触发，比如：传入pageFn方法接收page页码
    },
    created() {
        axios({
            method: "get",
            baseURL: "http://cas.dearedu.com/region/cityTeacherCount?province_id=370000"
        }).then(function (response) {
            console.log(response)
            //json格式化
            var obj = str.parseJSON(response.data);
        })
            .catch(function (error) {
                console.log(error)
            })
        console.log(11111)
    },
    beforeRouter() {

    },

    mounted() {

    }
})

// 四级联动
addressInit('area', 'cmbProvince', 'cmbCity', 'cmbArea', '西北地区', '北京', '市辖区', '东城区');

// 学校学校数量
var RegionalSchools = {
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
        axisTick: {
            "show": false   //去掉x轴刻度线
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

// 饼图
// 区域年级学生总人数
var StudentPieChart = {
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
            hoverAnimation:false,
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
                            var data = p.data;
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
// 区域年级学生优秀人数
var ExcellentStudentPieChart = {
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
            hoverAnimation:false,
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
                            var data = p.data;
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

// 区域资源建设
var RegionalResourcesData = [10000, 11000, 12000, 13000, 14000, 15000, 16000, 14000, 10000]
var RegionalResourcesChart = {
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

// 基于准备好的dom，初始化echarts实例
var op1 = echarts.init(document.getElementById('RegionalTeachersChart'));
var op2 = echarts.init(document.getElementById('RegionalTeachersLine'));
var op3 = echarts.init(document.getElementById('RegionalStudentChart'));
var op4 = echarts.init(document.getElementById('StudentPieChartChart-left'));
var op5 = echarts.init(document.getElementById('StudentPieChartChart-right'));
var op6 = echarts.init(document.getElementById('RegionalResourcesChart'));
var op7 = echarts.init(document.getElementById('RegionalSchoolsChart'));
// 使用刚指定的配置项和数据显示图表。
op1.setOption(RegionalTeachers);
op2.setOption(RegionalTeachersLine);
op3.setOption(RegionalStudent);
op4.setOption(StudentPieChart);
op5.setOption(ExcellentStudentPieChart);
op6.setOption(RegionalResourcesChart);
op7.setOption(RegionalSchools);

$("#RegionalTeachersDom,#RegionalTeachersLineDom,#RegionalStudentDom,#RegionalSchoolsDom,#SchoolsTop10").niceScroll({
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

function tigert(str){
    window.location = str+"";
}