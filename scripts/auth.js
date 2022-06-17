//declare and initialize



//DOM CONTENT LOADED
window.addEventListener('DOMContentLoaded',()=>{
    //grab submit btn
    const submit_btn = document.querySelector('#submit-btn');
    const page_btn = document.querySelector("#change-page");

    //login submit
    submit_btn.addEventListener('click',()=>{
        //on submit click
        const username = document.querySelector('#username-input').value;
        const password = document.querySelector('#password-input').value;
        if(!username || !password) {
            alert("empty fields");
        }
        loginUser(username,password);
    })

    //change to signup
    page_btn.addEventListener('click',()=>{
        signUp(page_btn,submit_btn)
    })
})






//Functions

const loginUser = async (username,password) =>{
    console.log(username,password);
}



//
const signUp = (page_btn,submit_btn) =>{
    //change submit btn text
    submit_btn.innerText = "Signup";
    //change page btn text
    page_btn.innerText = "Login Instead";
    //turn page btn to go back to login
    page_btn.addEventListener('click',() => location.reload());

    //grab div
    const hero = document.querySelector("#freeSpace");
    //make elements
    const cPass = document.createElement('input');
    cPass.classList.add("inputBox");
    cPass.placeholder = "confirm password";
    cPass.id = "confirm-input"
    cPass.type = "password";
    cPass.setAttribute("required",'');

    const companyName = document.createElement("input");
    companyName.classList.add("inputBox");
    companyName.placeholder = "company";
    companyName.id = "company-input"
    companyName.type = "text";
    companyName.setAttribute("required",'');

    //render elements
    setTimeout(()=>{
        hero.appendChild(cPass);
        hero.appendChild(companyName);
    },25);

}