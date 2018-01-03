// 실습
// tr에 해당하는 부분을 click 하면 페이지를 이동한다.
// **'현재' click한 부분의 id가 몇인지 파악해야함

// 페이지를 이동한다.
// **location.href = '/boards/?';


//click 이벤트를 통해서 show 페이지로 보내기
// 1. tr에 해당하는 html element을 찾는다.
// 2. html element에 click 이벤트 리스너를 달아준다.
// 3. 이벤트 헨들러에서는 해당 html element가 가지고 있는 속성을 꺼낸다.
// 4. 해당 속성값으로 url을 만들어서 페이지를 이동한다.
// var tr = document.getElementsByTagName('tr');
// console.dir(tr);
//
// for(var i=0; i<tr.length; i++){
//   tr[i].onclick = function(){
//     var hoho = this.getAttribute('hoho');
//     location.href = '/boards/' + hoho;
//   }
// }

//jQuery를 이용한 방법
$(document).ready(function(){
  // = $(function(){})
  $('.board').click(function(){
    location.href ="/boards/" + $(this).data('id');
    //hover로 주었던 부분이 data-로 바뀜
  })
})
