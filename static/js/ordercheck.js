//const mysql = require('mysql');
//const connection = mysql.createConnection({
//    host:"localhost",
//    user:"root",
//    password:"root",
//    database:"plop"
//});
//connection.connect(function(err) {
//    if(err) {
//        console.error('error connectioon: ' + err.stack);
//        return;
//    }
//    console.log('connected as id ' + connection.threadId);
//});

window.onload = function(){
    if(localStorage.getItem('제목')){
        var title = localStorage.getItem('제목')
    }
    if(localStorage.getItem('메뉴')){
        var menu = localStorage.getItem('메뉴')
    }
    if(localStorage.getItem('온도')){
        var temp = localStorage.getItem('온도')
    }
    if(localStorage.getItem('크기')){
        var size = localStorage.getItem('크기')
    }
//    connection.query('INSERT INTO "report" ("title","menu","temp","size") VALUES (title,menu,temp,size)');
    // customer = {
    //     'title' : title,
    //     'menu' : menu,
    //     'temp' : temp,
    //     'size' : size
    // }
//    jsonString = json.dumps(customer)
function dataclear(){
    localStorage.removeItem('사진');
    localStorage.removeItem('색상');
    localStorage.removeItem('제목');
    localStorage.removeItem('메뉴');
    localStorage.removeItem('온도');
    localStorage.removeItem('크기');
    localStorage.removeItem('가격');
}

//    sendCustomerInfoToServer(customer);
    setTimeout(dataclear, 10000);
    setTimeout("location.href='./'", 7000);

}

// async function sendCustomerInfoToServer () {
//     await fetch("/test", {
//         method: "POST",
//         body: JSON.stringify({
//            title: customer[title], 
//         })
//     } )
// } 
// $('body').on('click', function(){
//     window.print();
// })