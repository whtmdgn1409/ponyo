class App {
  /* 생성자 */
  constructor() {
    /* 캔버스 엘리먼트 생성 
    this.canvas = document.createElement('canvas');
    */
    /*
    Canvas는 getContext() 메소드를 이용해서 렌더링 컨텍스트와
    렌더링 컨텍스트의 그리기 함수들을 사용할 수 있습니다.

    getContext() 메소드는 렌더링 컨텍스트 타입을 지정하는
    하나의 파라메터를 가집니다.

    여기서는 `CanvasRenderingContext2D`를 얻기 위해 '2d'로 지정합니다.
    https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Basic_usage
    */
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    /* 현재 html 문서의 body에 캔버스 엘리먼트 추가하기 
    document.body.appendChild(this.canvas);
    */
    /* 
    사이즈가 변할 때 대응하기 위한 이벤트 리스너 
    
    추가 : once, passive, capture 등에 대한 설명
    http://sculove.github.io/blog/2016/12/29/addEventListener-passive/
    https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
    */
    window.addEventListener('resize', this.resize.bind(this), {
      once: false,
      passive: false,
      capture: false,
    });

    /* 웨이브 객체 생성 */
    this.wave = new Wave();

    /* 초기 사이즈를 기준으로 resize 함수 실행 */
    this.resize();

    /*
    requestAnimationFrame은 css로 처리하기 어려운 애니메이션이나 
    Canvas, SVG 등의 애니메이션 구현에 이용하는 함수
    setInterval과 흡사한데, 재귀적으로 자신을 호출한다는 점이 다름
    1초당 디스플레이 주사율에 따라 정해진 프레임을 렌더링해줌
    https://blog.eunsatio.io/develop/JavaScript-window.requestAnimationFrame-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC
    https://css-tricks.com/using-requestanimationframe/
    */
    requestAnimationFrame(this.animate.bind(this));
  }

  /* 사이즈가 변했을 때 실행될 콜백 */
  resize() {
    /* 레티나 디스플레이에서 올바른 화면을 보여주기 위해 설정 */
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    /* 캔버스의 크기를 스테이지의 2배로 잡음 */
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    /* 
    캔버스에서 1개의 픽셀이 차지할 크기를 정함
    크기를 2배로 늘렸으므로 각 픽셀이 2개씩 차지하도록 함
    https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale
    */
    this.ctx.scale(2, 2);

    /* 웨이브에도 리사이즈가 적용 되도록 설정 */
    this.wave.resize(this.stageWidth, this.stageHeight);  

  }

  /* 애니메이션 관련 루틴 정의 */
  animate(t) {
    /* 지정된 사각 영역을 rgba(0, 0, 0, 0)의 색상으로 만듦 */
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    /* 애니메이션이 실행되면 웨이브가 그려지도록 설정 */
    this.wave.draw(this.ctx);
    /* this를 바인드한 채로 애니메이션 프레임 요청 */
    requestAnimationFrame(this.animate.bind(this));
  }
}

/* 브라우저에 window가 로드 됐을 때, 객체 생성 */
window.onload = () => {
  new App();
};


export class Wave {
    constructor(color) {
      this.color = color;
      this.points = [];
      this.numberOfPoints = 5;
    }
  
    resize(stageWidth, stageHeight) {
      this.stageWidth = stageWidth;
      this.stageHeight = stageHeight;
  
      /* 중간을 각각 넓이, 높이를 2로 나눈 값으로 지정 */
      this.centerX = stageWidth / 2 ;
      this.centerY = stageHeight / 2 + 30;
  
  
      /* 
      각 점의 간격은 `전체 넓이 / (전체 점의 숫자 - 1)` 이 됩니다.  
      이렇게 점의 간격을 나누면 화면의 시작부터 끝까지 고른 간격으로 점을 찍을 수 있습니다.
      */
      this.pointGap = this.stageWidth / (this.numberOfPoints - 1);
  
      /* 초기화 함수로 넘어가기 */
      this.init();
    }
  
