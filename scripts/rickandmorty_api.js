

function getRickAndMortyData() {

	fetch('https://rickandmortyapi.com/api/character/1')
	
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	.then(function(response){
	
		document.getElementById('namekarakter').innerHTML = response.name;
		document.getElementById('specieskarakter').innerHTML = 'Species:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.species;
		document.getElementById('genderkarakter').innerHTML = 'Gender:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.gender;
		document.getElementById('originkarakter').innerHTML = 'Origin:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.origin.name;
		document.getElementById('locationkarakter').innerHTML = 'Last location:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.location.name;
		document.getElementById('imagekarakter').src = response.image;
	});

	fetch('https://rickandmortyapi.com/api/character/2')
	
	.then(function(response) {
		return response.json();
	})

	.then(function(response){
	
		document.getElementById('namekarakter2').innerHTML = response.name;
		document.getElementById('specieskarakter2').innerHTML = 'Species:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.species;
		document.getElementById('genderkarakter2').innerHTML = 'Gender:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.gender;
		document.getElementById('originkarakter2').innerHTML = 'Origin:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.origin.name;
		document.getElementById('locationkarakter2').innerHTML = 'Last location:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.location.name;
		document.getElementById('imagekarakter2').src = response.image;
	});

	fetch('https://rickandmortyapi.com/api/character/425')
	
	.then(function(response) {
		return response.json();
	})

	.then(function(response){
	
		document.getElementById('namekarakter3').innerHTML = response.name;
		document.getElementById('specieskarakter3').innerHTML = 'Species:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.species;
		document.getElementById('genderkarakter3').innerHTML = 'Gender:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.gender;
		document.getElementById('originkarakter3').innerHTML = 'Origin:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.origin.name;
		document.getElementById('locationkarakter3').innerHTML = 'Last location:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.location.name;
		document.getElementById('imagekarakter3').src = response.image;
	});

	fetch('https://rickandmortyapi.com/api/character/242')
	
	.then(function(response) {
		return response.json();
	})

	.then(function(response){
	
		document.getElementById('namekarakter4').innerHTML = response.name;
		document.getElementById('specieskarakter4').innerHTML = 'Species:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.species;
		document.getElementById('genderkarakter4').innerHTML = 'Gender:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.gender;
		document.getElementById('originkarakter4').innerHTML = 'Origin:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.origin.name;
		document.getElementById('locationkarakter4').innerHTML = 'Last location:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.location.name;
		document.getElementById('imagekarakter4').src = response.image;
	});


	fetch('https://rickandmortyapi.com/api/character/388')
	
	.then(function(response) {
		return response.json();
	})

	.then(function(response){
	
		document.getElementById('namekarakter5').innerHTML = response.name;
		document.getElementById('specieskarakter5').innerHTML = 'Species:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.species;
		document.getElementById('genderkarakter5').innerHTML = 'Gender:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.gender;
		document.getElementById('originkarakter5').innerHTML = 'Origin:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.origin.name;
		document.getElementById('locationkarakter5').innerHTML = 'Last location:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.location.name;
		document.getElementById('imagekarakter5').src = response.image;
	});

		fetch('https://rickandmortyapi.com/api/character/60')
	
	.then(function(response) {
		return response.json();
	})

	.then(function(response){
	
		document.getElementById('namekarakter6').innerHTML = response.name;
		document.getElementById('specieskarakter6').innerHTML = 'Species:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.species;
		document.getElementById('genderkarakter6').innerHTML = 'Gender:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.gender;
		document.getElementById('originkarakter6').innerHTML = 'Origin:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.origin.name;
		document.getElementById('locationkarakter6').innerHTML = 'Last location:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.location.name;
		document.getElementById('imagekarakter6').src = response.image;
	});


		fetch('https://rickandmortyapi.com/api/character/24')
	
	.then(function(response) {
		return response.json();
	})

	.then(function(response){
	
		document.getElementById('namekarakter7').innerHTML = response.name;
		document.getElementById('specieskarakter7').innerHTML = 'Species:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.species;
		document.getElementById('genderkarakter7').innerHTML = 'Gender:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.gender;
		document.getElementById('originkarakter7').innerHTML = 'Origin:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.origin.name;
		document.getElementById('locationkarakter7').innerHTML = 'Last location:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.location.name;
		document.getElementById('imagekarakter7').src = response.image;
	});

		fetch('https://rickandmortyapi.com/api/character/96')
	
	.then(function(response) {
		return response.json();
	})

	.then(function(response){
	
		document.getElementById('namekarakter8').innerHTML = response.name;
		document.getElementById('specieskarakter8').innerHTML = 'Species:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.species;
		document.getElementById('genderkarakter8').innerHTML = 'Gender:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.gender;
		document.getElementById('originkarakter8').innerHTML = 'Origin:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.origin.name;
		document.getElementById('locationkarakter8').innerHTML = 'Last location:\n'.fontcolor('BDBDBD') + '&nbsp;' + response.location.name;
		document.getElementById('imagekarakter8').src = response.image;
	});
}
getRickAndMortyData();

















