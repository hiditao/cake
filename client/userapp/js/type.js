// 导航点击事件，分类查询
let type = document.querySelector(".type");
let typelist = document.querySelectorAll(".type li");
console.log(typelist)

for(let i = 0; i < typelist.length; i++) {
    typelist[i].addEventListener("click", function(event) {
        for(let j = 0; j < typelist.length; j++) {
            typelist[j].firstElementChild.style.color = "#444";
        }
        console.log(event.target)
        event.target.style.color = "#ff3500";

        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/getbytype/"+ (i-1));
        xhr.response

        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200) {
                console.log("111110-----" + xhr.response)
                render(JSON.parse(xhr.response));
            }
        }
    })
}
// type.addEventListener("click", function(event) {
//     console.log("target-----------"+event.target)
//     // 排他法设置样式
//     for(let i = 0; i < typelist.length; i++) {
//         typelist[i].style.color = "#333";
//     }
//     event.target.style.color = "#ff3500";

    // 分类查询
    // 全部
    // if(event.target == type.firstElementChild) {
    //     let xhr = new XMLHttpRequest();
    //     xhr.open("GET", "localhost:8080/");
    //     xhr.send();
    //     xhr.onreadystatechange = function(){
    //         if(xhr.readyState == 4 && xhr.status == 200) {
    //             render(xhr.response);
    //         }
    //     }
    // } else {
        // let xhr = new XMLHttpRequest();
        // xhr.open("GET", "localhost:8080/getbytype/"+ findIndex(type, event.target));
        // xhr.send();
        // xhr.onreadystatechange = function(){
        //     if(xhr.readyState == 4 && xhr.status == 200) {
        //         render(xhr.response);
        //     }
        // }
    // }
// })



// function findIndex(parent, current) {
//     console.log(parent)
//     let index = -1;
//     for(let i = 0; i < parent.children.length; i++) {
//         if(current == parent.children[i]) {
//             index = i;
//             break;
//         } else {
//             index = -1;
//         }
//     }
//     return index;
// }

