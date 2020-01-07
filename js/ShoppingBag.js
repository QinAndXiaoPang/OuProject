class Car {
	constructor() {

	}
	//渲染页面
	render() {
		let data = JSON.parse(localStorage.getItem('data'));
		if(data==""||data==null){
			return;
         }
		let box = document.getElementsByClassName('cartProductMain')[0];
		for (let i = 0; i < data.length; i++) {
			box.innerHTML += `
			<div class="cartAutoBox">
				<div class="cartItemIcon">
					<div class="itemAllBox">
						<input type="checkbox" class="itemAll" checked="checked">
					</div>
					<img src="${data[i].imgSrc}" alt="" class="itemIco">
				</div>
				<div class="cartItemInfo">
					<p class="cartItemName">${data[i].title}</p>
					<p class="cartItemMl">规格：250ml</p>
				</div>
				<div class="cartItemPrice">
					${data[i].price}
				</div>
				<div class="cartQuan">
					<a href="#" class="cartDecrease">-</a>
					<input type="text" class="cartGoodsNum" value="${data[i].num}">
					<a href="#" class="cartbtnAdd">+</a>
				</div>
				<div class="cartTotalPrice">
					${data[i].num*data[i].price}
				</div>
				<div class="cartDel">
					<a href="#" class="cartDelbtn">删除</a>
					<i class="cartMiddle">|</i>
					<a href="" class="cartheart">移到心愿单</a>
				</div>
				<div class="cartId" display="none">${data[i].goodId}</div>
			</div>
			`
			console.log(111);
		}
        this.getTotalNum();
        this.getTotalPrice();
        this.bindEvent();
	}
	// 改变总数量
	getTotalNum() {
		//+和-之间的值
		let nums = document.getElementsByClassName('cartGoodsNum');
		let totalNum = document.getElementsByClassName('cartTotalNum')[0];
		let sum = 0;
		for (let i = 0; i < nums.length; i++) {
			sum += +nums[i].value;
		}
		totalNum.innerHTML = sum;
	}
	// 改变总价格
	getTotalPrice() {
		let price = document.getElementsByClassName('cartTotalPrice');
		let totalPrice = document.getElementsByClassName('orderRightPrice')[0];
		let totalPrice1 = document.getElementsByClassName('orderSingPrice')[0];
		let sum = 0;
		for (let i = 0; i < price.length; i++) {
			sum += +price[i].innerHTML;
		}
		totalPrice.innerHTML = sum;
		totalPrice1.innerHTML=sum;
	}
	// 增加数量
	addGoodsNum(btn) {
		let num = btn.previousElementSibling;
		num.value = Number(num.value) + 1;
		this.getXiaoji(btn, num.value);
		this.getTotalNum();
		this.getTotalPrice();
        let goodId = btn.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
		this.changeNum(goodId, '+');
	}
	// 改变存储的localstroage
	changeNum(goodId, flag) {
		let data = JSON.parse(localStorage.getItem('data'));
		for (let i = 0; i < data.length; i++) {
			if (goodId == data[i].goodId) {
				if (flag == '+') { //增加数量的操作
				    console.log("aaa");
					data[i].num += 1;
					console.log(data[i].num);
				} else if (flag == '-') { // 减少数量的操作
					data[i].num -= 1;
				}
			}
		}
		localStorage.setItem('data', JSON.stringify(data));
		console.log(data);
	}
	// 减少数量
	reduceGoodsNum(btn) {
		let num = btn.nextElementSibling;
		if (num.value <= 1) {
			alert('没得减啦')
		} else {
			num.value = Number(num.value) - 1;
			this.getXiaoji(btn,
				num.value);
			this.getTotalNum();
			this.getTotalPrice();
			let goodId = btn.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
			this.changeNum(goodId, '-');
		}
	}
	// 删除货物
	deleteGoods(btn) {
		let tr = btn.parentNode.parentNode;
		let goodId = btn.parentNode.nextElementSibling.innerText;
		tr.remove();
		this.getTotalNum();
		this.getTotalPrice();
		let data = JSON.parse(localStorage.getItem('data'));
		// 在所有的存储数据中查找当前删除的数据
		for (let i = 0; i < data.length; i++) {
			if (goodId == data[i].goodId) { //找到了
				// splice
				data.splice(i, 1); // 删除和我当前点击这行对应的存储数据
			}
		}
		// 重新设置数据
		localStorage.setItem('data', JSON.stringify(data));
	}
	// 获取小计
	getXiaoji(btn, num) {
		// 单价
		let price = btn.parentNode.previousElementSibling.innerHTML;
		// 小计
		let xiaoji = btn.parentNode.nextElementSibling;
		// 小计的值
		xiaoji.innerHTML = price * num;
	}
	bindEvent() {
		let that = this;
		// 增加按钮
		let addBtn = document.getElementsByClassName('cartbtnAdd');
		for (let i = 0; i < addBtn.length; i++) {
			addBtn[i].onclick = function () {
				// this=》加号 
				that.addGoodsNum(this);
			}
		}
		// 减少数量 
		let reduceBtn = document.getElementsByClassName('cartDecrease');
		for (let i = 0; i < reduceBtn.length; i++) {
			reduceBtn[i].onclick = function () {
				that.reduceGoodsNum(this); 
			}
		}
		// 删除按钮
		let deleteBtn = document.getElementsByClassName('cartDelbtn');
		for (let i = 0; i < deleteBtn.length; i++) {
			deleteBtn[i].onclick = function () {
				that.deleteGoods(this);
			}
		}
	}
}
let p = new Car();
p.bindEvent();
p.getTotalNum();
p.getTotalPrice();
p.render();