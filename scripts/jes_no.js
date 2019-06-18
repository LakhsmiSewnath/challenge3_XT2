
function getYesNoAPIData() {

	fetch('https://yesno.wtf/api/')
	
	.then(function(response) {
		return response.json();
	})

	.then(function(response) {
		console.log(response.answer);
		console.log(response.image);

		if(response.answer == 'yes') {
			document.getElementById('text').innerHTML = 'YESSSSS';
			document.getElementById('yesno-image').src = response.image;
		} 

		else {
			document.getElementById('text').innerHTML = 'NOOOOO';
			document.getElementById('yesno-image').src = response.image;
		}
		console.log(response);	
	});
		
}

getYesNoAPIData();


 