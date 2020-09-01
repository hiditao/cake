window.onload = function() {

    let loginbtn = document.querySelector(".login");
    let regisbtn = document.querySelector(".register");

    loginbtn.addEventListener("click", function(event) {
        let res = $.ajax({
            method: "POST",
            url: "http://localhost:8080/login",
            data: {

            }
        })
    })

    regisbtn.addEventListener("click", function(event) {
        
    })

}