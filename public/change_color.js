// 2.
// 세개의 버튼 html element를 찾아서
// var btns = document.querySelectorAll('.color-btn');
// console.dir(btns);
// 각각의 버튼에 해당하는 색상을 정하고
// 빨강 -> text-danger
// 파랑 -> text-primary
// 노랑 -> text-warning
// 버튼 하나에 마우스를 올렸을 때
// for(var i=0; i<btns.length; i++){
//   btns[i].onmouseover = function(){
//     var color = this.getAttribute('haha');        // 각각의 정해진 색상 class를 table에 넣어준다.
//     var table = document.getElementsByTagName('table')[0];  // 테이블 불러오기
//     table.setAttribute('class', 'table table-hover ' + color);
//   }
//
//   btns[i].onmouseleave = function(){
//     var color = this.getAttribute('haha');        // 각각의 정해진 색상 class를 table에 넣어준다.
//     var table = document.getElementsByTagName('table')[0];  // 테이블 불러오기
//     table.setAttribute('class', 'table table-hover');
//   }
// }

// jQuery로 바꾸기
$(document).ready(function(){
  $('.color-btn').on('mouseover', function(){
    var color = $(this).attr('haha');
    $('table').toggleClass(color);
  })
  $('.color-btn').on('mouseout', function(){
    var color = $(this).attr('haha');
    $('table').toggleClass(color);
  })
})
