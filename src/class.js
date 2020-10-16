// 模拟数据
let RegionalResources = [
    { "name": "备课", "number": "120,308", "color": "#00c6ff" },
    { "name": "试卷", "number": "120,308", "color": "#60ff00" },
    { "name": "微课", "number": "120,308", "color": "#ce7f0d" },
    { "name": "题库", "number": "120,308", "color": "#ce4750" },
]
// 区域活跃值最高学校TOP10
let SchoolsTop10 = []
for (let a = 0; a < 10; a++) {
    SchoolsTop10.push({ "id": a, "name": "张大伟", "SchoolAttribute": "高中", "ActiveValue": "高三", "miniClass": 99, "subject": "语文", "className": "孔乙己", "level": new Array(5) })
}
// 高三年级-试题分析 模拟数据
let StarClass = []
for (let a = 0; a < 10; a++) {
    StarClass.push({ "name": "3月考试", "SchoolAttribute": "入学测试", "PeopleNumber": 200, "grade": "高三", "subject": 110, "FullMark": 10, "WrongMark": 10, "difficulty": "困难" })
}
// 图例循环数据
// 颜色数据，名称数据
let legend = ['最高分', '最低分', '平均分', '及格率', '优秀率']
let color = ["#00c6ff", "#60ff00", "#ffa400", "#ff5353", "#ff7cd6", "#9f95ff", "#72dcc9"]
// 雷达图数据
let riceData = [
        {
            value: [100, 200, 200, 200, 200, 200, 200, 200, 200],
            name: '',
            // 设置区域边框和区域的颜色
            itemStyle: {
                normal: {
                    color: "#0c4b7f",
                    lineStyle: {
                        color: "#0c4b7f",
                    },
                },
            },
        },
]
// 雷达图
let circle = {
    title: {
        // text: '基础雷达图'
    },
    tooltip: {},
    // 图表的位置
    grid: {
        position: 'center',
    },
    legend: {
        show: false,
        // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle', //圆图
        splitNumber: 0, // 雷达图圈数设置
        name: {
            // 雷达图外文字
            textStyle: {
                color: '#6cb0d4',
                backgroundColor: '#020c29',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        // 设置雷达图中间射线的颜色
        axisLine: {
            lineStyle: {
                color: '#102153',
            },
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: '#102153', // 图表背景的颜色
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: '#102153', // 设置边框的颜色
            },
        },
        indicator: [
            { name: '课程包'+100, max: 1000 },
            { name: '微课'+100, max: 1000 },
            { name: '作业'+100, max: 1000 },
            { name: '素材'+100, max: 1000 },
            { name: '学案'+100, max: 1000 },
            { name: '教案'+100, max: 1000 },
            { name: '课件'+100, max: 1000 },
        ]
    },
    series: [
        {
            name: '',
            type: 'radar',
            symbol: "none", // 拐点的样式，还可以取值'rect','angle'等
            symbolSize: 8, // 拐点的大小
            areaStyle: {
                normal: {
                    width: 1,
                    opacity: 0.2,
                },
            },
            data: riceData
        }]
}

let SchoolsNumber = [
    { "name": "班级总人数", "number": 250 },
    { "name": "男生", "number": 250 },
    { "name": "女生", "number": 250 },
]
// 高三总备课量
let atom = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show: false,
        data: ['推送资源包', '推送资源', '发布作业', '上传资源']
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
            data: ['推送资源包', '推送资源', '发布作业', '上传资源'],
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
            data: [320, 400, 200, 300],
            barWidth: 40, //图形宽度
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorList = [
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
let task = {
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
                        let colorList = [
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

let classlist = [
    "涉及科目", "语文", "数学", "英语", "物理", "化学", "生物", "政治", "地理",
    "历史", "班会", "音乐", "美术", "体育", "计算机", "心理课", "选修课"
]
// 课程列表
let NewClassList = {
    "title": ["", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    "class": [
        "早自习", "语文", "语文", "语文", "语文", "语文", "语文", "语文",
        "第1节", "语文", "语文", "语文", "语文", "语文", "语文", "语文",
        "第2节", "语文", "语文", "语文", "语文", "语文", "语文", "语文",
        "第3节", "语文", "语文", "语文", "语文", "语文", "语文", "语文",
        "第4节", "语文", "语文", "语文", "语文", "语文", "语文", "语文",
        "午休", "", "", "", "", "", "", "",
        "第5节", "语文", "语文", "语文", "语文", "语文", "语文", "语文",
        "第6节", "语文", "语文", "语文", "语文", "语文", "语文", "语文",
        "第7节", "语文", "语文", "语文", "语文", "语文", "语文", "语文",
        "第8节", "语文", "语文", "语文", "语文", "语文", "语文", "语文",
        "晚自习", "", "", "", "", "", "", "",
        "暂存区", "", "", "", "", "", "", "",
    ]
}
let Tdate = function () {
    let myDate = new Date();
    // myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
    let Day = function () {
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
// 到课率柱状图
let RegionalTeachers = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show: false,
        data: ['0-20%', '20-40%', '40-60%', '60-80%', "80-100%"]
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
            data: ["0-20%", "20-40%", "40-60%", "60-80%", "80-100%"],
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            // interval: 0.5,
            // boundaryGap:false
            axisTick: {    // 坐标轴 刻度
                show: true,  // 是否显示
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
                margin: 3, // 刻度标签与轴线之间的距离
            }
        }
    ],
    yAxis: [
        {
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
            data: [20, 40, 60, 80, 100],
            barWidth: 10, //图形宽度
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorList = [
                            '#38d2ff', '#88ff40', '#ffb444', '#ff766f'
                        ];
                        return colorList[params.dataIndex]
                    },
                    //以下为是否显示，显示位置和显示格式的设置了
                    label: {
                        show: false,
                        position: 'top',
                        formatter: '{c}%'
                    }
                }
            }
        }
    ]
}
// 班级作业完成统计
let RegionalTeachersLine = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show: false,
        data: ['推送资源包', '推送资源', '发布作业', '上传资源']
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
            data: ['教师姓名', '作业量', '作业分值', '完成率', '正确率'],
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
            max: 100,
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
            data: [20, 40, 20, 30, 80],
            barWidth: 40, //图形宽度
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorList = [
                            '#38d2ff', '#88ff40', '#ffb444', '#ff6d68', "#ffa0e1"
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

};

let pathSymbols = [
    { "number": 50, "path": 'image://images/PictIcon_blue.png' },
    { "number": 60, "path": 'image://images/PictIcon_green.png' },
    { "number": 70, "path": 'image://images/PictIcon_orange.png' },
    { "number": 80, "path": 'image://images/PictIcon_red.png' },
]
// 象形图
let PictColumn = {
    title: {
        show: false,
        text: 'Vehicles in X City'
    },
    legend: {
        data: ['2015', '2016']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    // 边距设置
    grid: {
        x: "10",
        // y:"-10",
        top: "0",
        left: "100px",
        right: "0",
        bottom: "5px",
    },
    // Y轴设置
    yAxis: {
        data: ['75-100%', '50-75%', '25-50%', '0-25%'],
        inverse: true,
        label: {
            // margin:10
        },
        splitLine: { //分割线
            show: true,
            lineStyle: {
                color: "#022a54"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#87d9ff"
            }
        },
        axisTick: { show: false }, //刻度
        axisLabel: {
            margin: 2,
            fontSize: 10,
            color: "#49799b"
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        }
    },
    // X轴设置
    xAxis: {
        splitLine: { show: false }, //分割线
        axisLabel: { show: false }, //坐标轴标签
        axisTick: { show: false }, //坐标轴刻度
        //轴线
        axisLine: {
            show: true,
            width: 2,
            lineStyle: {
                color: "#87d9ff"
            }
        }
    },
    // 数据设置
    series: [{
        type: 'pictorialBar',
        label: {
            normal: {
                show: true,
                position: 'right',
                offset: [5, 0],
                textStyle: {
                    fontSize: 14
                }
            }
        },
        symbolRepeat: true,
        symbolSize: ['7', '16'],
        barCategoryGap: '40%',
        //象形数量,图形 50个小人为100%
        data: [
            {
                value: pathSymbols[0].number,
                symbol: pathSymbols[0].path
            },
            {
                value: pathSymbols[1].number,
                symbol: pathSymbols[1].path
            },
            {
                value: pathSymbols[2].number,
                symbol: pathSymbols[2].path
            },
            {
                value: pathSymbols[3].number,
                symbol: pathSymbols[3].path
            },
        ]
    }]
};
// 高三年级-考试成绩优秀率
let ExaminationResultsChart = {
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
                        let colorList = [
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
                        let colorList = [
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
let DoubleExaminationResultsChart = {
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
                    label: { show: true }
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
                    label: { show: true }
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
let PassRateSubjectScore = {
    color: ["#00c6ff", "#60ff00", "#ffad33", "#orange", "#ff5353", "#ff7cd6", "#9f95ff", "#72dcc9", "#e9a388", "#d7f56e"],
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
            hoverAnimation: false,
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

// 
// 高三各科目备课量
let RegionalResourcesData = [100, 110, 120, 100, 100, 100, 100, 100, 100]
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
let StudentWork = {
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
                        let colorList = [
                            '#38d2ff', '#88ff40', '#ffb444'
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
// 老师备课统计
var TeachersPrepare = [
    { "name": "教案", "color": "#00c6ff", "number": 300 },
    { "name": "课件", "color": "#60ff00", "number": 300 },
    { "name": "学案", "color": "#ffa400", "number": 300 },
    { "name": "作业", "color": "#ff5353", "number": 300 },
    { "name": "素材", "color": "#ff7cd6", "number": 300 },
    { "name": "微课", "color": "#9f95ff", "number": 300 }
]
// 
var TeachersPrepareEchart = {
    color: ["#00c6ff", "#60ff00", "#ffa400", "#ff5353", "#ff7cd6", "#9f95ff"],
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
            hoverAnimation: false,
            label: {
                normal: {
                    // show: false,
                    formatter: '{c}',
                    // position: 'inside',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 12
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                }
            },
            // 鼠标悬浮指示线和提示文字样式
            // emphasis: {
            //     label: {
            //         show: true,
            //         fontSize: '30',
            //         fontWeight: 'bold'
            //     }
            // },
            data: [
                { name: "教案", value: 300 },
                { name: "课件", value: 300 },
                { name: "学案", value: 300 },
                { name: "作业", value: 300 },
                { name: "素材", value: 300 },
                { name: "微课", value: 300 },
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
                        length: 0.5
                    }
                }
            },
        }
    ]
}
// 仪表盘
let speedometer = {
    backgroundColor: "#020c29",
    grid: {
        top: "10px",
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    legend: {
        selectedMode: false, // 取消标题点击后事件-这里显示和隐藏指定项
        orient: 'vertical',
        left: 10,
        data: []
    },
    tooltip: { //仪表盘特点的写法
        show: false,
        formatter: "{b}：{c}%",
        backgroundColor: "",	// 提示框浮层的背景颜色。注意：series.tooltip 仅在 tooltip.trigger 为 'item' 时有效。
        borderColor: "#333",		// 提示框浮层的边框颜色。...
        borderWidth: 0,				// 提示框浮层的边框宽。...
        padding: 5,					// 提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。...
        textStyle: {				// 提示框浮层的文本样式。...
            // color ,fontStyle ,fontWeight ,fontFamily ,fontSize ,lineHeight ,.......
        },
    },
    // toolbox: {
    //     feature: {
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    series: [
        {
            name: "单仪表盘示例",		// 系列名称,用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            type: "gauge",			// 系列类型
            radius: "100%",			// 参数:number, string。 仪表盘半径,默认 75% ，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
            center: ["50%", "55%"],	// 仪表盘位置(圆心坐标)
            startAngle: 225,		// 仪表盘起始角度,默认 225。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            endAngle: -45,			// 仪表盘结束角度,默认 -45
            clockwise: true,		// 仪表盘刻度是否是顺时针增长,默认 true。
            min: 0,					// 最小的数据值,默认 0 。映射到 minAngle。
            max: 100,				// 最大的数据值,默认 100 。映射到 maxAngle。
            splitNumber: 10,		// 仪表盘刻度的分割段数,默认 10。
            axisLine: {				// 仪表盘轴线(轮廓线)相关配置。
                show: true,				// 是否显示仪表盘轴线(轮廓线),默认 true。
                lineStyle: {			// 仪表盘轴线样式。
                    color: [[0.2, 'red'], [0.8, 'yellow'], [1, 'green']],
                    width: 2,					//轴线宽度,默认 30。
                }
            },

            splitLine: {			// 分隔线样式。
                show: false,				// 是否显示分隔线,默认 true。
                length: 30,				// 分隔线线长。支持相对半径的百分比,默认 30。
                lineStyle: {			// 分隔线样式。
                    color: "auto",				//线的颜色,默认 #eee。
                    opacity: 1,					//图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                    width: 2,					//线度,默认 2。
                    type: "solid",				//线的类型,默认 solid。 此外还有 dashed,dotted
                    shadowBlur: 10,				//(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                    shadowColor: "#fff",		//阴影颜色。支持的格式同color。
                }
            },
            axisTick: {				// 刻度(线)样式。
                show: true,				// 是否显示刻度(线),默认 true。
                splitNumber: 5,			// 分隔线之间分割的刻度数,默认 5。
                length: 8,				// 刻度线长。支持相对半径的百分比,默认 8。
                lineStyle: {			// 刻度线样式。	
                    color: "auto",				//线的颜色,默认 #eee。
                    opacity: 1,					//图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                    width: 1,					//线度,默认 1。
                    type: "solid",				//线的类型,默认 solid。 此外还有 dashed,dotted
                    shadowBlur: 10,				//(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                    shadowColor: "#fff",		//阴影颜色。支持的格式同color。
                },
            },

            axisLabel: {			// 刻度标签。
                show: false,				// 是否显示标签,默认 true。
                distance: 5,			// 标签与刻度线的距离,默认 5。
                color: "#fff",			// 文字的颜色,默认 #fff。
                fontSize: 5,			// 文字的字体大小,默认 5。
                formatter: "{value}",	// 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。 示例:// 使用字符串模板，模板变量为刻度默认标签 {value},如:formatter: '{value} kg'; // 使用函数模板，函数参数分别为刻度数值,如formatter: function (value) {return value + 'km/h';}
            },

            pointer: {				// 仪表盘指针。
                show: true,				// 是否显示指针,默认 true。
                length: "30",			// 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
                width: 2,				// 指针宽度,默认 8。
            },

            itemStyle: {			// 仪表盘指针样式。
                color: "#00ff00",			// 指针颜色，默认(auto)取数值所在的区间的颜色
                opacity: 1,				// 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                borderWidth: 0,			// 描边线宽,默认 0。为 0 时无描边。
                borderType: "solid",	// 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                borderColor: "none",	// 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
                shadowBlur: 0,			// (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                shadowColor: "#fff",	// 阴影颜色。支持的格式同color。
            },

            // emphasis: {				// 高亮的 仪表盘指针样式
            //     itemStyle: {
            //         //高亮 和正常  两者具有同样的配置项,只是在不同状态下配置项的值不同。
            //     }
            // },

            title: {				// 仪表盘标题。
                show: false,				// 是否显示标题,默认 true。
                offsetCenter: [0, "20%"],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                color: "#fff",			// 文字的颜色,默认 #333。
                fontSize: 20,			// 文字的字体大小,默认 15。
            },

            detail: {				// 仪表盘详情，用于显示数据。
                show: true,				// 是否显示详情,默认 true。
                offsetCenter: [0, "60%"],// 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                color: "#00ff00",			// 文字的颜色,默认 auto。
                fontSize: 14,			// 文字的字体大小,默认 15。
                formatter: "{value}%",	// 格式化函数或者字符串
            },
            data: [{ value: 50 }]
        }
    ]
};

// 柱状折线图
let ColumnLineChart = {
    backgroundColor: "#020c29",
    grid: {
        top: "10px",
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    legend: {
        selectedMode: false, // 取消标题点击后事件-这里显示和隐藏指定项
        orient: 'vertical',
        left: 10,
        data: []
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
            name: "number",
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
            name: "line",
            min: 0,
            max: 100,
            splitNumber: 7,
            // postion:right,
            type: 'value',
            axisLabel: {
                show: true,
                // interval: 'auto',
                formatter: '{value} %',
                color: "#64a2c6"

            },
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            // postion: 'right',
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
            name: 'number',
            type: 'bar',
            data: [100, 200, 300, 100, 200, 300, 100, 100, 200],
            stack: 1,
            yAxisIndex:0,//选择以哪一个Y轴刻度为准
            barWidth: 13, //图形宽度
            itemStyle: {
                normal: {
                    color: "#42d5ff"
                }
            }
        },
        {
            name: 'number',
            type: 'bar',
            data: [100, 200, 300, 100, 200, 300, 100, 100, 200],
            stack: 2,
            yAxisIndex:0,//选择以哪一个Y轴刻度为准
            barWidth: 13, //图形宽度
            itemStyle: {
                normal: {
                    color: "#95ff55"
                }
            }
        },
        {
            name: 'number',
            type: 'bar',
            data: [100, 200, 300, 100, 200, 300, 100, 100, 200],
            stack: 3,
            yAxisIndex:0,//选择以哪一个Y轴刻度为准
            barWidth: 13, //图形宽度
            itemStyle: {
                normal: {
                    color: "#ffac2f"
                }
            }
        },
        // 概率
        {
            name:'line',
            data: [100, 50, 60, 45, 50, 60, 50, 60, 50],
            type: 'line',
            yAxisIndex:1,
            symbol:'circle',//折现拐点样式 圆圈
            smooth: true,
            smooh:true,
            symbolSize: 10,
            barWidth: 40, //图形宽度
            // barCategoryGap: '10%',
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor:"#ff5353",
                    fontSize: 14,
                    lineStyle: {
                        width: 3, //折线宽度
                        //折线颜色渐变
                        color: "#ff5353"
                    },
                    label: { show: false }
                },
                emphasis: {   //鼠标经过时折点小圆圈样式
                    borderColor: 'rgba(0,196,132,0.2)',
                    borderWidth: 10
                }
            },
        },
        {
            name:'line',
            data: [90, 40, 50, 45, 70, 60, 80, 60, 50],
            type: 'line',
            symbol:'circle',//折现拐点样式 圆圈
            yAxisIndex:1,
            smooth: true,
            smooh:true,
            symbolSize: 10,
            barWidth: 40, //图形宽度
            barCategoryGap: '10%',
            itemStyle: {
                normal: {
                    borderColor:"#fe7cd5",
                    borderWidth:2,
                    color: 'none',
                    fontSize: 14,
                    lineStyle: {
                        width: 3, //折线宽度
                        //折线颜色渐变
                        color: "#fe7cd5"
                    },
                    label: { show: false }
                },
                emphasis: {   //鼠标经过时折点小圆圈样式
                    show:false,
                    borderColor: 'rgba(0,196,132,0.2)',
                    borderWidth: 10
                }
            },
        }
    ]
}
// 学习进度仪表盘
let Dashboard = {
    backgroundColor: "#020c29",
    grid: {
        top: "0px",
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    legend: {
        selectedMode: false, // 取消标题点击后事件-这里显示和隐藏指定项
        orient: 'vertical',
        left: 10,
        data: []
    },
    tooltip: { //仪表盘特点的写法
        show: false,
        formatter: "{b}：{c}%",
        backgroundColor: "",	// 提示框浮层的背景颜色。注意：series.tooltip 仅在 tooltip.trigger 为 'item' 时有效。
        borderColor: "#333",		// 提示框浮层的边框颜色。...
        borderWidth: 0,				// 提示框浮层的边框宽。...
        padding: 5,					// 提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。...
        textStyle: {				// 提示框浮层的文本样式。...
            // color ,fontStyle ,fontWeight ,fontFamily ,fontSize ,lineHeight ,.......
        },
    },
    // toolbox: {
    //     feature: {
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    series: [
        {
            name: "单仪表盘示例",		// 系列名称,用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            type: "gauge",			// 系列类型
            radius: "100%",			// 参数:number, string。 仪表盘半径,默认 75% ，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
            center: ["50%", "55%"],	// 仪表盘位置(圆心坐标)
            startAngle: 225,		// 仪表盘起始角度,默认 225。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            endAngle: -45,			// 仪表盘结束角度,默认 -45
            clockwise: true,		// 仪表盘刻度是否是顺时针增长,默认 true。
            min: 0,					// 最小的数据值,默认 0 。映射到 minAngle。
            max: 100,				// 最大的数据值,默认 100 。映射到 maxAngle。
            splitNumber: 10,		// 仪表盘刻度的分割段数,默认 10。
            axisLine: {				// 仪表盘轴线(轮廓线)相关配置。
                show: true,				// 是否显示仪表盘轴线(轮廓线),默认 true。
                lineStyle: {			// 仪表盘轴线样式。
                    color: [[0.2, 'red'], [0.8, 'yellow'], [1, 'green']],
                    width: 2,					//轴线宽度,默认 30。
                }
            },

            splitLine: {			// 分隔线样式。
                show: false,				// 是否显示分隔线,默认 true。
                length: 30,				// 分隔线线长。支持相对半径的百分比,默认 30。
                lineStyle: {			// 分隔线样式。
                    color: "auto",				//线的颜色,默认 #eee。
                    opacity: 1,					//图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                    width: 2,					//线度,默认 2。
                    type: "solid",				//线的类型,默认 solid。 此外还有 dashed,dotted
                    shadowBlur: 10,				//(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                    shadowColor: "#fff",		//阴影颜色。支持的格式同color。
                }
            },
            axisTick: {				// 刻度(线)样式。
                show: true,				// 是否显示刻度(线),默认 true。
                splitNumber: 5,			// 分隔线之间分割的刻度数,默认 5。
                length: 8,				// 刻度线长。支持相对半径的百分比,默认 8。
                lineStyle: {			// 刻度线样式。	
                    color: "auto",				//线的颜色,默认 #eee。
                    opacity: 1,					//图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                    width: 1,					//线度,默认 1。
                    type: "solid",				//线的类型,默认 solid。 此外还有 dashed,dotted
                    shadowBlur: 10,				//(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                    shadowColor: "#fff",		//阴影颜色。支持的格式同color。
                },
            },

            axisLabel: {			// 刻度标签。
                show: false,				// 是否显示标签,默认 true。
                distance: 5,			// 标签与刻度线的距离,默认 5。
                color: "#fff",			// 文字的颜色,默认 #fff。
                fontSize: 5,			// 文字的字体大小,默认 5。
                formatter: "{value}",	// 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。 示例:// 使用字符串模板，模板变量为刻度默认标签 {value},如:formatter: '{value} kg'; // 使用函数模板，函数参数分别为刻度数值,如formatter: function (value) {return value + 'km/h';}
            },

            pointer: {				// 仪表盘指针。
                show: true,				// 是否显示指针,默认 true。
                length: "80",			// 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
                width: 2,				// 指针宽度,默认 8。
            },

            itemStyle: {			// 仪表盘指针样式。
                color: "#00ff00",			// 指针颜色，默认(auto)取数值所在的区间的颜色
                opacity: 1,				// 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                borderWidth: 0,			// 描边线宽,默认 0。为 0 时无描边。
                borderType: "solid",	// 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                borderColor: "none",	// 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
                shadowBlur: 0,			// (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                shadowColor: "#fff",	// 阴影颜色。支持的格式同color。
            },

            // emphasis: {				// 高亮的 仪表盘指针样式
            //     itemStyle: {
            //         //高亮 和正常  两者具有同样的配置项,只是在不同状态下配置项的值不同。
            //     }
            // },

            title: {				// 仪表盘标题。
                show: false,				// 是否显示标题,默认 true。
                offsetCenter: [0, "20%"],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                color: "#fff",			// 文字的颜色,默认 #333。
                fontSize: 20,			// 文字的字体大小,默认 15。
            },

            detail: {				// 仪表盘详情，用于显示数据。
                show: true,				// 是否显示详情,默认 true。
                offsetCenter: [0, "60%"],// 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                color: "#00ff00",			// 文字的颜色,默认 auto。
                fontSize: 14,			// 文字的字体大小,默认 15。
                formatter: "{value}%",	// 格式化函数或者字符串
            },
            data: [{ value: 50 }]
        }
    ]
}

// vue实例化
let vue = new Vue({
    el: "#app",
    data: {
        RegionalResources: RegionalResources,
        SchoolsTop10: SchoolsTop10,
        Tdate: Tdate(),
        StarClass: StarClass,
        SchoolsNumber: SchoolsNumber,
        state: false,
        model: {
            total: 300,//总页数
            size: 5,//每页显示条目个数不传默认10
            page: 1,//当前页码
        },
        arr: arrAll,
        prov: '厨房',
        city: '电路',
        district: '灯具',
        cityArr: [],
        districtArr: [],
        teacherState: false,// 标记老师备课统计显示状态
        tcolor: index => { if (index < 8) return "#102153" },
        mcolor: index => { if (index % 8 == 0) return "#09173e" }
    },
    methods: {
        mouseover(id) {
            console.log(1111111111)
            // 暂时动态调用数据
            this.teacherState = !this.teacherState
        },
        mouseLeave() {
            this.teacherState = !this.teacherState
        },
        click() { this.state = !this.state },
        //页码切换执行方法
        pageFn(val) {
            this.model.page = val;
            console.log(val);
        },
        // axios请求
        // total：总页数 
        // size：每页显示条目个数不传默认10 
        // page：设置默认页码，默认1 
        // changge：页码切换方法触发，比如：传入pageFn方法接收page页码
        updateCity: function () {
            for (let i in this.arr) {
                let obj = this.arr[i];
                if (obj.name == this.prov) {
                    this.cityArr = obj.sub;
                    break;
                }
            }
            this.city = this.cityArr[1].name;
        },
        updateDistrict: function () {
            for (let i in this.cityArr) {
                let obj = this.cityArr[i];
                if (obj.name == this.city) {
                    this.districtArr = obj.sub;
                    break;
                }
            }
            if (this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
                this.district = this.districtArr[1].name;
            } else {
                this.district = '';
            }
        }
    },
    created() {
        axios({
            method: "get",
            baseURL: "http://cas.dearedu.com/region/cityTeacherCount?province_id=370000"
        }).then(function (response) {
            console.log(response)
            //json格式化
            let obj = str.parseJSON(response.data);
        })
            .catch(function (error) {
                console.log(error)
            })
        console.log(11111)
    },
    beforeMount: function () {
        this.updateCity();
        this.updateDistrict();
    },
    watch: {
        prov: function () {
            this.updateCity();
            this.updateDistrict();
        },
        city: function () {
            this.updateDistrict();
        }
    },
    beforeRouter() {

    },
    mounted() {

    }
})

// 执行多图形渲染函数 [{"图形id":"图形option"}]
ERdata(
    [
        { "id": "DoubleExaminationResultsChart", "data": RegionalTeachersLine },
        { "id": "ExcellentRateTeachers", "data": RegionalTeachers },
        { "id": "TeachersPrepare", "data": TeachersPrepareEchart },
        // 仪表盘
        {"id":"speedometer","data":speedometer},
        // 班级总分排名人数
        { "id": "PictColumn", "data": PictColumn },
        // 柱状折线图
        { "id": "ColumnLineChart", "data": ColumnLineChart },
        { "id": "circleNew", "data": circle },

        { "id": "Dashboard", "data": Dashboard },
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
