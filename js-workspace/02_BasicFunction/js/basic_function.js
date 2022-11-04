var msg = "지금 회원으로 가입하고 10% 할인 가져가세요!!" // 문구를 가진 변수 msg 생성

// 함수 선언 - function + 함수이름 - 자바와 비슷함
function updateMessage() {
    var elm = document.getElementById("message"); // ID message에 대한 주도권을 elm로
    elm.textContent = msg; // elm에 변수 msg를 집어넣음
}                          // msg를 출력하는 매서드 updateMessage() 생성 완료

// 함수 호출
updateMessage();