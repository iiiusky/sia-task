webpackJsonp([23],{"+GBv":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mask-add-task-manage",attrs:{id:"mask"}},[a("div",{staticClass:"mask-content",attrs:{id:"mask-content"}},[a("div",{staticClass:"mask-main-title"},[a("span",[t._v("添加 Task")]),t._v(" "),a("i",{staticClass:"close-icon",on:{click:t.showHiddenAddTask}})]),t._v(" "),a("div",{staticClass:"info"},[a("el-form",{ref:"taskManageViewForm",staticClass:"taskManageViewForm",attrs:{model:t.taskAddViewModel,rules:t.taskAddViewModelRules,"label-width":"120px","auto-complete":"off"}},[a("el-form-item",{attrs:{label:"项目组名称",prop:"projectName"}},[a("el-select",{attrs:{placeholder:"项目组名称","allow-create":t.isEnterText,filterable:t.isEnterText},model:{value:t.taskAddViewModel.projectName,callback:function(e){t.$set(t.taskAddViewModel,"projectName",e)},expression:"taskAddViewModel.projectName"}},t._l(t.projectDataList,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}),1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"选择Task归属的项目组，可选列表中一般包含多个项目组",placement:"right"}},[a("span",{staticClass:"el-icon-question info-icon"})])],1),t._v(" "),a("el-form-item",{attrs:{label:"应用名称",prop:"applyName"}},[a("span",{staticClass:"pre-job-key-text"},[t._v(t._s(t.taskAddViewModel.projectName))]),a("span",{staticClass:"center-line"},[t._v("－")]),t._v(" "),a("el-select",{staticClass:"pre-task-key",attrs:{placeholder:"应用名称","allow-create":t.isEnterText,filterable:t.isEnterText},model:{value:t.taskAddViewModel.applyName,callback:function(e){t.$set(t.taskAddViewModel,"applyName",e)},expression:"taskAddViewModel.applyName"}},t._l(t.applyDataList,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}),1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"选择Task归属的应用，可选列表中一般包含多个应用",placement:"right"}},[a("span",{staticClass:"el-icon-question info-icon"})])],1),t._v(" "),a("el-form-item",{attrs:{label:"HTTP_PATH",prop:"httpPath"}},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:""},model:{value:t.taskAddViewModel.httpPath,callback:function(e){t.$set(t.taskAddViewModel,"httpPath",e)},expression:"taskAddViewModel.httpPath"}}),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"添加Task的HTTP接口请求路径，示例：/example",placement:"right"}},[a("span",{staticClass:"el-icon-question info-icon"})])],1),t._v(" "),a("el-form-item",{staticClass:"radio-text",attrs:{label:"是否配置参数",prop:"isConfigParams"}},[a("el-radio-group",{model:{value:t.taskAddViewModel.isConfigParams,callback:function(e){t.$set(t.taskAddViewModel,"isConfigParams",e)},expression:"taskAddViewModel.isConfigParams"}},[a("el-radio",{attrs:{label:1}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:0}},[t._v("否")])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"选择HTTP接口是否有入参",placement:"right"}},[a("span",{staticClass:"el-icon-question info-icon"})])],1),t._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"taskdesc"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off",placeholder:"描述"},model:{value:t.taskAddViewModel.taskdesc,callback:function(e){t.$set(t.taskAddViewModel,"taskdesc",e)},expression:"taskAddViewModel.taskdesc"}}),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"描述Task的功能",placement:"right"}},[a("span",{staticClass:"el-icon-question info-icon"})])],1),t._v(" "),a("el-form-item",{staticClass:"add-ip-post",attrs:{label:"ip：port"}},[a("el-input",{class:{active:t.showIpPortError},attrs:{type:"text","auto-complete":"off",placeholder:""},model:{value:t.addIpPostVal,callback:function(e){t.addIpPostVal=e},expression:"addIpPostVal"}}),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"添加Task所在应用的IP地址与端口",placement:"right"}},[a("span",{staticClass:"el-icon-question info-icon"})]),t._v(" "),a("el-button",{staticClass:"btn-small",attrs:{icon:t.loadingRefresh?"el-icon-refresh":"",loading:t.loadingRefresh},on:{click:t.showHiddenAddIpPost}},[t._v("添加")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showIpPortError,expression:"showIpPortError"}],staticClass:"error-msg"},[t._v(t._s(t.ipPortErrorText))])],1)],1),t._v(" "),a("div",{staticClass:"ip-post"},t._l(t.taskAddViewModel.ipPost,function(e,s){return a("span",{key:s},[t._v(t._s(e)),a("i",{on:{click:function(a){return t.handleClickDeleteIp(e)}}},[t._v("X")])])}),0),t._v(" "),a("div",{staticClass:"alert-button"},[a("el-button",{on:{click:t.showHiddenAddTask}},[t._v("取消")]),t._v(" "),a("el-button",{on:{click:t.showHiddenSave}},[t._v("添加")])],1)],1)])])},o=[],i={render:s,staticRenderFns:o};e.a=i},"/tb+":function(t,e,a){var s=a("kxFB");e=t.exports=a("FZ+f")(!1),e.push([t.i,".mask-add-task-manage{z-index:2000;background-color:rgba(17,37,90,.43);top:0;left:0;width:100%;height:100%;position:fixed}.mask-add-task-manage .mask-content{width:730px;margin:0 auto;position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-box-shadow:1px 1px 50px rgba(0,0,0,.3);box-shadow:1px 1px 50px rgba(0,0,0,.3);background:#fff url("+s(a("uSs+"))+") no-repeat center 100px}.mask-add-task-manage .mask-content .mask-main-title{height:50px;background:#4669c7;color:#fff;font-size:24px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left;padding-left:20px}.mask-add-task-manage .mask-content .mask-main-title span{line-height:50px;color:#fff;font-size:16px}.mask-add-task-manage .mask-content .mask-main-title .close-icon{width:16px;height:16px;float:right;background:url("+s(a("bE5C"))+') no-repeat;cursor:pointer;margin:16px 15px 0 0}.mask-add-task-manage .mask-content .info{width:100%;height:auto;max-height:500px;margin:40px auto;padding:0 40px 20px;overflow:auto}.mask-add-task-manage .mask-content .info .el-form{position:relative}.mask-add-task-manage .mask-content .info .el-form .el-form-item .el-form-item__content{width:calc(100% - 200px)}.mask-add-task-manage .mask-content .info .el-form .el-form-item .el-form-item__content .el-radio{line-height:38px}.mask-add-task-manage .mask-content .info .el-form .el-form-item .pre-job-key-text{display:inline-block;width:120px;height:34px;line-height:34px;margin-right:3px;background-color:#f5f7fa;border:1px solid #e4e7ed;color:#c0c4cc;padding-left:10px}.mask-add-task-manage .mask-content .info .el-form .el-form-item .center-line{height:34px;line-height:34px}.mask-add-task-manage .mask-content .info .el-form .el-form-item.add-ip-post{position:relative;margin-bottom:2px}.mask-add-task-manage .mask-content .info .el-form .el-form-item.add-ip-post .el-input.active .el-input__inner{border:1px solid #f56c6c}.mask-add-task-manage .mask-content .info .el-form .el-form-item.add-ip-post .el-form-item__label:before{display:inline-block;content:"*";color:#f56c6c;margin-right:3px}.mask-add-task-manage .mask-content .info .el-form .el-form-item.add-ip-post .error-msg{position:absolute;bottom:-20px;left:0;font-size:10px;height:20px;line-height:20px;color:#f56c6c}.mask-add-task-manage .mask-content .info .el-form .btn-small{position:absolute;right:-55px;bottom:4px;border:1px solid #dedede;color:#333}.mask-add-task-manage .mask-content .info .el-form .btn-small:hover{border:1px solid #dedede;background:rgba(169,180,218,.21);color:#333}.mask-add-task-manage .mask-content .info .ip-post{margin:0 0 20px 120px;width:calc(100% - 235px)}.mask-add-task-manage .mask-content .info .ip-post span{width:100%;height:28px;line-height:28px;font-size:12px;color:rgba(0,0,0,.65);display:inline-block;padding-left:10px;border:1px solid #d9d9d9;border-top:0}.mask-add-task-manage .mask-content .info .ip-post span:first-child{border-top:1px solid #d9d9d9}.mask-add-task-manage .mask-content .info .ip-post span i{float:right;font-style:normal;width:18px;height:18px;border-radius:100%;line-height:28px;margin-right:10px;text-align:center;font-size:10px;color:#d3d3d3;cursor:pointer}.mask-add-task-manage .mask-content .info .ip-post span i:hover{color:#fa6056}',""])},REJL:function(t,e,a){"use strict";var s=a("mvHQ"),o=a.n(s);e.a={name:"AddTaskTmpl",props:["addParamsSearch"],data:function(){var t=function(t,e,a){switch(t.field){case"httpPath":if(!new RegExp(/^\/([(a-zA-Z)+(0-9_\-)?]+\/?)+$/i).test(e))return a(new Error('HTTP_PATH格式必须以 " / "开头，其余字符可为英文、数字、下划线'));break;case"taskdesc":if(""!==e.replace(/(^\s*)|(\s*$)/g,"")&&!new RegExp(/^[^]{2,1000}$/).test(e))return a(new Error("输入内容必须是2到1000个字符!"))}a()};return{loadingRefresh:!1,showApplyNamePre:!1,isEnterText:!0,taskAddViewModel:{projectName:"",applyName:"",httpPath:"",isConfigParams:"",taskdesc:"",ipPost:[]},projectDataList:[],applyDataList:[],viewSearchDateList:{gantry:{gantry:[]}},addIpPostVal:"",showIpPortError:!1,ipPortErrorText:"",taskAddViewModelRules:{projectName:[this.$validator.required("请输入项目名称")],applyName:[this.$validator.required("请输入应用名称")],isConfigParams:[this.$validator.required("请选择是否配置参数")],taskdesc:[this.$validator.required("请输入描述内容"),{validator:t,trigger:"blur"}],httpPath:[this.$validator.required("请输入HTTP_PATH"),{validator:t,trigger:"blur"}]}}},watch:{"taskAddViewModel.projectName":function(t,e){this.getSearchApplyList()},"taskAddViewModel.applyName":function(t,e){if(this.showApplyNamePre=!1,void 0===t||""===t)return!1}},created:function(){this.getSearchList()},methods:{getSearchList:function(){var t=this,e=sessionStorage.getItem("selectAuth");null!==e&&(-1!==o()(e).indexOf("admin")?t.isEnterText=!0:t.isEnterText=!1),t.$http.get(t.$api.getApiAddress("/taskapi/selectAuth","CESHI_API_HOST")).then(function(e){t.projectDataList=e.data.data,t.taskAddViewModel.projectName=t.projectDataList[0]}).catch(function(){t.$message({message:"服务未响应！",type:"error"})})},getSearchApplyList:function(){var t=this;t.applyDataList=[],t.$http.get(t.$api.getApiAddress("/taskapi/selectappsbygroup","CESHI_API_HOST"),{groupName:t.taskAddViewModel.projectName}).then(function(e){0!==e.data.code?t.$message({message:e.data.message,type:"error"}):(e.data.data.forEach(function(e){t.applyDataList.push(e.split("-")[1])}),t.taskAddViewModel.applyName=t.applyDataList[0])}).catch(function(){t.$message({message:"服务未响应！",type:"error"})})},handleClickDeleteIp:function(t){var e=this,a=e.taskAddViewModel.ipPost.indexOf(t);-1!==a&&e.taskAddViewModel.ipPost.splice(a,a+1)},showHiddenAddIpPost:function(){var t=this,e=this;this.loadingRefresh=!0,e.$http.get(e.$api.getApiAddress("/taskapi/checkPingTelnet","CESHI_API_HOST"),{host:e.addIpPostVal}).then(function(a){switch(a.data.code){case 0:-1===e.taskAddViewModel.ipPost.indexOf(e.addIpPostVal)&&""!==e.addIpPostVal?(e.$refs.taskManageViewForm.validate("ipPost"),e.taskAddViewModel.ipPost.push(e.addIpPostVal),t.showIpPortError=!1,e.addIpPostVal="",t.ipPortErrorText=""):""===e.addIpPostVal?(t.showIpPortError=!0,t.ipPortErrorText="ip：port不能为空"):(t.showIpPortError=!0,t.ipPortErrorText="ip：port已添加，请勿重复");break;default:t.showIpPortError=!0,t.ipPortErrorText="连通性失败"}t.loadingRefresh=!1}).catch(function(){t.loadingRefresh=!1,e.$message({message:"服务未响应！",type:"error"})})},showHiddenAddTask:function(){this.$emit("showHiddenAddtask",!1,this.addParamsSearch)},showHiddenSave:function(){var t=this,e={taskKey:t.taskAddViewModel.applyName+t.taskAddViewModel.httpPath,taskGroupName:t.taskAddViewModel.projectName,taskAppName:this.taskAddViewModel.projectName+"-"+t.taskAddViewModel.applyName,taskAppHttpPath:t.taskAddViewModel.httpPath,taskAppIpPort:t.taskAddViewModel.ipPost.join(","),taskDesc:t.taskAddViewModel.taskdesc,paramCount:t.taskAddViewModel.isConfigParams},a={searchProjectName:t.taskAddViewModel.projectName,searchApplyName:t.taskAddViewModel.applyName,searchTaskName:""};if(0===t.taskAddViewModel.ipPost.length)return this.$refs.taskManageViewForm.validate(),this.showIpPortError=!0,this.ipPortErrorText="ip：port不能为空",!1;this.$refs.taskManageViewForm.validate(function(s){s&&t.$http.post(t.$api.getApiAddress("/taskapi/insertTask","CESHI_API_HOST"),e).then(function(e){switch(e.data.code){case 0:t.$message({message:"创建成功",type:"success"}),t.$emit("showHiddenAddtask",!1,a);break;default:t.$message({message:e.data.message,type:"error"})}}).catch(function(){t.$message({message:"创建失败",type:"error"})})})}}}},YcIN:function(t,e,a){var s=a("/tb+");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("b84bb722",s,!0,{})},bE5C:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAU9JREFUSMetkkuuAVEQhjGxARNLEe+Y0xEkQuikMROJBQgShMRyLIBlGImhoSbxrLqDv/sm3be4up2afOmc0+f765wKMDExLZfMzMyHA6jrAcWFcwcDcL8Hq1VrYbdjRz2foGGoEc/nLNZqZW3QNPB+l4N4vxHc7GIhi00TjMVcP5RKL4MQE1Oj8VnHk4ksPp/BbPaf5OWyHOTxwHq9Lv83nfoWy51UKr9idxBmZq7VwNlMmVgOouvOmbCL6I+TmJhOJ3yk077FchDDeCl2dJzJfHpuyFuMSAQMBuX1cBiMRhV3Phq979h9I7cbWCyqF9tvTExMqRTYaskzYgfRNI/i8djrcGG93X5/I4WCcrG3INcrmM+7xMOh/MamiQMTCX9P2O3KQS4XMJezNh6PsjiZ9D1EjiC9nhxks7E29Pvgeg3G49+K5SCdDrjdgs3mD9vTybFFj2NhAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAzLTA0VDE1OjQyOjQwKzA4OjAw1ocA7gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMy0wNFQxNTo0Mjo0MCswODowMKfauFIAAABNdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2RodDVmMmo0c212L3ppeXVhbmxkcGkuc3Znh2M/1AAAAABJRU5ErkJggg=="},sprr:function(t,e,a){"use strict";function s(t){a("YcIN")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("REJL"),i=a("+GBv"),r=a("VU/8"),d=s,n=r(o.a,i.a,!1,d,null,null);e.default=n.exports},"uSs+":function(t,e,a){t.exports=a.p+"static/img/mark-bg.b868281.png"}});