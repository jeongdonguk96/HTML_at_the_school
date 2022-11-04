var elms = document.getElementsByClassName('hot'); // 클래스 이름이 hot인 클래스들을 elms에

if(elms.length > 2) { // length는 이름이 hot인 클래스 갯수
    var item = elms[2]; // 배열형식으로 자동으로 묶어줌
    item.className = 'cool';
}