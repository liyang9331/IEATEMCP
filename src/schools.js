
// 模拟数据

var RegionalResources = [
    { "name": "备课", "number": "120,308","color": "#00c6ff" },
    { "name": "试卷", "number": "120,308","color": "#60ff00" },
    { "name": "微课", "number": "120,308","color": "#ce7f0d" },
    { "name": "题库", "number": "120,308","color": "#ce4750" },
]
// 
// 区域活跃值最高学校TOP10
var SchoolsTop10 = []
for(var a=0;a<20;a++){
    SchoolsTop10.push({ "name": "张大伟", "class": "语文", "uploadSus": 99.9,"miniClass":99,"work":100, "Ranking":"优" })
}
// 高三年级-试题分析 模拟数据
var StarClass = []
for(var a=0;a<10;a++){
    StarClass.push({ "name": "3月考试", "SchoolAttribute": "入学测试","PeopleNumber":200,"grade": "高三", "subject": 110, "FullMark": 10,"WrongMark":10,"difficulty":"困难" })
}

var SchoolsNumber = [
    { "name": "教师总人数", "number": 250 },
    { "name": "优秀活跃人数", "number": 250 },
    { "name": "优秀率", "number": 250 },
    { "name": "学生总人数", "number": 250 },
    { "name": "班级数", "number": 250 },
]
// 高三总备课量
var atom = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show: false,
        data: ['推送资源包', '推送资源', '发布作业','上传资源']
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
            data: ['推送资源包', '推送资源', '发布作业','上传资源'],
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
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
            max: 1500,
            splitNumber: 5,
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
            name: 'data',
            type: 'bar',
            data: [320, 400, 200,300],
            barWidth: 40, //图形宽度
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            '#38d2ff', '#88ff40', '#ffb444', '#ff766f'
                        ];
                        return colorList[params.dataIndex]
                    },
                    //以下为是否显示，显示位置和显示格式的设置了
                    label: {
                        show: true,
                        position: 'top',
                        //formatter: '{c}'
                        formatter: '{c}%'
                    }
                }
            }
        }
    ]
}
// 高三在线作业
var task = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show: false,
        data: ['教师姓名', '作业量', '完成率']
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
            data: ['教师姓名', '作业量', '完成率'],
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
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
            max: 1500,
            splitNumber: 5,
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
            name: 'data',
            type: 'bar',
            data: [320, 400, 200],
            barWidth: 40, //图形宽度
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            '#38d2ff', '#88ff40', '#ffb444', '#ff766f'
                        ];
                        return colorList[params.dataIndex]
                    },
                    //以下为是否显示，显示位置和显示格式的设置了
                    label: {
                        show: true,
                        position: 'top',
                        //formatter: '{c}'
                        formatter: '{c}%'
                    }
                }
            }
        }
    ]
}


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
        // 学校人数统计
        SchoolsNumber:[],
        
        RegionalResources: RegionalResources,
        SchoolsTop10: SchoolsTop10,
        Tdate: Tdate(),
        StarClass: StarClass,
        SchoolsNumber: SchoolsNumber,
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

// 教师优秀率柱状图
var RegionalTeachers = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show: false,
        data: ['全校', '高一', '高二', '高三']
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
            data: ['全校', '高一', '高二', '高三'],
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
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
            max: 600,
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
            name: 'data',
            type: 'bar',
            data: [320, 400, 200, 300],
            barWidth: 40, //图形宽度
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            '#38d2ff', '#88ff40', '#ffb444', '#ff766f'
                        ];
                        return colorList[params.dataIndex]
                    },
                    //以下为是否显示，显示位置和显示格式的设置了
                    label: {
                        show: true,
                        position: 'top',
                        //formatter: '{c}'
                        formatter: '{c}%'
                    }
                }
            }
        }
    ]
}
// 高三年级-考试概况
var RegionalTeachersLine = {
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
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: {
            lineStyle: {
                color: "#87d9ff"
            }
        },
    },
    yAxis: {
        min: 0,
        max: 150,
        splitNumber: 5,
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
        data: [100, 50, 60, 45, 50, 60, 50, 60, 50, 60, 70, 30],
        type: 'line',
        smooth: true,
        // areaStyle: {},
        // 设置折线上圆点大小
        symbolSize: 10,
        barWidth: 40, //图形宽度
        barCategoryGap: '10%',
        itemStyle: {
            normal: {
                color: '#fff',
                fontSize: 14,
                lineStyle: {
                    width: 2, //折线宽度

                    //折线颜色渐变
                    color: "#00c6ff"
                },
                label : {show: true}
            },
            emphasis: {   //鼠标经过时折点小圆圈样式
                borderColor: 'rgba(0,196,132,0.2)',
                borderWidth: 10
            }
        },
    }]
};

