/**
 * @author youxuan  E-mail:xuanyouwu@163.com
 * @Description
 * @Company Beijing dsb
 */
/*var xx = 'hello';
console.log(xx);
//alert("type:"+typeof(xx));

xx.concat('xxx');*/
//alert("xx:"+xx+"  xx1:"+xx.concat('xxx'));

//var arr=['x','y'];
//alert('arr type:'+(typeof(arr)));

// var arr = ['x', 'y'];
// var res = arr.shift();
// alert("arr:" + JSON.stringify(arr) + "  res:" + res);

// var arr2 = ['a', 'b', 'c', 'd'];
// delete arr2[3];
// alert("arr2:" + JSON.stringify(arr2) + " arr2:len:" + arr2.length);


// var arr3 = ['|', '||', '|||', '||||'];
// var res3=arr3.splice(1);//返回删除数量
// alert("arr3:" + JSON.stringify(arr3) + " arr3:len:" + arr3.length+" res3:"+res3.length);

//合并数组
/*var arr=['x','y','z'];
var arr2=['x','y','z'];
alert(arr.concat(arr2,arr2));

//合并字符串
var str='xx';
alert('str:'+str.concat('abc'));*/


/**
 * 匿名函数
 * @param x
 * @returns {*}
 */
/*var x = function (x) {
  return x;
}
alert(x(11));*/


/**
 *  定义一个有名称的函数
 * @param res
 * @returns {*}
 */
/*
function toast(res) {
  return res;
}

alert(toast('abc'));


var f = function (res) {
  return 'xx' + res;
}

var x = function xx(res) {
  return 'yyy' + res;
}
*/

/*var obj={};*/
/*obj.name='张三';*/
/*obj['age']=13;*/
/*console.log(obj);*/

/*var obj2={name:'李四',age:24};*/
/*console.log(obj2);*/

//对象的删除和修改
/*var obj={name:"张三",age:24};
obj.age=25;
delete  obj.name;
console.log(obj);*/


//对象的增加方法
// var obj={name:"张三",age:24};
// obj.intro=function () {
//   return "我是:".concat(obj.name).concat(",年龄:").concat(String(obj.age));
// };
// console.log(obj.intro());
//
// var div=document.getElementById('dix');
// alert('div:'+div.innerText);
// var divs=document.querySelectorAll(".dd li");
// /**
//  * 输出
//  * <li>1</li>
//  <li>2</li>
//  <li>3</li>
//  */
//
//
//
//
// var firstLi=document.querySelector(".dd li");
// /**
//  * <li>1</li>
//  */


/**
 * 访问元素的属性
 */
// var ddElement = document.getElementById('dd');
// var ddTagName = ddElement.tagName;
// var ddText = ddElement.innerText;
// var ddInnerHtml = ddElement.innerHTML;
// var ddParentName = ddElement.parentNode.nodeName;
// var ddpes = ddElement.previousElementSibling.tagName;
// console.log('\ntagName:' + ddTagName + ";\nddText:" + ddText + ";\nddInnerHtml:" + ddInnerHtml + ";\nddParent:" + ddParentName + ";\nddpes:" + ddpes);

//   //创建一个li node
// var newMember=document.createElement('li');
// //创建一个text node
// var textNode=document.createTextNode('hello');
// //将textnode插入li node
// newMember.appendChild(textNode);
// var parent=document.getElementById('dd');
// //在dd node下面添加li node
// parent.appendChild(newMember);

/**
 * window onload方法是dom窗体渲染方法
 */
/*window.onload=function () {
  var linkNode=document.getElementById('link');
  linkNode.addEventListener('click',function (e) {
    console.log(e);
  },false);

 /!* linkNode.onmouseover=function () {
    console.log('鼠标悬浮在上面了');
  };
  linkNode.onmousedown=function () {
    console.log("鼠标离开了");
  }
  linkNode.onclick=function () {
    console.log("点击了");
  }*!/
}*/

// window.onload=function () {
//   var ul=document.querySelector('.list_group');
//   ul.addEventListener('click',function (e) {
//     alert("alt"+e.target.alt);
//   },false);
// }


