window.onload = function() {
    // function send() {
    //     let xhr = new XMLHttpRequest();
    //     xhr.open("GET", "http://localhost:8080/captcha");
    //     xhr.withCredentials = false;
    //     xhr.send();
    //     xhr.onreadystatechange = function() {
    //         if(xhr.readyState == 4 ) {
    //             console.log(xhr.response)
    //             let code = JSON.parse(xhr.response);
    //             sessionStorage.setItem("captcha", code.text)
    //             document.querySelector(".captcha").innerHTML = code.data;
    //         }
    //     }
    // }
    // send();
    $.http({
        method: "GET",
        url: "http://localhost:8080/captcha",
    }, function(code) {
        document.querySelector(".captcha").innerHTML = code.data;
        sessionStorage.captcha = code.text;
    })
    

    let inputCaptcha = document.querySelector(".input-captcha");
    inputCaptcha.addEventListener("change", function(e) {
        console.log(e.target.value)
        if(e.target.value == sessionStorage.captcha.toLowerCase()) {
            console.log("success")
            alert("success");
        }
    })

    let list = document.querySelectorAll(".change-captcha");
    for(let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function(e) {
            $.http({
                method: "GET",
                url: "http://localhost:8080/captcha",
            }, function(code) {
                document.querySelector(".captcha").innerHTML = code.data;
                sessionStorage.captcha = code.text;
            })
        })
    }

    let sendCode = document.querySelector(".send-code");
    sendCode.addEventListener("click", function(event) {
        $.http({
            method: "GET",
            url: "http://localhost:8080/message"
        }, function(result) {
            console.log(result)
            alert(result.data);
        })
    })


}