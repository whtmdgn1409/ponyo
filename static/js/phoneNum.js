const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있음.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있음.
const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있음.



let firstNum = '';
let previousKey = '';
let previousNum = '';

buttons.addEventListener('click', function (event) {
    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있음.
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옴.
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옴.

    if (target.matches('button')) {
        if (action === 'number') { //클릭된 HTML 엘리먼트의 클래스 네임이 'number'라면
            if (display.textContent === '') {
                display.textContent = buttonContent;
                firstNum = display.textContent // 첫번째 숫자를 변수에 할당
            } // 기존 계산기 숫자가 0이고, 오퍼레이터 버튼이 안눌린 상태의 분기
            else if (display.textContent !== '') {
                display.textContent = display.textContent + buttonContent;
            } // 기존 계산기 숫자가 0이 아니고, 오퍼레이터 버튼이 안눌린 상태의 분기
            // ex) 15를 누르기 위해 1을 누른 상태의 분기(두자리 연속 누르기 위한 코드)
        } 
        else if (action === 'delete') {
            if (display.textContent !== '') {
                display.textContent = display.textContent.slice(0, -1);
                firstNum = display.textContent;
            }
        }
    }
});