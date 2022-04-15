function signup(event){
    event.preventDefault()

    let name = document.getElementById("name").value;
    let phone = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let signupObj = {

        name,
        phone,
        email,
        password,
    }

    if(name == "" || phone == "" || email == "" || password == ""){
        alert("Fill All details")
    }

    let arr;
    arr = localStorage.getItem("User")

    if(arr == null){
        arr = []
    }
    else{
        arr = JSON.parse(localStorage.getItem("User"))
        window.location.href = "login.html"
    }

    arr.push(signupObj)
    localStorage.setItem("User" , JSON.stringify(arr))
}