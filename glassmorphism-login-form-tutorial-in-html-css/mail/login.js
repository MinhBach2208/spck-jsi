const emailInput =document.querySelector("#email");
const passwordInput =document.querySelector("#password")
const buttonInput =document.querySelector("#btn");
//chuyen doi json sang object
const usersInfo =JSON.parse(localStorage.getItem("users"))
console.log(usersInfo.username);
console.log(usersInfo.password);
const email =usersInfo.email
const password =usersInfo.password
//lay value
buttonInput.addEventListener('click',
(e)=>{
    e.preventDefault();
    const emailValue= emailInput.value
    const passwordValue= passwordInput.value
    
    if (emailValue === email && passwordValue === password){
        alert("hey, dang nhap thanh cong");
        window.location="./index.html";

    }
    else{
        alert("dang nhap sai ruii =)))")
    }
}
)
