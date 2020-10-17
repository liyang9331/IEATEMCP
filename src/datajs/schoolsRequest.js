

// 区域学校四级联动
let provinceList = {
    area: ["山东省"],
    Allcity: [
        { id: 010, name: '临沂市' }
    ],
    cityList: [
        { id: 100, name: '兰山区' },
    ],
    school: [
        { id: 100, name: '枣园中学' }
    ]
}
// 区域学校数量
let RegionalSchools = {
    Xaxis: [],
    smSchool: [],
    mdSchool: [],
    hdSchool: [],
    max: 0
}
// 区域日活跃老师总人数
let active = {
    Xaxis: [],
    count: [],
    max: 0
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


// 请求完成数据，再渲染图标
// 1.请求地图
// 2.请求区域学校
$.ajax({
    type: "GET",
    url: api + "citySchoolCount?province_id=370000",
    data: {},
    async: true,
    dataType: "json",
    success: function (response) {
    },
    error: function (err) {
    }
});
// 3. 请求区域学校数量
$.ajax({
    type: "GET",
    url: api + "citySchoolCount?province_id=370000",
    data: {},
    async: true,
    dataType: "json",
    success: response => {
        let res = response.data
        let list = []
        res.forEach(item => {
            RegionalSchools.Xaxis.push(item.name)
            RegionalSchools.smSchool.push(item.school_count[1])
            RegionalSchools.mdSchool.push(item.school_count[2])
            RegionalSchools.hdSchool.push(item.school_count[3])
            list.push(item.school_count[1])
            list.push(item.school_count[2])
            list.push(item.school_count[3])
        });
        let count = res.length
        if (count <= 7) {
            $("#RegionalSchoolsChart").css({ "width": "100%" })
        }
        // 取最大值
        RegionalSchools.max = Math.max(...list)
        console.log(RegionalSchools)
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
                            show: true,
                            position: 'inside', //文字居中显示
                            formatter: params => {
                                if (params.value > 0) {
                                    return params.value;
                                } else {
                                    return ' ';
                                }
                            }
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
                            show: true,
                            position: 'inside', //文字居中显示
                            formatter: params => {
                                if (params.value > 0) {
                                    return params.value;
                                } else {
                                    return ' ';
                                }
                            }
                        }
                    },
                },
                {
                    name: '小学',
                    type: 'bar',
                    stack: '1',
                    data: RegionalSchools.smSchool,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside', //文字居中显示
                            formatter: params => {
                                if (params.value > 0) {
                                    return params.value;
                                } else {
                                    return ' ';
                                }
                            }
                        }
                    },

                }
            ]
        };
        // 渲染
        ERdata([{ "id": "RegionalSchoolsChart", "data": RegionalSchoolsEchart }])
    },
    error: function (err) {
        // console.log(err);
    }
})

