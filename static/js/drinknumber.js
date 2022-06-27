function count(type) {
  // 결과를 표시할 element
  const resultElement1 = document.getElementById('result');
  const priceElement1 = document.getElementById('totalPrice');

  // 현재 화면에 표시된 값
  let number = resultElement1.innerText;
  let price = priceElement1.innerText;

  // 더하기/빼기
  if (type === 'plus') {
    number = parseInt(number) + 1;
    price = parseInt(price) + 3500;
  } else if (type === 'minus' && number != 0 && price !=0) {
    number = parseInt(number) - 1;
    price = parseInt(price) - 3500;
  }
  

  // 결과 출력
  resultElement1.innerText = number;
  priceElement1.innerText = price;
}
function count2(type) {
  // 결과를 표시할 element
  const resultElement2 = document.getElementById('result2');
  const priceElement2 = document.getElementById('totalPrice2');

  // 현재 화면에 표시된 값
  let number = resultElement2.innerText;
  let price = priceElement2.innerText;

  // 더하기/빼기
  if (type === 'plus') {
    number = parseInt(number) + 1;
    price = parseInt(price) + 3500;
  } else if (type === 'minus' && number != 0 && price !=0) {
    price = parseInt(price) - 3500;
  }

  // 결과 출력
  resultElement2.innerText = number;
  priceElement2.innerText = price;
}
function count3(type) {
  // 결과를 표시할 element
  const resultElement3 = document.getElementById('result3');
  const priceElement3 = document.getElementById('totalPrice3');

  // 현재 화면에 표시된 값
  let number = resultElement3.innerText;
  let price = priceElement3.innerText;

  // 더하기/빼기
  if (type === 'plus') {
    number = parseInt(number) + 1;
    price = parseInt(price) + 3500;
  } else if (type === 'minus' && number != 0 && price !=0) {
    number = parseInt(number) - 1;
    price = parseInt(price) - 3500;
  }

  // 결과 출력
  resultElement3.innerText = number;
  priceElement3.innerText = price;
}




//size 별로 금액 다르게 하기
$('.drink-size-small-1').click(function(){
  const priceElement1 = document.getElementById('totalPrice');
  const resultElement1 = document.getElementById('result');
  let number = resultElement1.innerText;
  let price = priceElement1.innerText;
  if(parseInt(price)>3500 * parseInt(number)){
    price = parseInt(price) - 500 *  parseInt(number);
    priceElement1.innerText = price;
  }
  else {
    priceElement1.innerText = price;
  }
})
$('.drink-size-medium-1').click(function(){
  const priceElement1 = document.getElementById('totalPrice');
  const resultElement1 = document.getElementById('result');
  let number = resultElement1.innerText;
  let price = priceElement1.innerText;
  price = parseInt(price) + 500 * parseInt(number);
  priceElement1.innerText = price;

})
$('.drink-size-small-2').click(function(){
  const priceElement2 = document.getElementById('totalPrice2');

  let price = priceElement2.innerText;
  if(parseInt(price)>3500){
    price = parseInt(price) - 500;
    priceElement2.innerText = price;
  }
  else {
    priceElement2.innerText = price;
  }
})
$('.drink-size-medium-2').click(function(){
  const priceElement2 = document.getElementById('totalPrice2');

  let price = priceElement2.innerText;
  price = parseInt(price) + 500;
  priceElement2.innerText = price;

})
$('.drink-size-small-3').click(function(){
  const priceElement3 = document.getElementById('totalPrice3');

  let price = priceElement3.innerText;
  if(parseInt(price)>3500){
    price = parseInt(price) - 500;
    priceElement3.innerText = price;
  }
  else {
    priceElement3.innerText = price;
  }
})
$('.drink-size-medium-3').click(function(){
  const priceElement3 = document.getElementById('totalPrice3');

  let price = priceElement3.innerText;
  price = parseInt(price) + 500;
  priceElement3.innerText = price;

})
