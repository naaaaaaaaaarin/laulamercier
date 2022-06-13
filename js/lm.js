// DOM객체 할당 video, btn
const vid = $('#lm_video');
const btn = $('#lm_btn');
console.log(vid);
console.log(btn);

// 이벤트 연결
btn.click(function(){
    // 초기값 = video(paused) / btn(play)
    if(vid.get(0).paused){
        vid.get(0).play();
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>')
    }else{ // video가 playing 상태일 때
        vid.get(0).pause();
        btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>')
    }
});

// laura history
// 1. 각 탭메뉴명 변수에 할당
let tab = $('.tab_menu').find('li');
console.log(tab);
// 1-2. 현재 DOM객체 탭의 li의 갯수를 clg에 출력
console.log("탭메뉴 li의 갯수 : " + tab.length);

// 2. 선언적 함수 Event Listener
/* function tab_menu(num) {
    alert('호출');
} */
function tab_menu(num){
    // li의 갯수만큼 반복문 조건식 만들기
    for(let i=0; i<tab.length ;i++){
        if(num == i) {
            // active 클래스 적용
            tab.eq(i).addClass('active');
            // 콘텐츠 보여주기
            $('.tab_content0'+i).show();
            $('.circle'+i).show();
        }else {
            // active 클래스 삭제
            tab.eq(i).removeClass('active');
            // 콘텐츠 보여주기
            $('.tab_content0'+i).hide();
            $('.circle'+i).hide();
        };
    };
};

// 준비중 모달창 팝업
const modal = document.querySelector('.modal-overlay');
let modalBtn_Open = document.querySelector('.modalOpen');
const modalBtn_Close = document.querySelector('.close-area');
const body = document.querySelector('body');
console.log(modalBtn_Open);

// .modalOpen을 클릭하면 모달창 팝업 (body 스크롤X)
/* modalBtn_Open.addEventListener('click', () => {
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
}); */
const openModal = () => {
    modal.classList.remove('hidden');
    body.style.overflow = 'hidden';
};
modalBtn_Open.addEventListener('click', openModal);

// .close-area(모달의 x버튼), 모달 외 영역 클릭 시 모달창 닫힘
/* modalBtn_Close.addEventListener('click', () => {
    modal.style.display = 'none';
    body.style.overflow = 'auto';
});
 */
const closeModal = () => {
    modal.classList.add('hidden');
    body.style.overflow = 'auto';
};
modalBtn_Close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

// to-top 버튼
const toTop = document.querySelector('#to-top');
window.addEventListener('scroll', function(){
    // console.log(window.scrollY);
    if(window.scrollY > 1200){
        toTop.style.display = 'inline-block';
    } else {
        toTop.style.display = 'none';
    }
});
toTop.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// tranding 아코디언 효과
$('#list li').on('click',function(){
    $(this).children('.list').stop().slideToggle();
    if($(this).children('a').hasClass('active')){
        $(this).children('a').removeClass('active');
        $(this).children('a').addClass('down');
        $(this).children('a').removeClass('up');
    }else{
        $(this).children('a').addClass('active');
        $(this).children('a').removeClass('down');
        $(this).children('a').addClass('up');
    };
});
// tranding 클릭시 화살표 변경