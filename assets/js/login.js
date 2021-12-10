const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

 loginButton.addEventListener("click", (e) => {
    e.preventDefault();

     const email = loginForm.email.value;
     const password = loginForm.password.value;

     if (email ==="admin@gmail.com" && password === "pass") {
         location.href="admin/";
     } else if (email ==="teacher@gmail.com" && password === "pass") {
         location.href="/teacher";
     } else if (email ==="intern@gmail.com" && password === "pass"){
         location.href="/intern";
     }else{
         alert("Incorrect email or password.");
     }
 })

