class PopPlugin{
	constructor(newBox) {
	    this.box=newBox;
		this.divBtn=null;
	}
	setPosition(){
		//所有关于offset相关的属性，必须要保证元素存在
		this.box.style.display="block";
		this.box.style.top=window.innerHeight/2-this.box.offsetHeight/2+"px";
		this.box.style.left=window.innerWidth/2-this.box.offsetWidth/2+"px";
		this.createBtn();
	}
	createBtn(){
		//如果按钮为空则创建
		if(this.divBtn==null){
			this.divBtn=document.createElement("button");
		}
		this.divBtn.innerHTML="X";
		this.divBtn.style.width=50+"px";
		this.divBtn.style.height=25+"px";
		//更改位置必须先定位
		this.divBtn.style.position="absolute";
		this.box.appendChild(this.divBtn);
		//设置位置
		this.divBtn.style.left=this.box.offsetWidth-this.divBtn.offsetWidth+"px";
		this.closeBtn();
	}
	closeBtn(){
		let that=this;
		this.divBtn.onclick=function(){
			that.box.style.display="none";
		}
		}
}