
    let task = document.querySelector("form");

    task.addEventListener('submit',(e) => {e.preventDefault();
        let data = new FormData(task);
        
        document.getElementById("asp").style.display = "flex"
        fetch('https://script.google.com/macros/s/AKfycbzzA4xHiW8gChJPjSRObIS_Gwvqj0t9BHJ6jMkXojzBmVSqTH0nMX1RsC2mfqxNYrJw/exec', {
            method: "POST",
            body: data
        }).then(res=> res.text()).then(data => 
            {
            
            document.querySelector("#msg").innerHTML = data
            task.reset();
            if (data == "Task Created!") {
             
                window.top.location.href='https://codeeworks.bitbucket.io/dashboard.html'
                //window.top.location.href='http://127.0.0.1:5500/dashboard.html'
                
            }
            

        
        })
    }); 




    
    let removeTask = document.querySelector("#removeTask");

    removeTask.addEventListener('submit',(e) => {e.preventDefault();
        let data = new FormData(removeTask);
        console.log(data)
       

        
            
        
        /*** 
        fetch('https://script.google.com/macros/s/AKfycbwuhSto_ucTdRHCClEwLQkMDnz75X0T106Nxj_VitvmOQ3HM_za-eSZd6il99E1M_fUJA/exec', {
            method: "POST",
            body: ids
        }).then(res=> res.text()).then(data => 
            {
            
            document.querySelector("#msg").innerHTML = data
            task.reset();
            if (data == "Task Created!") {
             
                //window.top.location.href='https://codeeworks.bitbucket.io/todo/sheets.html'
                window.top.location.href='http://127.0.0.1:5500/dashboard.html'
                
            }
            

        
        })
        */
    }); 



