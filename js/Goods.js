//模拟json数据
let arr=[
	{"imgsrc":"img/g1.jpg","title":"焕亮水莹精华面膜","price":"350.00","capacity":"5片","goodsId":1},
	{"imgsrc":"img/g2.jpg","title":"腊菊活颜紧致精华面霜","price":"540.00","capacity":"50ml","goodsId":2},
	{"imgsrc":"img/g3.jpg","title":"蜡菊活颜紧致精华液","price":"260.00","capacity":"200ml","goodsId":3},
	{"imgsrc":"img/g4.jpg","title":"蜡菊活颜紧致保湿水","price":"260.00","capacity":"200ml","goodsId":4},
	{"imgsrc":"img/g5.jpg","title":"星光瓶+腊菊活颜面霜套装","price":"1100.00","capacity":"肌底液30ml+精华日霜50ml","goodsId":5},
	{"imgsrc":"img/g6.jpg","title":"蜡菊活颜精华面膜","price":"690.00","capacity":"30ml","goodsId":6},
	{"imgsrc":"img/g7.jpg","title":"蜡菊活颜精华液","price":"600.00","capacity":"50ml","goodsId":7},
	{"imgsrc":"img/g8.jpg","title":"蜡菊活颜精华修护晚霜","price":"640.00","capacity":"15ml","goodsId":8},
	{"imgsrc":"img/g9.jpg","title":"腊菊活颜紧致精华眼霜","price":"360.00","capacity":"15ml","goodsId":9},
	{"imgsrc":"img/g10.jpg","title":"蜡菊活颜洁面泡沫","price":"240.00","capacity":"150ml","goodsId":10},
	{"imgsrc":"img/g11.jpg","title":"蜡菊活颜卸妆油","price":"240.00","capacity":"200ml","goodsId":11},
	{"imgsrc":"img/g12.jpg","title":"蜡菊活颜面部卸妆乳","price":"240.00","capacity":"200ml","goodsId":12}
]
//动态创建货物
for(let i=0;i<arr.length;i++){
	$(".goodLongList").append(`
		<li class="goodLongItem">
			<img src="${arr[i].imgsrc}" alt="" class="goodLongImg">
			<div class="goodInfo">
				<p class="GoodInfoDes">${arr[i].title}</p>
				<div class="GoodPrice">
				   ${arr[i].price}
				</div>
				<div class="GoodBuyBtn">
					 立即购买 
				</div>
				 <span class="GoodIdDis" display="none">${arr[i].goodsId}</span>
				 <span class="GoodIdCap" display="none">${arr[i].capacity}</span>
			</div>
		</li>
	`)
}
let arr1=[];
let goodsBox=[];
//获取立即购买的按钮
$(".GoodBuyBtn").click(function(){
	console.log($(this).index());
	let flag = false; // 表示不存在
	// 标题
	let title =$(this).prev().prev().html();
	// 价格
	let price =$(this).prev().html();
	// 图片路径
	let imgSrc =$(this).parent().prev()[0].src;
	//商品id
	let goodId=$(this).next().html();
	// console.log(goodId);
    //获取容量
	let goodCapa=$(this).next().next().html();
	//弹出框显示
	let oBox=$(".publicGoodPop");
	oBox.css({display:"block"});
	//添加之前先移除
	oBox.empty();
	oBox.append(`
		<div class="pInner">
			<div href="" class="close">×</div>
			<img src="${imgSrc}" alt="" class="pic">
			<div class="pInfo">
				<p class="pText">${title}</p>
				<div class="pItem">
					<div class="pLabel">价格</div>
					<div class="pPrice">${price}</div>
				</div>
				<div class="pItem">
					<div class="pLabel">规格</div>
					<div class="pMl">${goodCapa}</div>
				</div>
				<div class="pItem ">
					<div class="pLabel">数量</div>
					<div class="pQuan">
						<a href="-" class="pDecrease">-</a>
						<input type="text" class="pGoodsNum" value="1">
						<a href="" class="pbtnAdd">+</a>
					</div>
				</div>
				<div class="btnWrap">
					<button class="AddPack">加入购物袋</button>
					<button class="BtnDetail">查看详情</button>
				</div>
			</div>
	`)
	//关闭按钮事件
	$(".close").click(function(){
		$(this).parent().parent().css({display:"none"});
	})
	//加入购物袋事件
	$(".AddPack").click(function(){
		//跳转界面
		location.href="ShoppingBag.html";
		//拼接存储的数据
		let localMain = JSON.parse(localStorage.getItem('data'));
		arr1 = arr1.concat(localMain);
		if (arr1[0] == null) {
			arr1 = [];
		}
		//----------------------------------- 存储的逻辑
		// 每个商品作为一个对象
		let obj = {
			"title": title,
			"price": price,
			"imgSrc": imgSrc,
			"goodId": goodId,
			"num": 1
		}
		//判断数组存在当前点击的商品与否
		for (let x = 0; x < arr1.length; x++) {
			if (goodId == arr1[x].goodId) { // 存在
			    arr1[x].num = arr1[x].num + 1; // 加数量
				flag = true; // 标志置为true
			}
		}
		if (flag == false) { // 不存在则直接添加
			arr1.push(obj);
		}
		
		console.log(arr1);
		// 存取 只能存字符串JSON.stringify()
		localStorage.setItem('data', JSON.stringify(arr1));
		//alert('加入购物车成功');
	})
	//查看详情事件
	$(".BtnDetail").click(function(){
		//跳转界面
		location.href="detail.html";
		// 每个商品作为一个对象
		let obj = {
			"title": title,
			"price": price,
			"imgSrc": imgSrc,
			"goodId": goodId,
			"num": 1
		}
		console.log(obj);
		//判断数组存在当前点击的商品与否
		for (let x = 0; x < goodsBox.length; x++) {
			if (goodId == goodsBox[x].goodId) { // 存在
				flag = true; // 标志置为true
			}
		}
		if (flag == false) { // 不存在则直接添加
			goodsBox.push(obj);
		}
		
		console.log(goodsBox);
		// 存取 只能存字符串JSON.stringify()
		sessionStorage.setItem('data', JSON.stringify(goodsBox));
	})
})




