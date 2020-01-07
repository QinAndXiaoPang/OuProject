<?php
header("Content-type:text/html;charset=utf-8");
$id=$_POST['username'];
$name=$_POST['password'];
//连接数据库
$conn=mysql_connect("localhost","root","root");
if($conn){
	//连接数据库
	mysql_select_db("register");
}
//注意细节  只有字符串才会加单引号
$result=mysql_query("select * from reg where User=$id and Pass='$name'",$conn);
if(mysql_num_rows($result)==1){
	echo "1";
}
else{
	echo "0";
}
?>