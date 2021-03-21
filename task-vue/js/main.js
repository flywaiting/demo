


let taskInfo = {
    models: [],
    teams: [],
    branchs: [],
};
// 添加任务
let addTaskInfo = {}

// 当前运行任务
let runningTaskInfo = {}

let queueTasks = [];
let doneList = [];


const app = new Vue({
    el: `#app`,
    data: {
        taskInfo,
        addTaskInfo,

        queueTasks,
        doneList,

        runningTaskInfo,
        runningTips: "none",

        showLogin: false,
        loginInfo: {},
    },

    methods: {
        addTask() {
            let info = this.addTaskInfo;
            if (Object.keys(info).length != 3) {
                alert("任务信息不完整")
                return;
            }
            
            console.log(info);
        },
        delTask(id) {
            console.log(id);
        },

        refreshTaskInfo() {
            console.log("刷新任务信息");

            this.showLogin = true;
        },


        closeLogin() {
            this.showLogin = false;
        },
        login() {
            console.log("登陆...");
        }
    },
});

window.onload = () => {}
