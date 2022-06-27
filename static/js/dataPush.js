$(function () {
    $('.select_button').on('click', function () {
        var img = $('.Content-cover-img img').attr("src");
        var title = $(".Content-title").text();
        var menu = $("input[name=menu]:checked").val();
        var temp = $("input[name=temp]:checked").val();
        var size = $("input[name=size]:checked").val();
        var price1 = $("#totalPrice").text();
        var price2 = $("#totalPrice2").text();
        var price3 = $("#totalPrice3").text();
        if(parseInt(price1)>parseInt(price2) && parseInt(price1)>parseInt(price3)){
            localStorage.setItem('가격', price1);
        }
        if(parseInt(price2)>parseInt(price1) && parseInt(price2)>parseInt(price3)){
            localStorage.setItem('가격', price2);
        }
        if(parseInt(price3)>parseInt(price2) && parseInt(price3)>parseInt(price1)){
            localStorage.setItem('가격', price3);
        }
        if(parseInt(price3)==parseInt(price2) &&parseInt(price3)==parseInt(price1)){
            localStorage.setItem('가격', 3500);
        }
        localStorage.setItem('사진', img);
        localStorage.setItem('제목', title);
        localStorage.setItem('메뉴', menu);
        localStorage.setItem('온도', temp);
        localStorage.setItem('크기', size);
        var color = localStorage.getItem('색상');
        if(color == 'red') {
            location.href = './plselected_red'; //색상 별로 if문 나눠서 해야함
        }
        if(color == 'yellow') {
            location.href = './plselected_yellow'; //색상 별로 if문 나눠서 해야함
        }
        if(color == 'green') {
            location.href = './plselected_green'; //색상 별로 if문 나눠서 해야함
        }
        if(color == 'blue') {
            location.href = './plselected_blue'; //색상 별로 if문 나눠서 해야함
        }
        if(color == 'purple') {
            location.href = './plselected_purple'; //색상 별로 if문 나눠서 해야함
        }
        if(color == 'white') {
            location.href = './plselected_white'; //색상 별로 if문 나눠서 해야함
        }
        if(color == 'black') {
            location.href = './plselected_black'; //색상 별로 if문 나눠서 해야함
        }
    })
})

let coffee = ['../static/img/drinkFinal/coffee.svg']
let tea = ['../static/img/drinkFinal/tea.svg']
let ade = ['../static/img/drinkFinal/ade.svg']

$('.backbtn').click(function(){
    if(localStorage.getItem('색상')){
        var color = localStorage.getItem('색상')
    }
    if(color == "red"){ // 다른 색에 붙여 넣을 것
        location.href="/plop_plselect_red";
    }
    if(color == "yellow"){ // 다른 색에 붙여 넣을 것
        location.href="/plop_plselect_yellow";
    }
    if(color == "green"){ // 다른 색에 붙여 넣을 것
        location.href="/plop_plselect_green";
    }
    if(color == "blue"){ // 다른 색에 붙여 넣을 것
        location.href="/plop_plselect_blue";
    }
    if(color == "purple"){ // 다른 색에 붙여 넣을 것
        location.href="/plop_plselect_purple";
    }
    if(color == "white"){ // 다른 색에 붙여 넣을 것
        location.href="/plop_plselect_white";
    }
    if(color == "black"){ // 다른 색에 붙여 넣을 것
        location.href="/plop_plselect_black";
    }
  })

$('.drink-box1 .boxdiv img').attr("src", coffee);
$('.drink-box2 .boxdiv img').attr("src", tea);
$('.drink-box3 .boxdiv img').attr("src", ade);
$('.pop-coffee').attr("src", coffee);
$('.pop-tea').attr("src", tea);
$('.pop-ade').attr("src", ade);