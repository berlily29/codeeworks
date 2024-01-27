
    let task = document.querySelector("form");

    task.addEventListener('submit',(e) => {e.preventDefault();
        let data = new FormData(task);

        document.querySelector("#task").value = "sending..";

        
        fetch('https://script.google.com/macros/s/AKfycbxb0SOYV3-VXB-hvuxQdN5Uz9dpKP4xBJK9McSKLSmh6PEJIorscrhk6vDZtiHML-6M/exec', {
            method: "POST",
            body: data
        }).then(res=> res.text()).then(data => 
            {
            
            document.querySelector("#msg").innerHTML = data
            task.reset();
            if (data == "Message sent!") {
                document.querySelector("#task").value = "Send Message ➤";
                window.top.location.href='https://codeeworks.bitbucket.io/message/messages.html'
                //window.top.location.href='http://127.0.0.1:5500/message/messages.html'
                
            }
            

        
        })
        
    }); 




