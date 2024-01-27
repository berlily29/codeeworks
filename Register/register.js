
  document.getElementById("showpass").addEventListener("click", ()=> {
    var x = document.getElementById("password");

    if(x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }

  });


    let register = document.querySelector("form");

    register.addEventListener('submit',(e) => {e.preventDefault();
        document.querySelector("#register").value = "Checking..";

    
        let data = new FormData(register);
        
        fetch('https://script.google.com/macros/s/AKfycbxG74q9jGUdruoe9oxDQVxjOUmNkCR3HLe8JwGWN1OGgvDs2h2ItSxqYKi6UN8Jrb6QAg/exec', {
            method: "POST",
            body: data
        }).then(res=> res.text()).then(data => 
            {

            document.querySelector("#msg").innerHTML = data
            document.querySelector('#register').value = "Register"
            register.reset();

        
        })
    }); 

