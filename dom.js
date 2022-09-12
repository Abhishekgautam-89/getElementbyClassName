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
// var itemList = document.querySelector('#items');
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
// console.log(itemList.previousSibling);
// previousElementsibling
// console.log(itemList.previousElementSibling);

// create Element
// create a div
// var newDiv = document.createElement('div');
// newDiv.className='Hello';
// newDiv.id='Hello1';
// newDiv.setAttribute('title','Hello Div');
// var newDivText = document.createTextNode('Hello');
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// var newDiv1 = document.createElement('div');
// newDiv1.className = 'Hello';
// var newText = document.createTextNode('Hello');
// newDiv1.appendChild(newText);

// var container1 = document.querySelector('div .list-group');
// var l1= document.querySelector('div li');

// container1.insertBefore(newDiv1, l1);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var items = document.getElementsByClassName('list-group-item');

itemList.addEventListener('click', removeItem);

form.addEventListener('submit', addIem);

function addIem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var newDescription = document.getElementById('description').value;

    var li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem,' '));
    li.appendChild(document.createTextNode(newDescription));

    var deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn); 
    // to append button
    var editBtn = document.createElement('button');
    editBtn.className='btn btn-info btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// to create multiple buttons
for(var i=0; i<items.length; i++){
    var editBtn = document.createElement('button');
    editBtn.className='btn btn-info btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    items[i].appendChild(editBtn);
}

var filter = document.getElementById('filter');

filter.addEventListener('keyup', filterItems);
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var list1 = itemList.getElementsByTagName('li');
    
    
    Array.from(list1).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var descriptionItems = item.childNodes[1].textContent;
        if((itemName.toLowerCase().indexOf(text) !=-1) ||(descriptionItems.toLowerCase().indexOf(text) !=-1) ) {
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
        
    });        
}