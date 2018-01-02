# 멋쟁이 사자처럼

## 20180102

## 오늘은 자바스크립트로 구현함

### model : user, board, comment

### controller : boards, sessions

#### gem : bootstrap, font-awesome, faker, bcrypt(비번 암호화 기존에 포함되어 있으므로 주석만 풀기), kaminari



## Reference

- 모델을 만들때 reference를 사용함.
- 이때 references 로 써주어야 함.



## Bcrypt



## 회원가입할 때 E-mail 인증 받기

- devise의 Confirmable을 이용함.
- 자세한 내용은 ruby confirmable 검색해보기



## AS

- routes 에서 as를 사용해 설정하면 설정한 이름으로 사용가능하다.

  ```ruby
  get '/signin' => 'sessions#signin', as: :user_signin
  ```

  ​

## Bootstrap

- bootstrap을 사용하기 위해서는 jquery와 popper가 필요하다.

- 기존 홈페이지에서 사용하기 위해 복붙했던 것을 Gem을 이용해 import하기

- app -> asset -> stylesheets -> application.css 이름을 scss로 바꿔주고

  내용을 다 지운후 `@import 'bootstrap'; ` 추가해주기

- app -> asset -> javascripts -> application.js에  `//= require bootstrap` 추가하기

- app -> asset -> javascripts -> application.js에 popper가 없다면 `//= require popper`추가해주기



## app -> asset -> stylesheets -> application.scss

- 해당 파일에 적용할 부트스트랩에서 소스보기로 간다.
- 그리고 아래 부분에서 링크를 눌러 보이는 내용을 application.scss로 옮겨 준다.
- 이 후 Body 부분을 지워준다.

```html
    <!-- Custom styles for this template -->
    <link href="signin.css" rel="stylesheet">
```

- 적용한 bootstrap 형식을 따라서 해당 프로젝트에도 똑같이 적용시키면 된다.
- body를 `<div class = "container"> </div> `로 감싸고 있다면 프로젝트에도 똑같이 감싸주기



## session[:user_id] 와 !session[:user_id].nil?

- `session[:user_id]`의 경우 참일 경우 user_id의 값이 거짓 이면 nil이 나온다.
- `!session[:user_id].nil?` 참일 경우 True    거짓일 경우 False가 나온다.



## ! (Bang)

- !(bang) 내용물을 변화시킬수 있는 메소드에 붙여줌
- element.upacse! => element 자체가 변화함
- element2 = element.upcase => return 값이 변화함



## HTML, CSS, JAVASCRIPT

- 집으로 비유하자면
  - HTML - 뼈대
  - CSS - 색칠
  - Java Script - 기능 (ex. 문을 만지면 문이 열린다~~)
- Java Script
  1. Event (click, hover, keydown, mouseup, mousedown)
  2. Event Listener (on)
  3. Event Handler (function())
- `<script> </script> ` 안에 자바스크립트를 사용하면 된다.
- Java Script는 Body가 끝나기 직전에 사용한다.



## Java Script

- views -> boards -> index.html.erb 에서 진행함.

```html
 <!-- 버튼을 누르면 prompt창이 떠서 입력메시지를 입력할 수 있고,
 해당 내용으로 모든 제목을 바꿔버립니다. -->
<a class='btn btn-warning' id='change-title'>제목 바꾸기</a>
<% content_for :script do %>
  <script>
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
      console.log(title);
      // 바꿀 내용물(html element)이 어디에 있는지 찾아야함
      // getElement*** -> 내용물을 1개만 가지고 온다. -> 여러개 있어도 return 값이 1개
      // getElements*** -> 내용물을 여러개 가지고 온다. -> 1개만 있어도 return값이 배열
      // getElements*** 로 찾은 html element를 사용할 때에는 반복문, 혹은 [index]로 하나씩 조정
      // console.log(document.getElementById('tt'));
      var titles = document.getElementsByClassName('title');
      for (var i=0; i<titles.length; i++){
        console.dir(titles[i]);
        titles[i].textContent = title;
      }
    }
  </script>
<% end %>
```

- `console.log(title);` - 그냥 출력만 해준다.
- `console.dir(title);` - JavaScript의 기능에 어떤 것들이 들어있는지 알 수 있다. (Chrome에서 검사하기 누르면 알 수 있다. console에서...)



## Java Script 분리~~!!

-  기존 views -> boards -> index.html.erb 에 있던 `<script> </script>` 안의 내용을 다른 곳으로 옮긴다
- 옮길 곳은 public -> change_title.js (새로 만듬) 으로~~
- 그리고 기존 파일에 `<script src="change-title.js"> </script>` 써주면 된다~



## 이벤트, 이벤트 리스너, 이벤트 핸들러

- 이벤트 : mouseover
- 이벤트 리스너 : onmouseover
- 이벤트 핸들러 : 복잡한 function()



## 크기 조절해주는 코드 (반응형 웹?)

- views -> layouts -> application.html.erb의 head에 아래 코드 추가해주기
- `<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`
- 추가하면 반응형 웹이 된다.
