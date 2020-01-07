//---------------------------------------------------------------------定义ajax的方法
//获取登录按钮
let ologinBtn=document.getElementsByClassName("ConfirmLogin")[0];
//用户名
let oLoginUser=document.getElementsByClassName("LoginUserName")[0];
//密码
let oLoginpass=document.getElementsByClassName("LoginUserPass")[0];
//注册按钮
let oLoginHtmlBtn=document.getElementsByClassName("LoginHtmlBtn")[0];
ologinBtn.onclick=function(){
	console.log(66666666);
	 myAjax("post","login.php",'username='+oLoginUser.value+'&'+'password='+oLoginpass.value,true,showValue);
	function showValue(str){
		if(str=="1"){
			//界面跳转
			location.href="index.html"; 
		}else{
			alert("账号或密码不正确");
	    }
	}
}
//获取立即注册按钮
oLoginHtmlBtn.onclick=function(){
	//界面跳转
	location.href="Register.html"; 
}
 function myAjax(type,url,date,isAsyn,fun){
        let xhr;
        if (window.ActiveXObject) {
            //ie
            xhr = new ActiveXObject("Microsoft.XMLHttp");
        } else {
            //非ie
            xhr =  new XMLHttpRequest();
        }
        //转小写
        type = type.toLowerCase();
        if(type == "get"){
            let urlParam = url;
            if(date != ""){
                urlParam += "?" + date;
            }
            xhr.open(type,urlParam,isAsyn);
			//内容为空
            xhr.send();
        }else if(type == "post"){
            xhr.open(type,url,isAsyn);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			//传递内容
            xhr.send(date);
        }
        //事件
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                fun(xhr.responseText);
            }
        }
    }


