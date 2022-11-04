var today = new Date();
var hour = today.getHours();
var greeting;

console.log(hour);

if(hour>18) {
    greeting = "Good Evening!";
} else if(hour>=12) {
    greeting = "Good Afternoon!";
} else if(hour>=6) {
    greeting = "Good Morning!";
}

document.write('<h3>' + greeting + '</h3>'); /* 웹페이지 상에 출력 */