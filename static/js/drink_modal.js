var target = document.querySelectorAll('.drink-box');
var btnPopClose = document.querySelectorAll('.btn_close');
var targetID;

for (var i = 0; i < target.length; i++) {
    target[i].addEventListener('click', function () {
        targetID = this.getAttribute('href');
        document.querySelector(targetID).style.display = 'block';
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
        history.go(1); 
        };
    });
}


// 팝업 닫기
for (var j = 0; j < target.length; j++) {
    btnPopClose[j].addEventListener('click', function () {
        this.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
    });
}

