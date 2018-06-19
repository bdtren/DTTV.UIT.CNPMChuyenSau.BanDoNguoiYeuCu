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

var timeVal = document.getElementById("worktime").innerHTML;
function getProfileInfo(){
    //Get storage
	var after=Date.now();  
	var before=Date.parse(localStorage.getItem('startDate'));
	var result=parseFloat((after-before)/1000/60/60); //Thời gian online tính bằng giờ
    
    var sumTime = (parseFloat(timeVal)+parseFloat(result)).toFixed(3);
    document.getElementById("worktime").innerHTML =  sumTime +" Giờ";
}