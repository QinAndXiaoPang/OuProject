<?php
	header("Content-type:text/html;charset=utf-8");
	//创建连接对象
	//$conn = mysql_connect("数据库服务器地址","用户名","密码");
	$conn = mysql_connect("localhost","root","root");
	//用户名和密码
	$id=$_POST['username'];
	echo("1111".":".$id);
	$name=$_POST['password'];
	echo("2222".":".$name);
	if($conn){
		//选择数据库
		mysql_select_db("register");
        mysql_query("insert into reg values ('$id','$name')",$conn);
		echo "连接成功";
	}else{
		echo "失败";
	}
    mysql_close($conn);
?>