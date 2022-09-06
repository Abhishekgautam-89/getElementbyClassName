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