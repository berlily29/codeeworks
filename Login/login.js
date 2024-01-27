
  document.getElementById("showpass").addEventListener("click", ()=> {
    var x = document.getElementById("password");

    if(x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }

  });


    let login = document.querySelector("form");

    login.addEventListener('submit',(e) => {e.preventDefault();
        document.querySelector("#login").value = "Logging in..";
        document.getElementById("loading").style.display = "flex"; 
    
        let data = new FormData(login);
        

        fetch('https://script.google.com/macros/s/AKfycbxzbTFmxrN90o7sO0WiGvENskChLedjlcxXhYzBt3LpFUwrGGZiNoqW6l8ev6NTIHdr/exec', {
            method: "POST",
            body: data
        }).then(res=> res.text()).then(data => 
            {
            
            document.querySelector("#msg").innerHTML = data
            document.querySelector('#login').value = "Login"
            let email = this.email.value
            
           
            localStorage.setItem("loggedEmail",email)
            document.getElementById("loading").style.display = "None"; 
            login.reset();

            if (data == "Logged...") {
             
                
                window.top.location.href='https://codeeworks.bitbucket.io/dashboard.html'
                //window.top.location.href='http://127.0.0.1:5500/dashboard.html'
                
            
            }
            


        
        })
    }); 

