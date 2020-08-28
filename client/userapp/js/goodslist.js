window.onload = function () {
    let xhr = new XMLHttpRequest() || ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("GET", "http://localhost:8080/");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {

            // setDataToUI
            let result = JSON.parse(xhr.response);
            console.log(result); //{code: 1, msg: "ok", data:[{},{}]}
            if (result.code == 0) { //接收到数据
                let ul = document.querySelector(".goodslist");

                let list = result.data;
                for (let i = 0; i < list.length; i++) {
                    let li = document.createElement("li");
                    li.classList.add("listitem");

                    // for(let key in list[i]) {
                    // if(key == "goodspic") {
                    let img = document.createElement("img")
                    img.src = list[i].goodspic;
                    li.appendChild(img);
                    // }
                    // if(key == "goodsname") {
                    let titleP = document.createElement("p");
                    titleP.innerHTML = list[i].goodsname;
                    titleP.classList.add("title")
                    li.appendChild(titleP)
                    // } 
                    // if(key == "active") {
                    let activeP = document.createElement("p");
                    if (list[i].active) {
                        activeP.style.padding = "2px 8px";
                        activeP.style.backgroundColor = "#cca976";
                    } else {
                        activeP.style.backgroundColor = "transparent"
                    }
                    activeP.innerHTML = list[i].active;
                    activeP.classList.add("active");
                    li.appendChild(activeP);

                    // }
                    // if(key == "goodsdesc") {
                    let descP = document.createElement("p");
                    descP.innerHTML = list[i].goodsdesc;
                    descP.classList.add("descri");
                    li.appendChild(descP);
                    // }
                    // }

                    let p = document.createElement("p");
                    let old = document.createElement("span");
                    old.innerHTML = list[i].oldprice;
                    old.classList.add("oldprice");
                    p.appendChild(old);
                    let news = document.createElement("span");
                    news.innerHTML = list[i].newprice;
                    news.classList.add("newprice");
                    p.appendChild(news);
                    li.appendChild(p)

                    let a = document.createElement("a");
                    a.innerHTML = "加入购物车";
                    li.appendChild(a)

                    ul.appendChild(li)

                }
            }
        }
    }
}