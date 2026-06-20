// JavaScript Document
window.onload=function(){
	//实现下拉菜单
	var test=document.getElementById("test");
	var list=document.getElementById("list");
	var span=test.getElementsByTagName("span")[0];
	var a=test.getElementsByTagName("a")[0];
	//鼠标移入时
	test.onmouseover=function(){
		this.style.border="1px solid #E5E5E5";
		a.style.color="#ee3350";
		span.className="span2";
		list.style.display="block";
	}
	//鼠标移出时
	test.onmouseout=function(){
		this.style.border="";
		a.style.color="";
		span.className="";
		list.style.display="";
	}
	//改变“联系客服”的CSS样式
	var lx=document.getElementById("lx");
	var span1=lx.getElementsByTagName("span")[0];
	var a1=lx.getElementsByTagName("a")[0];
	lx.onmouseover=function(){
		a1.style.color="#ee3350";
		span1.className="span3";
	}
	lx.onmouseout=function(){
		a1.style.color="";
		span1.className="";
	}
//实现轮播效果
//保存当前焦点元素的索引
var current_index=0;
//5000表示调用周期，以毫秒为单位，5000毫秒就是5秒
var timer=window.setInterval(autoChange, 5000);
//获取所有轮播按钮
var button_li=document.getElementById("button").getElementsByTagName("li");
//获取所有banner图
var pic_div=document.getElementById("banner_pic").getElementsByTagName("div");
//遍历元素
for(var i=0;i<button_li.length;i++){
	//添加鼠标滑过事件
	button_li[i].onmouseover=function(){
		//定时器存在时清除定时器
		if(timer){
			clearInterval(timer);
		}
		//遍历元素
		for(var j=0;j<pic_div.length;j++){
			//将当前索引对应的元素设为显示
			if(button_li[j]==this){
				current_index=j; //从当前索引位置开始
				button_li[j].className="current";
				pic_div[j].className="current";
			}else{
				//将所有元素改变样式
				pic_div[j].className="pic";
				button_li[j].className="but";
			}
		}
	}
	//鼠标移出事件
	button_li[i].onmouseout=function(){
		//启动定时器，恢复自动切换
		timer=setInterval(autoChange,5000);			
	}
}
function autoChange(){
	//自增索引
	++current_index;
	//当索引自增达到上限时，索引归0
	if (current_index==button_li.length) {
		current_index=0;
	}
	for(var i=0;i<button_li.length;i++){
		if(i==current_index){
			button_li[i].className="current";
			pic_div[i].className="current";
		}else{
			button_li[i].className="but";
			pic_div[i].className="pic";
		}
	}
	}
}
tabs.forEach(tab => {
    tab.addEventListener('mouseenter', function() {
        // 1. 移除所有标签的 active 状态，重置样式
        tabs.forEach(t => t.classList.remove('active'));
        // 2. 给当前 hover 的标签添加 active 样式，突出显示
        this.classList.add('active');

        // 3. 隐藏所有内容面板
        contents.forEach(c => c.classList.remove('active'));
        // 4. 根据 data-target 属性，找到对应内容面板并显示
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

}
