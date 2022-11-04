var price; 
var quantity;
var total;
var item;

price = 500;
quantity = 14;
total = price * quantity;

var elm = document.getElementById('cost'); // body에 포함된 전체 내용을 document라고 함
elm.textContent = '비용 : ' + total + '원';

// alert('item=' + item);
// console.log('item=' + item); /* 웹의 관리페이지 콘솔창에 입력 */
// document.write('item=' + item); /* 웹페이지 상에 출력 */