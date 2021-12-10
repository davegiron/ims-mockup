const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();

//     const email = loginForm.email.value;
//     const password = loginForm.password.value;

//     if (email ==="admin@gmail.com" && password === "password") {
//         window.location.href="admin/index.html";
//     } else if (email ==="teacher@gmail.com" && password === "password") {
//         window.location.replace("/teacher");
//     } else if (email ==="intern@gmail.com" && password === "password"){
//         window.location.replace("/intern");
//     }else{
//         alert("Incorrect email or password.");
//     }
// })
function validate() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("user").value;
    if (user =="admin@gmail.com" && pass == "pass") {

        window.location.href="admin/index.html";
        return false
     } else if (user == "teacher@gmail.com" && pass == "pass") {
        window.location ="admin/index.html";

    } else if (user == "intern@gmail.com" && pass == "pass"){

        window.location ="admin/index.html";

    }else{
        alert("Incorrect email or password.");
     }
}