// 高三年级-考试成绩优秀率
var ExaminationResultsChart = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show: false,
        data: ['及格', '优秀']
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
            data: ['及格', '优秀'],
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
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
            name: "及格",
            min: 0,
            max: 150,
            splitNumber: 5,
            type: 'value',
            postion: 'left',
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
        },
        {
            name: "优秀",
            min: 0,
            max: 150,
            splitNumber: 5,
            type: 'value',
            postion: 'right',
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
            name: '及格',
            type: 'bar',
            data: [80, 0],
            stack: 1,
            barWidth: 40, //图形宽度
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            '#38d2ff'
                        ];
                        return colorList[params.dataIndex]
                    },
                }
            }
        },
        {
            name: '优秀',
            type: 'bar',
            stack: 2,
            data: [0, 30],
            barWidth: 40, //图形宽度
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            '#88ff40'
                        ];
                        return colorList[params.dataIndex]
                    },
                }
            }
        }
    ]
}

// 高三年级-科目考试成绩分析:双折线图
var DoubleExaminationResultsChart = {
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
        data: ['语文', '数学', '英语', '物理', '化学', '生物', '政治', '历史', '地理'],
        axisLine: {
            lineStyle: {
                color: "#87d9ff"
            }
        },
    },
    yAxis: {
        min: 0,
        max: 150,
        splitNumber: 5,
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
                width: 2,
                type: 'solid'
            }
        },
        axisTick: {
            "show": false   //去掉x轴刻度线
        },
    },
    series: [
        {
            data: [100, 50, 60, 45, 50, 60, 50, 60, 50, 60, 70, 30],
            type: 'line',
            smooth: true,
            symbolSize: 10,
            barWidth: 40, //图形宽度
            barCategoryGap: '10%',
            itemStyle: {
                normal: {
                    color: '#fff',
                    fontSize: 14,
                    lineStyle: {
                        width: 2, //折线宽度
                        //折线颜色渐变
                        color: "#3bd3ff"
                    },
                    label : {show: true}
                },
                emphasis: {   //鼠标经过时折点小圆圈样式
                    borderColor: 'rgba(0,196,132,0.2)',
                    borderWidth: 10
                }
            },
        },
        {
            data: [100, 50, 50, 45, 50, 80, 50, 60, 50, 60, 70, 30],
            type: 'line',
            smooth: true,
            // areaStyle: {},
            // 设置折线上圆点大小
            symbolSize: 10,
            barWidth: 40, //图形宽度
            barCategoryGap: '10%',
            itemStyle: {
                normal: {
                    color: '#fff',
                    fontSize: 14,
                    lineStyle: {
                        width: 2, //折线宽度

                        //折线颜色渐变
                        color: "#7cff2e"
                    },
                    label : {show: true}
                },
                emphasis: {   //鼠标经过时折点小圆圈样式
                    borderColor: 'rgba(0,196,132,0.2)',
                    borderWidth: 10
                }
            },
        }
    ]
}

// 科目成绩及格率和科目成绩优秀率饼图
    //科目成绩及格率
var PassRateSubjectScore = {
    color: ["#00c6ff", "#60ff00", "#ffad33","#orange","#ff5353","#ff7cd6","#9f95ff","#72dcc9","#e9a388","#d7f56e"],
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
            name: '占比',
            type: 'pie',
            radius: ['20%', '50%'],
            avoidLabelOverlap: false,
            hoverAnimation:false,
            label: {
                normal: {
                    formatter: '{d}%',
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
                { name: "语文", value: 600 },
                { name: "数学", value: 310 },
                { name: "英语", value: 800 },
                { name: "物理", value: 800 },
                { name: "化学", value: 800 },
                { name: "生物", value: 800 },
                { name: "政治", value: 800 },
                { name: "地理", value: 800 },
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
var ExcellentRateSubjectAchievement = {

}
// 高三各科目备课量
var RegionalResourcesData = [100, 110, 120, 100, 100, 100, 100, 100, 100]
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
            max: 1500,
            splitNumber: 5,
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
            stack: '2',
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
            stack: '3',
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
            stack: '4',
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
            stack: '5',
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
            stack: '5',
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
            stack: '5',
            data: RegionalResourcesData,
            label: {
                normal: {
                    show: true //在图上显示文字
                }
            }
        }
    ]
}
// 图形渲染
ERdata(
    [
        { "id": "ExcellentRateTeachers", "data": RegionalTeachers},
        { "id": "ExaminationOverviewChart", "data": RegionalTeachersLine},
        { "id": "ExaminationResultsChart", "data": ExaminationResultsChart },
        { "id": "DoubleExaminationResultsChart", "data": DoubleExaminationResultsChart},
        { "id": "PreicEcharts-1", "data": PassRateSubjectScore},
        { "id": "PreicEcharts-2", "data": PassRateSubjectScore},
        { "id": "SubjectReserve", "data": RegionalResourcesChart},
        { "id": "task", "data": task},
        { "id": "atom", "data": atom},
    ]
)

 $("#top10Dom").niceScroll({
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
$("#RegionalTeachersDom").getNiceScroll().resize()

function tigert(str) {
    window.location = str + "";
}