setTimeout(function(){
  location.href='/orderCheck';
}, 12000);

if(localStorage.getItem('사진')){
  var img = localStorage.getItem('사진')
}
$(".pli_cover").attr("src", img);
