var target1 = document.querySelector('.btn_open1');
var target2 = document.querySelector('.btn_open2');
var target3 = document.querySelector('.btn_open3');
var target4 = document.querySelector('.btn_open4');
var target5 = document.querySelector('.btn_open5');
var btnPopClose1 = document.querySelector('.btn_close1');
var btnPopClose2 = document.querySelector('.btn_close2');
var btnPopClose3 = document.querySelector('.btn_close3');
var btnPopClose4 = document.querySelector('.btn_close4');
var btnPopClose5 = document.querySelector('.btn_close5');
var targetID1;
var targetID2;
var targetID3;
var targetID4;
var targetID5;


target1.addEventListener('click', function () {
  targetID1 = this.getAttribute('href');
  document.querySelector(targetID1).style.display = 'block';
});
target2.addEventListener('click', function () {
  targetID2 = this.getAttribute('href');
  document.querySelector(targetID2).style.display = 'block';
});
target3.addEventListener('click', function () {
  targetID3 = this.getAttribute('href');
  document.querySelector(targetID3).style.display = 'block';
});
target4.addEventListener('click', function () {
  targetID4 = this.getAttribute('href');
  document.querySelector(targetID4).style.display = 'block';
});
target5.addEventListener('click', function () {
  targetID5 = this.getAttribute('href');
  document.querySelector(targetID5).style.display = 'block';
});

// 팝업 닫기
var color = localStorage.getItem('색상');

if(color == "red"){
  btnPopClose1.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_red');
  });
  btnPopClose2.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_red');
  });
  btnPopClose3.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_red');
  });
  btnPopClose4.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_red');
  });
  btnPopClose5.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_red');
  });
}
else if(color == "yellow"){
  btnPopClose1.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_yellow');
  });
  btnPopClose2.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_yellow');
  });
  btnPopClose3.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_yellow');
  });
  btnPopClose4.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_yellow');
  });
  btnPopClose5.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_yellow');
  });
}
else if(color == "green"){
  btnPopClose1.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_green');
  });
  btnPopClose2.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_green');
  });
  btnPopClose3.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_green');
  });
  btnPopClose4.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_green');
  });
  btnPopClose5.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_green');
  });
}
else if(color == "blue"){
  btnPopClose1.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_blue');
  });
  btnPopClose2.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_blue');
  });
  btnPopClose3.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_blue');
  });
  btnPopClose4.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_blue');
  });
  btnPopClose5.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_blue');
  });
}
else if(color == "purple"){
  btnPopClose1.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_purple');
  });
  btnPopClose2.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_purple');
  });
  btnPopClose3.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_purple');
  });
  btnPopClose4.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_purple');
  });
  btnPopClose5.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_purple');
  });
}
else if(color == "black"){
  btnPopClose1.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_black');
  });
  btnPopClose2.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_black');
  });
  btnPopClose3.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_black');
  });
  btnPopClose4.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_black');
  });
  btnPopClose5.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_black');
  });
}
else if(color == "white"){
  btnPopClose1.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_white');
  });
  btnPopClose2.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_white');
  });
  btnPopClose3.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_white');
  });
  btnPopClose4.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_white');
  });
  btnPopClose5.addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.style.display = 'none';
    history.pushState(state, null, 'plop_plselect_white');
  });
}