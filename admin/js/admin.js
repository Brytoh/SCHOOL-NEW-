const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", function(e){

    e.preventDefault();


    const username =
    document.getElementById("username").value;


    const password =
    document.getElementById("password").value;



    if(username === "admin" && password === "12345"){


        localStorage.setItem(
            "adminLoggedIn",
            "true"
        );


        window.location.href =
        "dashboard.html";


    }


    else{


        document.getElementById("message").innerHTML =

        `

        <div class="alert alert-danger">

        Invalid username or password

        </div>

        `;


    }


});