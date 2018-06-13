function myFunction() {
	//Get storage
	var after=Date.now();  
	var before=Date.parse(localStorage.getItem('startDate'));
	var result=Math.ceil((after-before)/1000); //Thời gian online tính bằng giây
	alert(result);
	localStorage.clear();
}
