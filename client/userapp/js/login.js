window.onload = function() {
    function send() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/captcha");
        xhr.withCredentials = false;
        xhr.send();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 ) {
                console.log(xhr.response)
                let code = JSON.parse(xhr.response);
                sessionStorage.setItem("captcha", code.text)
                document.querySelector(".captcha").innerHTML = code.data;
            }
        }
    }
    send();
    


    let list = document.querySelectorAll(".change-captcha");
    for(let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function(e) {
            send();
        })
    }

    let sendCode = document.querySelector(".send-code");
    sendCode.addEventListener("click", function(event) {
        
    })


}