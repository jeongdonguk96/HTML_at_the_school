var elmTitle = document.getElementById("greeting"); // "greeting"라는 이름을 가진 태그의 주도권을 elmTitle에 저장
var userName = "웹지니";

elmTitle.textContent = "안녕하세요, " + userName + ". 주문 내역을 확인해주세요!" // 가져온 태그의 내용을 작성

var userSign = "Montague House";
var tiles = userSign.length;
var subTotal = tiles * 500;
var shipping = 140;
var total = subTotal + shipping;

var elmSign = document.getElementById('userSign');
elmSign.textContent = userSign;
/* 위의 2줄을 1줄로 줄이면 */
document.getElementById('tiles').textContent = tiles;
document.getElementById('subTotal').textContent = subTotal;
document.getElementById('shipping').textContent = shipping;
document.getElementById('total').textContent = total;