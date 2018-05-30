var countDownDate = localStorage.getItem('startDate');
if (countDownDate) {
    countDownDate = new Date(countDownDate);
} else {
    countDownDate = new Date();
    localStorage.setItem('startDate', countDownDate);
}
// Chạy hàm mỗi khi qua 1 giây
var x = setInterval(function() {
 

    var now = new Date().getTime();
 

    var distance = now - countDownDate.getTime();
 
    
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
    
	var result=hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("demo").innerHTML =result;
}, 1000);