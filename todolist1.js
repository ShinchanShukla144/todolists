document.querySelector('#enter').addEventListener('click', addItemToList);//event to click button 
document.querySelector('#userInput').addEventListener('keyup', addItemToList1);

function addItemToList1(e){
    
    if(e.keyCode === 13){
        e.preventDefault();
        if(document.getElementById('userInput').value.length > 0){
            createItemList();
            showAlert('ITEM ADDED', 'success');
        }else{
            alert("please, fill the field!!");
        }
    }
 
}
    
function addItemToList(){

    if(document.getElementById('userInput').value.length > 0){
        createItemList();
        showAlert('ITEM ADDED', 'success');
    }else{
        alert("please, fill the field!!");
    }
}

//create Li tag
function createItemList(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(document.getElementById('userInput').value));
    document.querySelector('ul').appendChild(li);
    document.getElementById('userInput').value = "";

    

//Add del Button
var delBtn = document.createElement('button');
delBtn.appendChild(document.createTextNode("DEL"));
li.appendChild(delBtn);

delBtn.addEventListener('click', deleteItemList);//event to del items


//delte item
function deleteItemList(){
    li.classList.add('delete');
    showAlert('ITEM DELETED', 'success');

}
    

}

function showAlert(message, className){
    var div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    var form = document.querySelector('.userInput1');
    form.insertBefore(div,form.childNodes[0]);

    setTimeout(() => document.querySelector('.alert').remove(), 2000);   
}
