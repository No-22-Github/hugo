/* 轮播背景图片 */
$(function () {
	$.backstretch([
		  		  "https://cdnjson.com/images/2024/02/14/-108157873-049fb12823d0630d7.webp",
		  "https://cdnjson.com/images/2024/02/14/-102913422-07e02c9bcb76799c6.webp",
		  "https://cdnjson.com/images/2024/02/14/--107618199-0c0bb8b6ae8cd92c2.webp",
		  "https://cdnjson.com/images/2024/02/14/background268c3fff8cb7eb6b0.webp",
		  "https://cdnjson.com/images/2024/02/14/7849d6a0504e46b2a7da907ca1fb5309.71ur86xf7j4099323f43e3044ac7.webp",
		  
	], { duration: 30000, fade: 1500 });
});
'<script src="/live2d-widget/autoload.js"></script>'
/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
	var OriginTitile = document.title;
	var titleTime;
	document.addEventListener('visibilitychange', function() {
	  if(document.hidden) {	
		document.title = '你猜猜我有没有更新(￣y▽,￣)╭ ';
		clearTimeout(titleTime);
	  } else {
		document.title = '当然没有更新 咕~咕~咕~';
		titleTime = setTimeout(function() {
		  document.title = OriginTitile;
		}, 2000);
	  }
	});
  }
