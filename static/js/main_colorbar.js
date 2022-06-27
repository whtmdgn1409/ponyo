

var colorbar = document.querySelectorAll(".animation08 div");
var text = document.querySelector(".ani-text")
var color;
var music = document.querySelector(".musicbarbody")
var musicbar = document.querySelectorAll(".music .bar")
for(var i=0; i<colorbar.length; i++){
    colorbar[i].addEventListener('click', function(){
        color = this.getAttribute('id');
        localStorage.setItem('색상',color);
        text.style.display = 'none';
        if(color == "red"){
            $('.colorbar').css({zIndex:3,opacity:0.3})
            $('.musicbarbody').css({zIndex:9000,display:'block'})
            $('.music .bar').css({backgroundColor:'#DC0101'})
            $('.music-text-prepend').prepend("빨간색");
            $('.music-text-prepend').css({color:'#DC0101'})
            setTimeout("location.href='plop_plselect_red'", 4000); //다른 색에 붙여 넣을 것
        }
        if(color == "yellow"){
            $('.colorbar').css({zIndex:3,opacity:0.3})
            $('.musicbarbody').css({zIndex:9000,display:'block'})
            $('.music .bar').css({backgroundColor:'#F5AC05'})
            $('.music-text-prepend').prepend("노란색");
            $('.music-text-prepend').css({color:'#F5AC05'})
            setTimeout("location.href='plop_plselect_yellow'", 4000);
        }
        if(color == "green"){
            $('.colorbar').css({zIndex:3,opacity:0.3})
            $('.musicbarbody').css({zIndex:9000,display:'block'})
            $('.music .bar').css({backgroundColor:'#026745'})
            $('.music-text-prepend').prepend("초록색");
            $('.music-text-prepend').css({color:'#026745'})
            setTimeout("location.href='plop_plselect_green'", 4000);
        }
        if(color == "blue"){
            $('.colorbar').css({zIndex:3,opacity:0.3})
            $('.musicbarbody').css({zIndex:9000,display:'block'})
            $('.music .bar').css({backgroundColor:'#0046A2'})
            $('.music-text-prepend').prepend("파랑색");
            $('.music-text-prepend').css({color:'#0046A2'})
            setTimeout("location.href='plop_plselect_blue'", 4000);

        }
        if(color == "purple"){
            $('.colorbar').css({zIndex:3,opacity:0.3})
            $('.musicbarbody').css({zIndex:9000,display:'block'})
            $('.music .bar').css({backgroundColor:'#52306C'})
            $('.music-text-prepend').prepend("보라색");
            $('.music-text-prepend').css({color:'#52306C'})
            setTimeout("location.href='plop_plselect_purple'", 4000);

        }
        if(color == "white"){
            $('.colorbar').css({zIndex:3,opacity:0.3})
            $('.musicbarbody').css({zIndex:9000,display:'block'})
            $('.music .bar').css({backgroundColor:'#E3E3E4'})
            $('.music-text-prepend').prepend("하얀색");
            $('.music-text-prepend').css({color:'#E3E3E4'})
            setTimeout("location.href='plop_plselect_white'", 4000);

        }
        if(color == "black"){
            $('.colorbar').css({zIndex:3,opacity:0.3})
            $('.musicbarbody').css({zIndex:9000,display:'block'})
            $('.music .bar').css({backgroundColor:'#000000'})
            $('.music-text-prepend').prepend("검정색");
            $('.music-text-prepend').css({color:'#000000'})
            setTimeout("location.href='plop_plselect_black'", 4000);

        }
    })
}
