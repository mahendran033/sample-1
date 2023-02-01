function validate(){
    console.log("mahiii")
    var user= document.getElementById("Username").value
    var pass= document.getElementById("password").value
    if(user=="admin" &&pass=="user")
    {
        window.open("./index.html")
        // return false;
    }
    else
    {
        alert("Login failed");
    }
}
