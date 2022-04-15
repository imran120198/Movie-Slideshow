function login(event){
    event.preventDefault()

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let User = JSON.parse(localStorage.getItem("User"));

    for(let i=0;i<User.length;i++){
        if(User[i].email == email && User[i].password == password){
            window.location.href = "index.html";
            break;
        }
        else{
            alert("Invalid Credentials")
        }
    }

}