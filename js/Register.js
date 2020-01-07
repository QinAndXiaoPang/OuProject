//---------------------------------------------------------------手机号
let phoneFlag=false;
//获取手机号
let oPhone=document.getElementsByClassName("phone")[0];
//获取验证框
let oPhoneCon=document.getElementsByClassName("phoneConfirm")[0];
oPhone.onblur=function(){
	oPhone.style.backgroundColor="white";
	//11位数字
	let reg=/^\d{11}$/;
	if(reg.test(this.value)){
		phoneFlag=true;
		oPhoneCon.innerHTML="";
	}else{
		phoneFlag=false;
		oPhoneCon.innerHTML="请输入11位手机号";
	}
}
//---------------------------------------------------------------------密码
var oPass=document.getElementsByClassName("phoneCommon")[0];
//获取span
var oSpanPass=document.getElementsByClassName("passTips")[0];
var flagPass=false;
oPass.onblur=function(){
	oPass.style.backgroundColor="white";
	//6-20个字符
	let reg=/^\w{6,20}$/;
	if(reg.test(this.value)){
		flagPass=true;
		oSpanPass.innerHTML="";
	}else{
		flagPass=false;
		oSpanPass.innerHTML="请填写密码，6-20个字符";
	}
}
//------------------------------------------------------------------确认密码
var oAgainPass=document.getElementsByClassName("PassAgain")[0];
//密码提示
let oAgainTips=document.getElementsByClassName("passTipsAgain")[0];
//定义确认
var flagAgain=false;
oAgainPass.onblur=function(){
	
   //确认密码和密码相同
   if(this.value==oPass.value){
	   flagAgain=true;
	   oAgainTips.innerHTML="";
   }
   else{
		flagAgain=false;
		oAgainTips.innerHTML="输入密码不一致";
   }
}
//------------------------------------------------------------------我已阅读
let oCheck=document.getElementsByClassName("ReadCheck")[0];
//阅读提示
let oReadTips=document.getElementsByClassName("SelectAgree")[0];
//注册按钮
let oRegisterBtn=document.getElementsByClassName("RegisterBtn")[0];
let checkFlag=false;
oCheck.onblur=function(){
   //确认密码和密码相同
   if(oCheck.checked){
	   checkFlag=true;
	   oReadTips.innerHTML="";
   }
   else{
		checkFlag=false;
        oReadTips.innerHTML="请选择同意";
   }
}
//------------------------------------------------------------------注册按钮事件
//获取表单元素
//let oform=document.getElementsByClassName("form")[0];
let RegisterBtn=document.getElementsByClassName("RegisterBtn")[0];
RegisterBtn.onclick=function(){
	if(phoneFlag==false){
		oPhone.style.backgroundColor="#fff8f6";
		oPhoneCon.innerHTML="请输入11位手机号";
	}
	if(codeFlag==false){
	   oCodeInput.style.backgroundColor="#fff8f6";
	   oError.innerHTML="请正确填写验证码";
	}
	if(flagPass==false){
		oSpanPass.innerHTML="请填写密码，6-20个字符";
		 oPass.style.backgroundColor="#fff8f6";
	}
	if(checkFlag==false){
		oReadTips.innerHTML="请选择同意";
	}
	if(phoneFlag&&flagPass&&flagAgain&&checkFlag&&codeFlag){
		console.log(1111);
		myAjax("post","Register.php",'username='+oPhone.value+'&'+'password='+oPass.value,true,showValue);
		function showValue(){
			 location.href="login.html"; 
		}
	   // alert("注册成功，即将跳转页面");
	  
	 }
}
//------------------------------------------------------------------登录按钮事件
let oLogin=document.getElementsByClassName("RightNowText")[0];
oLogin.onclick=function(){
	alert("跳转登录界面");
	//界面跳转
	// location.href="http://www.baidu.com"; 
	location.href="login.html"; 
}
//---------------------------------------------------------------------定义ajax的方法
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



	