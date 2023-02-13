function next(){
	var num = Math.floor(Math.random()*4); 
	var horse = mui('.horse')[num];
	var left = horse.getBoundingClientRect().left
	var timer = null
	horse.style.left = (left + 10) + 'px';
	left = horse.getBoundingClientRect().left
	if (left == 660){
		var winhorse = num + 1
		alert(winhorse + ' horse won!')
		clearTimeout(timer)
	}else{
		timer = setTimeout(function() {next()}, 300);
	}
}
