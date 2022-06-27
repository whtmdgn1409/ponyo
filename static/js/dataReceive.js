if(localStorage.getItem('사진')){
    var img = localStorage.getItem('사진')
}
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
if(localStorage.getItem('가격')){
    var price = localStorage.getItem('가격')
}
$(".noselect img").attr("src", img);
$(".selected-title").text(title);
$("#menu").text(menu);
$("#temp").text(temp);
$("#size").text(size);
$("#pricetxt").text(price);
$("#totalprice").text(price);