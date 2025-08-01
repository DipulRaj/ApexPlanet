
// -------------registration form---------------

let user = document.querySelector("#name");
let email = document.querySelector("#email");
let reBtn = document.querySelector("#re-btn");
let message = document.getElementById('message');
let msg = document.querySelector("#msg");


let form = document.querySelector("form");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    if(user.value==="" || email.value===""){
        console.log("username required");
        alert("All fields are required");
        return false;
    }

    if (emailRegex.test(email.value)) {
        message.style.color = 'green';
        setTimeout(()=>{
            message.textContent = 'Valid email address!';
            msg.style.display='block';
        },500);
    }else{
        message.style.color = 'red';
        message.textContent = 'Invalid email address. Please try again.';
        return false;
    }
    
});


// -------------toDo List---------------

let toDoBtn = document.querySelector("#toDo-btn");

toDoBtn.addEventListener("click", (event)=>{

    let task = document.querySelector("#task").value;
    let list = document.querySelector("#list");

    let dltBtn = document.createElement('button');
    dltBtn.textContent = 'Delete';
    dltBtn.setAttribute('id','delete-btn');

    let li = document.createElement('li');
    li.textContent = task;
    li.appendChild(dltBtn);
    list.appendChild(li);
    li.classList.add('liStyle');

   list.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const listItem = event.target.closest("li");
      if (listItem) {
        listItem.remove();
      }
    }
   });

   setTimeout(()=>{
    let task = document.querySelector("#task").value = " ";
   },400)

});