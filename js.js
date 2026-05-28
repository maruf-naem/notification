let btns = document.querySelectorAll(".buttons button");
let messageShow = document.querySelector(".notification");
let successBtn = document.querySelector("#btn1");
let errorBtn = document.querySelector("#btn2");
let invalidBtn = document.querySelector("#btn3");
let success = "Thank you! Successfully Submited";
let error = "Ops! Please Try Again";
let invalid = "Ahh, Invalid Input"


btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let notifications = document.createElement("div");
        notifications.classList.add("toast");
        if(btn === successBtn){
            notifications.innerHTML = success;
            notifications.classList.add("success");
        } else if(btn === errorBtn) {
            notifications.innerHTML = error;
            notifications.classList.add("error");
        } else {
            notifications.innerHTML = invalid;
            notifications.classList.add("invalid");
        }
        messageShow.appendChild(notifications);
        setTimeout(() =>{
            notifications.remove()
        }, 3000)
        console.log("hello");
    })
})
