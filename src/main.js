let vue = new Vue({
    el: "#app",
    data: {
        Tdate: Tdate(),
        model: {
            total: 300,//总页数
            size: 5,//每页显示条目个数不传默认10
            page: 1,//当前页码
        },
        // 区域学校四级联动
        SectionData: provinceList,
        // 区域活跃值最高学校TOP10
        SchoolsTop10: [],
        StarClass: new Array(),
        // 区域建设
        RegionalResources: {
            total:'',
            data:[
                { "name": "课件", "number": "120,308", "MonthlyAddition": "1,456", "color": "#00c6ff" },
                { "name": "教案", "number": "120,308", "MonthlyAddition": "1,456", "color": "#60ff00" },
                { "name": "学案", "number": "120,308", "MonthlyAddition": "1,456", "color": "#ce7f0d" },
                { "name": "试卷", "number": "120,308", "MonthlyAddition": "1,456", "color": "#ce4750" },
                { "name": "微课", "number": "120,308", "MonthlyAddition": "1,456", "color": "#ff7cd6" },
                { "name": "素材", "number": "120,308", "MonthlyAddition": "1,456", "color": "#9f95ff" },
                { "name": "题库", "number": "120,308", "MonthlyAddition": "1,456", "color": "#264d66" },
            ]
        }
    },
    methods: {
        //页码切换执行方法
        pageFn(val) {
            this.model.page = val;
            // axios请求
            // total：总页数 
            // size：每页显示条目个数不传默认10 
            // page：设置默认页码，默认1 
            // changge：页码切换方法触发，比如：传入pageFn方法接收page页码
        }
    },
    beforeRouter() {
    },
    created() {
    },
    mounted() {
        let serf = this
        // 4. 请求区域学小top10
        axios.get(api + 'region/getUserActiveRank', {
            params: {
                province_id: 370000
            }
        }).then(res => {
            let list = res.data.data
            list.forEach(element => {
                serf.SchoolsTop10.push(
                    { "SchoolName": element.name, "SchoolAttribute": element.section_name, "ActiveValue": element.rate_percent, "Ranking": 1 }
                )
            });
        }).catch((e) => {
            console.log('获取数据失败');
        });
        // 星选示范课数据
        axios.get(api + 'region/getSchoolModelCourse', {
            params: {
                province_id: 370000, page: 1, limit: 10
            }
        })
        .then((res) => {
            // console.log(res.data.data)
            let list = res.data.data
            console.log(serf.StarClass)
            list.forEach(item => {
                serf.StarClass.push({ 'SchoolName': item.school_name, 'SchoolAttribute': item.section_name, 'grade': item.subject_name, 'subject': item.model_name, 'DemonstrationClass': item.grade_name, "StartLevel": new Array(parseInt(item.star_number)) })
            })
            console.log(serf.StarClass)
        })
        .catch((e) => {
            console.log('获取数据失败');
        });
        // 区域建设
        axios.get(api + 'region/getResourceCount', {
            params: {
                province_id: 370000
            }
        }).then((res) => {
            
            let list = res.data.data
            serf.RegionalResources.total = list.total.total

            serf.RegionalResources.data[0].number=list.total.course_num
            serf.RegionalResources.data[1].number=list.total.teach_num
            serf.RegionalResources.data[2].number=list.total.study_num
            serf.RegionalResources.data[3].number=list.total.exam_num
            serf.RegionalResources.data[4].number=list.total.weike_num
            serf.RegionalResources.data[5].number=list.total.material_num
            serf.RegionalResources.data[6].number=list.total.question_num

            serf.RegionalResources.data[0].MonthlyAddition=list.near30day.course_num
            serf.RegionalResources.data[1].MonthlyAddition=list.near30day.teach_num
            serf.RegionalResources.data[2].MonthlyAddition=list.near30day.study_num
            serf.RegionalResources.data[3].MonthlyAddition=list.near30day.exam_num
            serf.RegionalResources.data[4].MonthlyAddition=list.near30day.weike_num
            serf.RegionalResources.data[5].MonthlyAddition=list.near30day.material_num
            serf.RegionalResources.data[6].MonthlyAddition=list.near30day.question_num

            console.log(serf.RegionalResources)
        }).catch((e) => {
            console.log('获取数据失败');
        });
    }
})

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

function tigert(str) {
    window.location = str + "";
}