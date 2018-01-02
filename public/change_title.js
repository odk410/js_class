//alert("여기는 인덱스 페이지~~~~~~~")
// 1. 이벤트를 넣어줄 html element를 찾고
var btn = document.getElementById('change-title');
console.dir(btn);
// 2. 해당 element에 원하는 이벤트를 달아준다.
btn.onclick = function(){
  //실행문
  // 3. 이벤트가 발생했을 경우 실행하는 함수(function())를 만들어준다.
  //alert('버튼이 눌렸습니다.');
  var title = prompt('바꿀 제목을 입력하세요.');
  // console.log(title);
  // 바꿀 내용물(html element)이 어디에 있는지 찾아야함
  // getElement*** -> 내용물을 1개만 가지고 온다. -> 여러개 있어도 return 값이 1개
  // getElements*** -> 내용물을 여러개 가지고 온다. -> 1개만 있어도 return값이 배열
  // getElements*** 로 찾은 html element를 사용할 때에는 반복문, 혹은 [index]로 하나씩 조정
  // console.log(document.getElementById('tt'));
  var titles = document.getElementsByClassName('title');
  for (var i=0; i<titles.length; i++){
    //console.dir(titles[i]);
    titles[i].textContent = title;
  }
}
