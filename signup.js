const emailInput =document.querySelector("#email");
const passwordInput =document.querySelector("#password")
const nameInput =document.querySelector("#name")
const buttonInput =document.querySelector(".btn")
//lay gia tri
buttonInput.addEventListener('click',
(e)=>{
    e.preventDefault();
    const emailValue =emailInput.value 
    const passwordValue =passwordInput.value
    const nameValue =nameInput.value
    if(emailValue.length ===0){
        alert('please enter your email')    }
     if(nameValue.length ===0){
            alert('please enter your name')    }      
    if(passwordValue.length ===0){
                alert('please enter your password')    }  

    // đóng gói dữ liệu 
    else{

        const users={
            email:emailValue,
            password:passwordValue,
            name:nameValue,
        };
        console.log(users);
        //chuyen doi ve json
        const userJson =JSON.stringify(users);
        console.log(userJson);
        //day vao LocalStorage
        localStorage.setItem("users", userJson);
       alert("yeahhh thanh cong hehehhe")
       window.location.href="./index.html";
    }
}
)
