// const inputBox = document.querySelector("#inpubox");
// const listcontainer = document.querySelector("#list-container")
// function addTask(){
//   if(inputBox.value === ''){
//     alert('You Must Write Something')
//   }
//   else{
//     let li = document.createElement("li");
//       li.innerHTML = inputBox.value;
//     listcontainer.appendChild(li);
//   }
// }


const inputBox = document.querySelector("#inputBox"); // Correct ID
const listContainer = document.querySelector("#list-container");

function addTask() {
  if (inputBox.value === '') {
    alert('You Must Write Something');
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7"
li.appendChild(span)
    // Clear the input field after adding the task
    // inputBox.value = '';
  }
  inputBox.value = '';
  saveData();
}
listContainer.addEventListener("click",function(e){
  if(e.target.tagName.toLowerCase() === "li"){
    e.target.classList.toggle("checked")
    saveData();
  }
else if(e.target.tagName.toLowerCase() === "span"){
  e.target.parentElement.remove();
  saveData();

}
},false)

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();