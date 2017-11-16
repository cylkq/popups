/* 弹出层插件 */

document.write("<div id='layerId' style='position:absolute;'></div>");

var layer = {
	show : function (info,type) 
	{
		var timestamp = (new Date()).valueOf(); 
		var top = getScrollTop();
		var html = htmlInfo(info,timestamp);
		var popup = cssInfo(html,type,timestamp,top);
		animates(top + 70,timestamp);
		var timeout=setTimeout(function () {
        	document.getElementById('layerId').removeChild(document.getElementById(timestamp));
    	}, 3000);

	}
}

/* 获取窗口滚动条高度 */
function getScrollTop()
{
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body)
    {
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}

/* 拼接html内容 */
function htmlInfo(info,timestamp)
{
	var html = "<div id='" + timestamp + "' style='position:absolute;top:-50px;'>" + info + "<div>";
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
function animates(n,t)
{
	var timer = null;
	var obj = document.getElementById(t);
	clearInterval(timer);
	timer=setInterval(function(){
		var speed = 3;
		if (obj.offsetTop >= n) 
		{
			clearInterval(timer);
		}
		else
		{
			obj.style.top = obj.offsetTop + speed + 'px';
		}
	},10);
}