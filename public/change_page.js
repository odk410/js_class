// 실습
// tr에 해당하는 부분을 click 하면 페이지를 이동한다.
// **'현재' click한 부분의 id가 몇인지 파악해야함

// 페이지를 이동한다.
// **location.href = '/boards/?';

var tr = document.getElementsByTagName('tr');
console.dir(tr);

for(var i=0; i<tr.length; i++){
  tr[i].onclick = function(){
    var hoho = this.getAttribute('hoho');
    location.href = '/boards/' + hoho;
  }
}
