var DeleteBtn = document.querySelector(".DeleteBtn");
var color = localStorage.getItem('색상');
DeleteBtn.addEventListener('click', function() {
    localStorage.removeItem('사진');
    localStorage.removeItem('제목');
    localStorage.removeItem('메뉴');
    localStorage.removeItem('온도');
    localStorage.removeItem('크기');
    localStorage.removeItem('가격');
    if(color == 'red')     location.href="/plop_plselect_red";
    if(color == 'yellow')  location.href="/plop_plselect_yellow";
    if(color == 'green')   location.href="/plop_plselect_green";
    if(color == 'blue')    location.href="/plop_plselect_blue";
    if(color == 'purple')  location.href="/plop_plselect_purple";
    if(color == 'white')   location.href="/plop_plselect_white";
    if(color == 'black')   location.href="/plop_plselect_black";
})