Detail = function() {
	var id;
	var firstName;
	var lastName;
	var emailId;
	var dateOfBirth;
	var gender;
	var homePage;
};

checkLocalStorage = function(){
	return (window.localStorage)?true:false;
};

printStorageDetails = function() {
	if(checkLocalStorage){
		$('#status').html('Local storage facility availabile');
		$('#submitForm').attr('disabled', false);
		$('#clearDatabase').attr('disabled', false);
		$('#status').removeClass('invalid');
		$('#status').addClass('valid');
	}
	else{
		$('#status').html('Your browser does not support local storage');
		$('#submitForm').attr('disabled', true);
		$('#clearDatabase').attr('disabled', true);
		$('#status').removeClass('valid');
		$('#status').addClass('invalid');
	}
};

createTableRow = function(detail){
	var row = '<tr>';
	row += ('<td><a class="reclink" id="link' + detail.id +'">' + detail.uuid + '</a></td>');
	row += ('<td>' + detail.firstName + '</td>');				
	row += ('<td>' + detail.lastName + '</td>');
	row += ('<td>' + detail.emailId + '</td>');				
	row += ('<td>' + detail.dateOfBirth + '</td>');
	row += ('<td>' + detail.gender + '</td>');								
	row += ('<td>' + detail.homePage + '</td>');								
	row += '</tr>';
	var table = $('#personal');
	table.html(table.html() + row);
}
addDetails = function() {
	var detail = new Detail();
	detail.id = localStorage.length;
	detail.firstName = $('#firstName').val();
	detail.lastName = $('#lastName').val();
	detail.emailId = $('#emailId').val();
	detail.dateOfBirth = $('#dateOfBirth').val();
	detail.gender = $('#gender').val();
	detail.homePage = $('#homePage').val();
	createTableRow(detail);
	localStorage.setItem(localStorage.length + "", JSON.stringify(detail));
	
	console.log(localStorage.length);
}

clearDetails = function() {
	localStorage.clear();
	$('#personal').html('');
}

addLinkListener = function() {
	$('a.reclink').each(function(){
		console.log('adding listener')
		//$(this).click(showRecord);
		window.addEventListener('click', showRecord, true);
	});
}

storageEvent = function(key, oldValue, newValue, url){
	console.log('Value Stored ' + key + ' ' + oldValue + ' ' + newValue + ' ' + url);
	addLinkListener();
}

showRecord = function(val) {
	console.log('clicked');
	var id = val.target.innerHTML + '';
	var rec = JSON.parse(localStorage.getItem(id));
	$('#firstName').val(rec.firstName);
	$('#lastName').val(rec.lastName);
	$('#emailId').val(rec.emailId);
	$('#dateOfBirth').val(rec.dateOfBirth);
	$('#gender').val(rec.gender);
	$('#homePage').val(rec.homePage)
}

populateExistingData = function(){
	for(var i=0; i<localStorage.length; i++){
		var record = localStorage.getItem(localStorage.key(i));
		try{
			record = JSON.parse(record);
			createTableRow(record);
		}catch(e){}
	}
}
