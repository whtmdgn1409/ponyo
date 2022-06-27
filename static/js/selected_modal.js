var selectedBtn = document.querySelector('.selected_btn');

selectedBtn.addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
})

var orderBtn = document.querySelector('.order');

orderBtn.addEventListener('click', function(){
    location.href = '/set_phoneNum';
})