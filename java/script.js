const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        // to add a text 
        li.innerHTML = inputBox.value; 
        // to display the text in the list conatainer
        listContainer.appendChild(li);
        // to add delete bottom
        let span = document.createElement('span');
        // to add the delete icon
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    inputBox.value = '';
    // to save the data in the local storage
    saveData();
}
//  to remove the task
listContainer.addEventListener('click', function(e){
    // we have to write the name in the capital form (LI) , (SPAN)..
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// to store the user data in the local storage
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}
// to display the data when ever we open the wepsite
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
// to call the function..
showTask();
// Finally it's done.