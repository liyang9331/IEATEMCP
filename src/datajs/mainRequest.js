
let teacher = {
    Xaxis: [],
    smSchool: [],
    mdSchool: [],
    hdSchool: [],
    max: 0
}
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
let RegionalResources = [
    { "name": "课件", "number": "120,308", "MonthlyAddition": "1,456", "color": "#00c6ff" },
    { "name": "教案", "number": "120,308", "MonthlyAddition": "1,456", "color": "#60ff00" },
    { "name": "学案", "number": "120,308", "MonthlyAddition": "1,456", "color": "#ce7f0d" },
    { "name": "试卷", "number": "120,308", "MonthlyAddition": "1,456", "color": "#ce4750" },
    { "name": "微课", "number": "120,308", "MonthlyAddition": "1,456", "color": "#ff7cd6" },
    { "name": "素材", "number": "120,308", "MonthlyAddition": "1,456", "color": "#9f95ff" },
    { "name": "题库", "number": "120,308", "MonthlyAddition": "1,456", "color": "#264d66" },
]
// 预取日活跃老师总人数
let active = {
    Xaxis: [],
    count: [],
    max: 0
}
// 区域活跃值最高学校TOP10
let SchoolsTop10 = [
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
let StarClass = [
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
let RegionalResourcesData = [10000, 11000, 12000, 13000, 14000, 15000, 16000, 14000, 10000]
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
        // 取最大值
        RegionalSchools.max = Math.max(...list)
        console.log(RegionalSchools)
    },
    error: function (err) {
        // console.log(err);
    }
});
// 3. 请求区域学校数量
// 4. 请求区域学小top10
// $.ajax({
//     type: "GET",
//     url: api + "getUserActiveRank?province_id=370000",
//     data: {},
//     async: true,
//     dataType: "json",
//     success: function (response) {
//         let res = response.data
//         let list = []
//         res.forEach(item => {
//             RegionalSchools.Xaxis.push(item.name)
//             RegionalSchools.smSchool.push(item.school_count[1])
//             RegionalSchools.mdSchool.push(item.school_count[2])
//             RegionalSchools.hdSchool.push(item.school_count[3])
//             list.push(item.school_count[1])
//             list.push(item.school_count[2])
//             list.push(item.school_count[3])
//         });
//         // 取最大值
//         RegionalSchools.max = Math.max(...list)
//     },
//     error: function (err) {
//         console.log(err);
//     }
// });
// // 5. 请求区域学校教师数量
$.ajax({
    type: "GET",
    url: api + "cityTeacherCount?province_id=370000",
    data: {},
    async: false,
    dataType: "json",
    success: function (response) {
        let res = response.data
        // 记录所有值
        let list = []
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
    },
    error: function (err) {
        console.log(err);
    }
});
// 6. 区域日活跃老师总人数
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
        });
        // 取最大值
        active.max = Math.max(...list)
    },
    error: function (err) {
        console.log(err);
    }
});

