function checkData()
{
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    //get data from localstorage

    localStorage.setItem('Email', getemail);
    localStorage.setItem('Password', getpass);

    if(email == getEmail)
    {
        if(pass == getPwd)
        {
            setTimeout(()=>{location.href='https://www.youtube.com/watch?v=jNoMQq_G5DA'},10);
        }
        else
        {
            alert("Login failed");
        }
    }
}