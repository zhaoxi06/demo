// JavaScript Document
function doMove(obj,attr,dir,target,endFn){
		dir = parseInt(getStyle(obj,attr))<target?dir:-dir;
		clearInterval(obj.timer);
		obj.timer = setInterval(function (){
			var speed = parseInt(getStyle(obj,attr))+dir;	
			
			if(speed>target&&dir>0 || speed<target&&dir<0){
				speed = target;	
			}
			obj.style[attr] = speed+'px';
			
			if(speed == target){
				clearInterval(obj.timer);	
				/*if(endFn){
					endFn();
				}*/
				endFn && endFn();
			}
		},80);
	};
function shake ( obj, attr, endFn ) {
	
	var pos = parseInt( getStyle(obj, attr) );			// 有隐患的
	
	var arr = [];			// 10, -10, 8, -8 ..... 0
	var num = 0;
	var timer = null;
		
	for ( var i=10; i>0; i-=2 ) {
		arr.push( i, -i );
	}
	arr.push(0);
		
	clearInterval( obj.shake );
	obj.shake = setInterval(function (){
		obj.style[attr] = pos + arr[num] + 'px';
		num++;
		if ( num === arr.length ) {
			clearInterval( obj.shake );
			obj.flag = true;
			endFn && endFn();
		}
	}, 50);
}
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
};
function opacity(obj,v,starter,target,eFn){	//opacity(aLi[num],0.1,0)
	v = starter<target?v:-v;
	var alpha = starter;
	clearInterval(obj.alpha);
	obj.alpha = setInterval(function(){
		//var opa = parseInt(getStyle(obj,opacity))+v;alert(opa);		透明度不能获取
		alpha += v;
		
		if(alpha<0){
			alpha = 0;
		}	
		if(alpha>1){
			alpha = 1;	
		}
		obj.style.opacity = alpha;
		if(alpha===0||alpha===1){
			clearInterval(obj.alpha);
			eFn && eFn();
		}
	},60);
}
function toTwo(n){
	return n<10? '0'+n :''+n;	
}
