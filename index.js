const emailInput =document.querySelector("#email");
const passwordInput =document.querySelector("#password")
const buttonInput =document.querySelector("#btn");
//chuyen doi json sang object
const userInfo =JSON.parse(localStorage.getItem("users"))
console.log(userInfo.email);
console.log(userInfo.password);
const email =userInfo.email
const password =userInfo.password
//lay value
buttonInput.addEventListener('click',
(e)=>{
    e.preventDefault();
    const emailValue= emailInput.value
    const passwordValue= passwordInput.value
    
    if (emailValue === email && passwordValue === password){
        alert("hey, dang nhap thanh cong");
        window.location ="./trangchu.html";

    }
    else{
        alert("dang nhap sai ruii =)))")
    }
}
)