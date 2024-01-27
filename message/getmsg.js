const api_url = 
      "https://script.google.com/macros/s/AKfycbz4Pj5VOsWAdwM6YyFB54lgrz6c9Nb9bQoijFfq7Ev8kK0kUS-EXRjJmiAPLXaAWdaG/exec";
 

async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
  
    
    if (response) {
        
    }
    show(data);
}
getapi(api_url);
 
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    let tab = "";
    let thisUser = localStorage.getItem("loggedEmail")
    counter = 1; 
    for (let r of data.data) {{
            if (r.receiver == thisUser) { 
                
                //Thu Nov 16 2023 19:08:13 GMT+0800 (Standard na Oras sa Singapore)
                
                let msgdate = (r.datetime).split(" ")[1] + " " + (r.datetime).split(" ")[2] + ", " + (r.datetime).split(" ")[3]
                
        
                let msgtime = r.datetime.split(" ")[4]  
                if(counter == 1){
                tab += `
                <div class="row-msg">
                        <div class="msg-field"><h1> ${r.sender}</h1></div>
                        <div class="msg-field"><h1> ${msgdate}</h1></div>
                        <div class="msg-field"><h1> ${msgtime} </h1></div>
                        <div class="msg-field"><h1> ${r.message}</h1></div>
                    </div>
                        `
                } else { 
                    tab += `
                <div class="row-msg" id = "stripe">
                        <div class="msg-field"><h1> ${r.sender}</h1></div>
                        <div class="msg-field"><h1> ${msgdate}</h1></div>
                        <div class="msg-field"><h1> ${msgtime} </h1></div>
                        <div class="msg-field"><h1> ${r.message}</h1></div>
                    </div>
                        `
                }
            }
            counter++;
        //} 
    }

    document.getElementById("con-msg").innerHTML = tab;
    document.getElementById("splash-box").style.display = "none";

    
   
}
}
 

