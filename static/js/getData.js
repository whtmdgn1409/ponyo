Response.CharSet = "utf-8"

let qr1 = ['../static/img/qr/1.png']
let qr2 = ['../static/img/qr/2.png']
let qr3 = ['../static/img/qr/3.png']
let qr4 = ['../static/img/qr/4.png']
let qr5 = ['../static/img/qr/5.png']
let qr6 = ['../static/img/qr/6.png']
let qr7 = ['../static/img/qr/7.png']
let qr8 = ['../static/img/qr/8.png']
let qr9 = ['../static/img/qr/9.png']
let qr10 = ['../static/img/qr/10.png']
let qr11 = ['../static/img/qr/11.png']
let qr12 = ['../static/img/qr/12.png']
let qr13 = ['../static/img/qr/13.png']
let qr14 = ['../static/img/qr/14.png']
let qr15 = ['../static/img/qr/15.png']
let qr16 = ['../static/img/qr/16.png']
let qr17 = ['../static/img/qr/17.png']
let qr18 = ['../static/img/qr/18.png']
let qr19 = ['../static/img/qr/19.png']
let qr20 = ['../static/img/qr/20.png']
let qr21 = ['../static/img/qr/21.png']
let qr22 = ['../static/img/qr/22.png']
let qr23 = ['../static/img/qr/23.png']
let qr24 = ['../static/img/qr/24.png']
let qr25 = ['../static/img/qr/25.png']
let qr26 = ['../static/img/qr/26.png']
let qr27 = ['../static/img/qr/27.png']
let qr28 = ['../static/img/qr/28.png']
let qr29 = ['../static/img/qr/29.png']
let qr30 = ['../static/img/qr/30.png']
let qr31 = ['../static/img/qr/31.png']
let qr32 = ['../static/img/qr/32.png']
let qr33 = ['../static/img/qr/33.png']
let qr34 = ['../static/img/qr/34.png']
let qr35 = ['../static/img/qr/35.png']

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
if(localStorage.getItem('색상')){
    var color = localStorage.getItem('색상')
}
if(title == "방구석 힙합클럽 초대장"){
    if(color == "red") {$('.QR').attr("src", qr1)}
    else if(color == "blue") {$('.QR').attr("src", qr18)}
}
else if(title == "스위트룸에 너랑 나 단둘이 있다면"){
    if(color == "red") {$('.QR').attr("src", qr2)}
    else if(color == "green") {$('.QR').attr("src", qr15)}
}
else if(title == "여기부터 저기까지 다 주세요"){
    if(color == "red") {$('.QR').attr("src", qr3)}
    else if(color == "blue") {$('.QR').attr("src", qr19)}
}
else if(title == "차가운 미소를 가진 도시의 킬러"){
    if(color == "red") {$('.QR').attr("src", qr4)}
    else if(color == "purple") {$('.QR').attr("src", qr24)}
}
else if(title == "그 해 우리는, 이별이 최선이었던거야"){
    if(color == "red") {$('.QR').attr("src", qr5)}
}
else if(title == "설레임 한도초과"){
    if(color == "yellow") {$('.QR').attr("src", qr6)}
    else if(color == "blue") {$('.QR').attr("src", qr17)}
}
else if(title == "이삿짐을 정리하다 발견한 의문의 상자"){
    $('.QR').attr("src", qr7)
}
else if(title == "락 페스티벌 피날레의 주인공"){
    if(color == "yellow") {$('.QR').attr("src", qr8)}
    else if(color == "black") {$('.QR').attr("src", qr27)}
}
else if(title == "완벽한 하루 만들기 프로젝트"){
    if(color == "yellow") {$('.QR').attr("src", qr9)}
    else if(color == "white") {$('.QR').attr("src", qr34)}
}
else if(title == "제발 말걸지 마세요; 알아서 할게요"){
    if(color == "yellow") {$('.QR').attr("src", qr10)}
    else if(color == "green") {$('.QR').attr("src", qr11)}
}

else if(title == "뉴욕 한복판을 활공하는 스파이더맨"){
    if(color == "green") {$('.QR').attr("src", qr12)}
    else if(color == "white") {$('.QR').attr("src", qr35)}
}
else if(title == "나는야 멍때리기 대회 우승자"){
    if(color == "green") {$('.QR').attr("src", qr13)}
    else if(color == "white") {$('.QR').attr("src", qr32)}
}
else if(title == "슬리데린의 저주 마법 배우기"){
    if(color == "green") {$('.QR').attr("src", qr14)}
    else if(color == "black") {$('.QR').attr("src", qr26)}
}
else if(title == "오픈카 타고 풀악셀 밟기"){
    $('.QR').attr("src", qr16)
}
else if(title == "비 내리는 날, 포장마차에서 혼술하기"){
    if(color == "blue") {$('.QR').attr("src", qr20)}
    else if(color == "black") {$('.QR').attr("src", qr30)}
}
else if(title == "나는 오늘 10캐럿 다이아몬드를 훔쳤다"){
    $('.QR').attr("src", qr21)
}
else if(title == "연극이 끝나고 난 뒤"){
    if(color == "purple") {$('.QR').attr("src", qr22)}
    else if(color == "black") {$('.QR').attr("src", qr28)}
}
else if(title == "바쁜 하루의 끝은 호텔 라운지에서 와인 한 잔"){
    if(color == "purple") {$('.QR').attr("src", qr23)}
    else if(color == "black") {$('.QR').attr("src", qr29)}
}
else if(title == "캠핑 의자에 앉아 밤하늘을 올려다봐요"){
    if(color == "purple") {$('.QR').attr("src", qr25)}
    else if(color == "white") {$('.QR').attr("src", qr33)}
}
else if(title == "한겨울, 이불 속에서 코코아 한 잔"){
    $('.QR').attr("src", qr31)
}
if(title == "바쁜 하루의 끝은 호텔 라운지에서 와인 한 잔"){
    const purple3 = "바쁜 하루의 끝은 호텔 라운지에서<br/> 와인 한 잔";
    document.getElementById("title-text").innerHTML=purple3;
}
else if(title == "이삿짐을 정리하다 발견한 의문의 상자"){
    const yellow2 = "이삿짐을 정리하다 발견한<br/> 의문의 상자";
    document.getElementById("title-text").innerHTML=yellow2;
}
else {
    document.getElementById("title-text").innerHTML=title;
}


var drink = menu + ", " +  temp + ", " +  size
$('.Terminal-text').text(color);
// $('.Arrival-text').text(title);

$('.Option-text').text(drink);

