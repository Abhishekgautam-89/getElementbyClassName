// var items = document.getElementsByClassName('list-group-item');
// console.log (items);
// items[2].style.backgroundColor='green';
// for(var i=0; i<items.length; i++){
//     items[i].style.fontWeight='bold';
// }
var item = document.getElementsByClassName('list-another');
for(var i=0; i<item.length; i++){
    item[i].style.color='red';
}
var li = document.getElementsByTagName('li');
console.log(li);
for (var i=0; i<li.length; i++){
    li[i].style.fontWeight='900';
    li[i].style.backgroundColor='yellow';
}
var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.backgroundColor='green';
var thirdItem= document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display='none';

var scndItem = document.querySelectorAll('.list-group-item');
// scndItem[1].style.color='green';
var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green';
}