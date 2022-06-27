const btn = document.getElementsByClassName('.post-btn');
// if (localStorage.getItem('제목')) {
//     var title = localStorage.getItem('제목')
// }
// if (localStorage.getItem('메뉴')) {
//     var menu = localStorage.getItem('메뉴')
// }
// if (localStorage.getItem('온도')) {
//     var temp = localStorage.getItem('온도')
// }
// if (localStorage.getItem('크기')) {
//     var size = localStorage.getItem('크기')
// }
// let myData = {
//     "title": title,
//     "menu": menu,
//     "temp": temp,
//     "size": size
// };

// const init = {
//     method: "GET",
//     body: JSON.stringify({
//         "title": title,
//         "menu": menu,
//         "temp": temp,
//         "size": size
//     }),
//     headers: {
//         "Content-Type": "application/json"
//     },
// }
btn.addEventListener('click', function() {
    let title = localStorage.getItem('제목')
    let menu = localStorage.getItem('메뉴')
    let temp = localStorage.getItem('온도')
    let size = localStorage.getItem('크기')

    (function ($) {
        $.ajax({
            url: "/result",
            type:"POST",
            dataType: "html",
            data: {
                ti : title,
                me : menu,
                te : temp,
                si : size
            }
        }).done(function (response) {
            $('.Arrival-text').text(response);
        });
    })(jquery);
});

// var a = "test123";
// function sendMyDataToServer () {
//     $.ajax({
//         url: "/report",
//         data: {        
//             "test":a
//         },
//         method: "GET",
//         dataType:"json"
//     })
// }