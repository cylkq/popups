/* 创建元素节点 */
var div = document.createElement("div");
div.id = 'layerId';
div.style.position = 'fixed';
div.style.top = '0';
div.style.zIndex = '998';
document.body.appendChild(div);
document.body.insertBefore(div, document.body.firstElementChild);

/* 弹出层调用方法 */
var layer = {
	show : function (info,type) 
	{
		var timestamp = (new Date()).valueOf(); 
		var html = htmlInfo(info,timestamp);
		var popup = cssInfo(html,type,timestamp,top);
		animates(70,timestamp,1);
		var timeout=setTimeout(function () {
			animates( -80,timestamp,0);
			var timeout=setTimeout(function () {
	        	document.getElementById('layerId').removeChild(document.getElementById(timestamp));
			}, 1000);	
    	}, 3000);
	}
}

/* 拼接html内容 */
function htmlInfo(info,timestamp)
{
	var html = "<div id='" + timestamp + "' style='position:fixed;top:-50px;'>" + info + "<div>";
	return html;
}

/* 赋值css内容 */
function cssInfo(html,type,timestamp,top)
{
	var bg = type == 0 ? '#f9dfdd' : '#dee7f3';
	document.getElementById('layerId').innerHTML = document.getElementById('layerId').innerHTML + html;
	winWidth = document.body.clientWidth;
	document.getElementById(timestamp).style.width = '350px';
	document.getElementById(timestamp).style.height = '45px';
	document.getElementById(timestamp).style.lineHeight = '45px';
	document.getElementById(timestamp).style.textAlign = 'center';
	document.getElementById(timestamp).style.fontSize = '16px';
	document.getElementById(timestamp).style.zIndex = '999';
	document.getElementById(timestamp).style.boxShadow  = '0 0 6px #d5d5d5';
	document.getElementById(timestamp).style.color = '#333333';
	document.getElementById(timestamp).style.marginLeft = (winWidth/2 - 350/2) + 'px';
	document.getElementById(timestamp).style.background = bg;
	document.getElementById(timestamp).style.top = top + 'px';
}

/* js 动画 */
function animates(n,t,s)
{
	var timer = null;
	var obj = document.getElementById(t);
	var speed = s == 1 ? 3 : -3 ;
	clearInterval(timer);
	timer=setInterval(function(){
		if (s == 1){
			if (obj.offsetTop >= n) {
				clearInterval(timer);
			} else {
				obj.style.top = obj.offsetTop + speed + 'px';
			}
		} else {
			if (obj.offsetTop <= n) {
				clearInterval(timer);
			} else {
				obj.style.top = obj.offsetTop + speed + 'px';
			}			
		}	
	},10);
}
