const api_url = 
      "https://script.google.com/macros/s/AKfycbzuliniUGbpsy1QVut5PUdmjNeq2ZQpr_XDeMEsPgO-czXEHxQPiJpF5Qeb2Uh7ig/exec";
 

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
    for (let r of data.data) {{
            if (r.user == thisUser) {
                let curr_month = new Date().getMonth() + 1
                let curr_year = new Date().getFullYear()
                
                let created = r.timestamp.split("T")[0] + " | " + (r.timestamp.split("T")[1]).split(".")[0]



                let duedate = r.due.split("T")[0] 
                if(duedate.split("-")[1] == curr_month && duedate.split("-")[0] == curr_year ) {
                tab += `
                <div class="todo-item">
                    
                    <h2> ${r.task} </h2>
                    <br>
                    <small><b>CREATED: </b>  ${created}</small> 
                    <small><strong> DUE:</strong> ${duedate}   </small>
                </div>
                    `
                }
            }
        //} 
    }
    
    document.getElementById("todo").innerHTML = tab;
    document.getElementById("body").style.overflow = "auto"
    document.getElementById("splash").style.display = "none"
}
}
 

