// // var items = document.getElementsByClassName('list-group-item');
// // console.log (items);
// // items[2].style.backgroundColor='green';
// // for(var i=0; i<items.length; i++){
// //     items[i].style.fontWeight='bold';
// // }
// var item = document.getElementsByClassName('list-another');
// for(var i=0; i<item.length; i++){
//     item[i].style.color='red';
// }
// var li = document.getElementsByTagName('li');
// console.log(li);
// for (var i=0; i<li.length; i++){
//     li[i].style.fontWeight='900';
//     li[i].style.backgroundColor='yellow';
// }
// var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// // secondItem.style.backgroundColor='green';
// var thirdItem= document.querySelector('.list-group-item:nth-child(3)');
// // thirdItem.style.display='none';

// var scndItem = document.querySelectorAll('.list-group-item');
// // scndItem[1].style.color='green';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor='green';
// }
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentElement.parentElement.parentElement);

// firstchild
// console.log(itemList.firstChild);
// firstElementchild
// console.log(itemList.firstElementChild);
// lastChild
// console.log(itemList.lastChild);
// lastElementchild
// console.log(itemList.lastElementChild);

// nextSibling
// console.log(itemList.nextSibling);
// nextElementsibling
// console.log(itemList.nextElementSibling);
// previossibling
console.log(itemList.previousSibling);
// previousElementsibling
console.log(itemList.previousElementSibling);

// create Element
// create a div
var newDiv = document.createElement('div');
newDiv.className='Hello';
newDiv.id='Hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText = document.createTextNode('Hello');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

var newDiv1 = document.createElement('div');
newDiv1.className = 'Hello';
var newText = document.createTextNode('Hello');
newDiv1.appendChild(newText);

var container1 = document.querySelector('div .list-group');
var l1= document.querySelector('div li');

container1.insertBefore(newDiv1, l1);