    init() {
      /* 가운데 하나의 점 만들기 */
      // this.point = new Point(this.centerX, this.centerY);
  
      /* 
      points에 각각의 점의 좌표와 인덱스를 넣어줍니다. 
      인덱스를 넣어주는 이유는 각 점의 위치에 따라 파동이 움직이는 모양도 다르게 하기 위해서입니다.
      */
      for (let i = 0; i < this.numberOfPoints; i++) {
        this.points[i] = new Point(i, this.pointGap * i, this.centerY);
      }
    }
  
    draw(ctx) {
        /*
        그리기의 경로를 시작하는 메소드
        https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Drawing_shapes
        https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath
        */
        ctx.beginPath();
    
        /* 곡선을 위해 이전의 좌표 기억하기 */
        let prevX = this.points[0].x;
        let prevY = this.points[0].y;
    
        /* 점의 시작점으로 붓 이동하기 */
        ctx.moveTo(prevX, prevY);
    
        for (let i = 0; i < this.numberOfPoints; i++) {
          /* 
          호(arc)를 그리는 메소드를 이용하여 원을 그림 
          2 * Math.PI = 반지름 * 2 = 지름
          */
          // ctx.arc(this.points[i].x, this.points[i].y, 30, 0, 2 * Math.PI);
    
          /* 각 좌표에 선 긋기 */
          // ctx.lineTo(this.points[i].x, this.points[i].y);
    
          /* 
          각 좌표에 곡선 긋기
          https://www.w3schools.com/tags/canvas_quadraticcurveto.asp
          */
          const cx = (prevX + this.points[i].x) / 2;
          const cy = (prevY + this.points[i].y) / 2;
    
          ctx.quadraticCurveTo(prevX, prevY, cx, cy);
    
          /* 곡선을 그리기 위해 이전 좌표 업데이트하기 */
          prevX = this.points[i].x;
          prevY = this.points[i].y;
    
          /* 공의 위치 변경하기 */
          if (i != 0 && i != this.numberOfPoints - 1) {
            this.points[i].update();
          }
        }
    
        /* 붓을 오른쪽 모서리부터 왼쪽 모서리 그리고 첫번째 점 위치까지 옮기면서 색칠해줍니다. */
        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, 0);
        ctx.lineTo(0, 0);
        ctx.lineTo(this.points[0].x, this.points[0].y);

    
        /* 색상 RED & 채우기 */
        ctx.fillStyle = '#1c1c1c';
        ctx.fill();
    
        /* 붓 끝내기 */
        ctx.closePath();
      }
  }
  export class Point {
    /*
    한번에 웨이브를 그려낸다기보다는
  
    웨이브는 화면에 간격을 가진 점을 찍고 
    그 점 사이를 곡선으로 연결하는 방식이라고 이해하면 쉬움
  
    웨이브를 그리는데 이용되는 점들은
    아래 위로 랜덤하게 offset 값을 가짐
    */
    constructor(index, x, y) {
      this.x = x;
      this.y = y;
      this.fieldY = y; // 기본 Y 중심
      this.speed = 0.1;
      this.cur = index; // 각 점이 최대한 평행하지 않도록 각각 다른 시작점을 가지게 합니다.
      this.max = 25;
    }
  
    update() {
      /* 
      스피드만큼 cur 값이 더해짐 
      cur 값은 계속 커지지만,
      y값은 sin함수의 주기를 따르기 때문에 무한히 -1 ~ 1 사이를 반복함
      */
      this.cur += this.speed;
      /*
      y값이 sin(cur) * max 만큼 늘어남 
      sin(cur)는 sin함수의 주기에 따라 -1에서 1까지 반복
      -1 ~ 1까지의 값에 max(150 ~ 250)값을 곱해줌
      */
      this.y = this.fieldY + Math.sin(this.cur) * this.max;
    }
  }

let pmaintouch  = document.querySelector(".pmain_touch");
let screen = document.querySelector(".first");
let block = document.querySelector(".second");
let canvas = document.querySelector("canvas");

pmaintouch.onclick = function() {
  this.style.display = 'none';
  $('.wavecanvas').css({height: '200%'})
  setTimeout(function(){
    screen.style.display = 'none';
    block.style.display = 'block';
  },3000);
}