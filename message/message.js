
    let message = document.querySelector("form");
    /*** 
    message.addEventListener('submit',(e) => {e.preventDefault();
        document.querySelector("#message").value = "Sending...";

    
        let data = new FormData(message);
        
        fetch('', {
            method: "POST",
            body: data
        }).then(res=> res.text()).then(data => 
            {

            document.querySelector("#msg").innerHTML = data
            document.querySelector('#message').value = "Send Message"
            message.reset();

        })
    }); 
    */

