
	//------------------------------------二级菜单
	//--------------------------------------顶部二级菜单
	//----------------------------轮播图
	$(function() {
		$.fn.extend({
			slide:function(){
				let slice = $(this);
				// 存放图片的下标
				let index = 1;
				let time = null;
				let outWidth = $('.slice').width(); // 外层盒子(可视窗口)的宽度
				let sliceItem = $('.sliceItem').length; // 得到所有的移动的内层盒子的个数
				let sliceBox = $('.sliceBox'); // 得到移动的外层盒子
				let doudou = $('.dot'); //得到包含所有豆豆的数组
				autoPlay();
				// 定时器,实现图片自动播放
				function autoPlay() {
					time = setInterval(function() {
						index++;
						changeSlide();
						changDoudou();
					}, 3000);
				}
				// 图片切换
				function changeSlide() {
					sliceBox.animate({
						left: -1 * outWidth * index + 'px'
					}, 1000);
					if (index >= sliceItem - 1) {
						sliceBox.animate({
							left: -outWidth + 'px'
						}, 0)
						index = 1;
					}
					if (index < 1) {
						sliceBox.animate({
							left: -(sliceItem - 2) * outWidth + 'px'
						}, 0);
						index = sliceItem - 2;
					}
				}
				// 小圆点切换
				function changDoudou() {
					doudou.eq(index - 1).css({
							backgroundColor: '#FFCB00'
						})
						.siblings().css({
							backgroundColor: '#666666'
						});
				}
				// 点击小圆点,切换图
				doudou.click(function(event) {
					let target = event.target;
					index = $(target).index() + 1;
					changeSlide();
					changDoudou();
					clearInterval(time);
				})
		        }
		    });
			$('.slice').slide();
		});
	//------------------------------------------点击切换图片
	$(".rightArrow").click(function(){
		$(".hotStarBox").css({transform: "translate3d(-1200px, 0px, 0px)","transition-duration": "300ms"});
	})
	$(".leftArrow").click(function(){
		$(".hotStarBox").css({transform: "translate3d(0px, 0px, 0px)","transition-duration": "300ms"});
	})
	//------------------------------------------吸顶效果
	window.onload = function() {
	 //获取吸顶的盒子
	 let oDiv = document.getElementsByClassName("ScrollTopBox")[0];
     //获取header内容
	 let oContent=document.getElementsByTagName("header")[0];
	 window.onscroll = function() {
	  // 获取当前页面的滚动条纵坐标位置 （依次为火狐谷歌、safari、IE678）
	  var scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; 
	  if (parseInt(scrollT)>=50) {
	    oContent.style.display="none";
	    oDiv.style.display="block";
		   if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
			// 兼容IE6代码
			oDiv.style.position = 'absolute';
			oDiv.style.top = scrollT + 'px';
			oDiv.style.left = 0 + 'px';
		   } 
		   else { 
			// 正常浏览器代码
			oDiv.style.position = 'fixed';
			oDiv.style.top = 0;
			oDiv.style.left = 0;
		   }
	  }
	  else if(parseInt(scrollT) <30 && parseInt(scrollT) !=1){
		  oContent.style.display="block";
		  oDiv.style.display="none";
	  }
	  else{
		   oDiv.style.position = '';
	  }
	 }
}
	