// 5. 请求区域学校教师数量 定义对象 渲染
$.ajax({
    type: "GET",
    url: api + "cityTeacherCount?province_id=370000",
    data: {},
    async: true,
    dataType: "json",
    success: function (response) {
        let res = response.data
        let teacher = {
            Xaxis: [],
            smSchool: [],
            mdSchool: [],
            hdSchool: [],
            max: 0
        }
        // 记录所有值
        let list = []
        console.log("条数")
        let count = res.length
        if (count <= 17) {
            $("#RegionalTeachersChart").css({ "width": "100%" })
        }
        res.forEach(item => {
            teacher.Xaxis.push(item.name)
            teacher.smSchool.push(item.count[1])
            teacher.mdSchool.push(item.count[2])
            teacher.hdSchool.push(item.count[3])
            list.push(item.count[1])
            list.push(item.count[2])
            list.push(item.count[3])
        });
        // 取最大值
        teacher.max = Math.max(...list)
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
                            show: true,
                            position: 'inside', //文字居中显示
                            formatter: params => {
                                if (params.value > 0) {
                                    return params.value;
                                } else {
                                    return ' ';
                                }
                            }
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
                            show: true,
                            position: 'inside', //文字居中显示
                            formatter: params => {
                                if (params.value > 0) {
                                    return params.value;
                                } else {
                                    return ' ';
                                }
                            }
                        }
                    },
                },
                {
                    name: '小学教师',
                    type: 'bar',
                    stack: '1',
                    data: teacher.smSchool,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside', //文字居中显示
                            formatter: params => {
                                if (params.value > 0) {
                                    return params.value;
                                } else {
                                    return ' ';
                                }
                            }
                        }
                    },
                }
            ]
        };
        // 3.渲染
        ERdata([{ "id": "RegionalTeachersChart", "data": RegionalTeachers }])
    },
    error: function (err) {
        console.log(err);
    }
});
// 6. 区域日活跃老师总人数 折线图 定义对象 渲染
$.ajax({
    type: "GET",
    url: api + "getCityTeacherActiveCount?province_id=370000",
    data: {},
    async: true,
    dataType: "json",
    success: function (response) {
        let res = response.data
        // 记录所有值
        let list = []
        res.forEach(item => {
            active.Xaxis.push(item.name)
            active.count.push(item.count)
            list.push(item.count)
        });
        // 取最大值
        active.max = Math.max(...list)
        let splitNumber = 0
        if (active.max / 2 == 1) {
            splitNumber = 2;
        }
        let count = res.length
        if (count <= 17) {
            $("#RegionalTeachersLine").css({ "width": "100%" })
        }
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
                axisLabel: {
                    show: true,
                    interval: 0
                },
                splitLine: {
                    show: false,
                    interval: 0
                }
            },
            yAxis: {
                min: 0,
                max: active.max,
                splitNumber: splitNumber,
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
                barWidth: 10, //图形宽度
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
        // 渲染
        ERdata([{ "id": "RegionalTeachersLine", "data": RegionalTeachersLine }])
    },
    error: function (err) {
        console.log(err);
    }
});
// 7. 区域建设图表
$.ajax({
    type: "GET",
    url: api + "getResourceCountChart?province_id=370000&section_id=3",
    data: {},
    async: true,
    dataType: "json",
    success: function (response) {
        let res = response.data
        let list = []
        let data = {
            "course": [],
            "teach": [],
            "study": [],
            "material": [],
            "exam": [],
            "course": [],
            "weike": [],
            "question": [],
        }
        console.log(res.length)
        for (let i in res) {
            data.course.push(res[i][0].course)
            data.teach.push(res[i][0].teach)
            data.study.push(res[i][0].study)
            data.material.push(res[i][0].material)
            data.exam.push(res[i][0].exam)
            data.weike.push(res[i][1].weike)
            data.question.push(res[i][1].question)

            list.push(res[i][0].course)
            list.push(res[i][0].teach)
            list.push(res[i][0].study)
            list.push(res[i][0].material)
            list.push(res[i][0].exam)
            list.push(res[i][1].weike)
            list.push(res[i][1].question)
        }
        let max = Math.max(...list)
        console.log(data)
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
                    max: max,
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
                    data: data.course,
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
                    data: data.teach,
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
                    data: data.study,
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
                    data: data.exam,
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
                    data: data.weike,
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
                    data: data.material,
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
                    data: data.question,
                    label: {
                        normal: {
                            show: true //在图上显示文字
                        }
                    }
                }
            ]
        }
        // 渲染
        ERdata([{ "id": "RegionalResourcesChart", "data": RegionalResourcesChart }])
    },
    error: function (err) {
        console.log(err);
    }
});
// 8. 区域学生总人数图表
$.ajax({
    type: "GET",
    url: api + "cityStudentCount?province_id=370000",
    data: {},
    async: true,
    dataType: "json",
    success: function (response) {
        let res = response.data
        // console.log('区域学生总人数')
        let splitNumber = 0
        let student = {
            Xaxis: [],
            smSchool: [],
            mdSchool: [],
            hdSchool: [],
            max: 0
        }
        let list = []
        res.forEach(item => {
            student.Xaxis.push(item.name)
            student.smSchool.push(item.count[1])
            student.mdSchool.push(item.count[2])
            student.hdSchool.push(item.count[3])
            list.push(item.count[1])
            list.push(item.count[2])
            list.push(item.count[3])
        });
        let count = res.length
        if (count <= 7) { $("#RegionalStudentChart").css({ "width": "100%" }) }
        // 取最大值
        student.max = Math.max(...list)
        if (student.max / 2 == 1) { splitNumber = 2 }
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
                    data: student.Xaxis,
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
                    max: student.max,
                    splitNumber: splitNumber,
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
                    data: student.hdSchool,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside', //文字居中显示
                            formatter: params => {
                                if (params.value > 0) {
                                    return params.value;
                                } else {
                                    return ' ';
                                }
                            }
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
                    data: student.mdSchool,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside', //文字居中显示
                            formatter: params => {
                                if (params.value > 0) {
                                    return params.value;
                                } else {
                                    return ' ';
                                }
                            }
                        }
                    },
                },
                {
                    name: '小学教师',
                    type: 'bar',
                    stack: '1',
                    data: student.smSchool,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside', //文字居中显示
                            formatter: params => {
                                if (params.value > 0) {
                                    return params.value;
                                } else {
                                    return ' ';
                                }
                            }
                        }
                    },
                }
            ]
        };
        // 渲染
        ERdata([{ "id": "RegionalStudentChart", "data": RegionalStudent }])
    },
    error: function (err) {
        console.log(err);
    }
});
// 9.区域年级学生总人数
$.ajax({
    type: "GET",
    url: api + "getCityStudentRate?province_id=370000",
    data: {},
    async: true,
    dataType: "json",
    success: function (response) {
        let res = response.data
        console.log("区域年级学生总人数")
        for(let a=0;a<=2;a++){
            if(res[a].count==0){
                res[a].count=''
            }
        }
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
                        { name: "高中", value: res[2].count },
                        { name: "七八九年级", value: res[1].count },
                        { name: "一至六年级", value: res[0].count }
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
        // 渲染
        ERdata([{ "id": "StudentPieChartChart-left", "data": StudentPieChart }])
    },
    error: function (err) {
        console.log(err);
    }
});
// 10.区域年级学生优秀人数
$.ajax({
    type: "GET",
    url: api + "getCityStudentRate?province_id=370000",
    data: {},
    async: true,
    dataType: "json",
    success: function (response) {
        let res = response.data
        for(let a=0;a<=2;a++){
            if(res[a].count==0){
                res[a].count=''
            }
        }
        console.log("区域年级学生总人数")
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
                        { name: "高中", value: res[2].count },
                        { name: "七八九年级", value: res[1].count },
                        { name: "一至六年级", value: res[0].count }
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
        // 渲染
        ERdata([{ "id": "StudentPieChartChart-right", "data": StudentPieChart }])
    },
    error: function (err) {
        console.log(err);
    }
});