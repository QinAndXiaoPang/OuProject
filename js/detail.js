
//获取localStorage数据
	let data = JSON.parse(sessionStorage.getItem('data'));
	 //更改图片
	let oTitle=document.getElementsByClassName("GoodsName")[0];
	$(".small-box").css({backgroundImage:"url("+data[0].imgSrc+")"});
	$(".big-box").css({backgroundImage:"url("+data[0].imgSrc+")"});
	let oImg=document.getElementsByClassName("smallIcon")[0];
	oImg.src=data[0].imgSrc;
	oTitle.innerHTML=data[0].title;
	let oPrice=document.getElementsByClassName("GoodsPrice")[0];
	oPrice.innerHTML=data[0].price;
class Magnifier{
		constructor(newSmallBox,newBigBox,newMask,newImgBox) {
		    this.smallBox = newSmallBox;
			this.bigBox = newBigBox;
			this.mask = newMask;
			this.imgBox=newImgBox;
		}
		//选择图片的方法
		selectImg(){
			let that=this;
			//获取到小图片
			for(let i=0;i<this.imgBox.length;i++){
				this.imgBox[i].onmouseover=function(){
					that.imgBox[i].style.border="2px solid #ffcb00";
					//设置小盒子的背景图片
					that.smallBox.style.backgroundImage="url("+data[len].imgSrc+")";
					//设置大盒子的背景图片
					that.bigBox.style.backgroundImage="url("+data[len].imgSrc+")";
				}
				this.imgBox[i].onmouseout=function(){
					that.imgBox[i].style.border="2px solid #ffcb00";
				}
			}
			
		}
		onmouseover(){
			let that = this;
			this.smallBox.onmouseover = function(){
				that.bigBox.style.display = "block";
				//设置大盒子的背景图片
				that.bigBox.style.backgroundImage="url("+data[0].imgSrc+")";
				that.mask.style.display = "block";
				//设置小盒子的背景图片
				that.smallBox.style.backgroundImage="url("+data[0].imgSrc+")";
			}
		}
		
		onmouseout(){
			let that = this;
			this.smallBox.onmouseout = function(){
				that.bigBox.style.display = "none";
				that.mask.style.display = "none";
			}
		}
		
		onmousemove(){
			let that = this;
			this.smallBox.onmousemove = function(evt){
				let e = evt || event;
				
				let left = e.pageX - that.smallBox.offsetLeft - that.mask.offsetWidth/2;
				let top =  e.pageY - that.smallBox.offsetTop - that.mask.offsetHeight/2;
				
				if(left < 0){
					left = 0;
				}
				
				let maxLeft = that.smallBox.offsetWidth - that.mask.offsetWidth;
				
				if(left > maxLeft){
					left = maxLeft;
				}
				
				if(top < 0){
					top = 0;
				}
				
				let maxTop = that.smallBox.offsetHeight - that.mask.offsetHeight;
				
				if(top > maxTop){
					top = maxTop;
				}
				
				that.mask.style.left = left + "px";
				that.mask.style.top = top + "px";
				
				//比例尺
				//小图片:大图片 = 小窗口:大窗口
				//that.mask.offsetWidth*x = left * that.bigBox.offsetWidth;
				
				let x = that.bigBox.offsetWidth*left/that.mask.offsetWidth;
				let y = that.bigBox.offsetHeight*top/that.mask.offsetHeight;
				
				//背景图片的定位
				that.bigBox.style.backgroundPositionX = -x + "px";
				that.bigBox.style.backgroundPositionY = -y + "px";
			}
		}
	}
	
	let oSmallBox = document.getElementsByClassName("small-box")[0];
	let oBigBox = document.getElementById("big-box");
	let oMask = document.getElementById("mask");
	//---------------找到图片的盒子
	let oImgBox=document.getElementsByClassName("smallIcon");
	let mf = new Magnifier(oSmallBox,oBigBox,oMask,oImgBox);
	
	mf.onmouseover();
	mf.onmouseout();
	mf.onmousemove();
	//调用方法
	mf.selectImg();
	