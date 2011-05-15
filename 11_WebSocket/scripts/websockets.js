	var sock;
	$(document).ready(function(){
		openSocket();
	});
	
	openSocket = function() {
		sock = new WebSocket('ws://10.122.122.209:4532');
		sock.onopen = handleOpen;
		sock.onmessage = handleMessage;
		sock.onclose = handleClose;
	}
	handleOpen = function(event){
		alert('Connection Established');
	}
	handleClose = function(event) {
		alert('Disconnected From server');
	}
	handleMessage = function(event) {
		$('#responses').html($('#responses').html() + '<br />Server Said: ' + event.data);
	}
	sendMessage = function(){
		if(sock.readyState != 1){
			openSocket();
		}
		var msg = $('#message').val();
		if(msg != ''){
			sock.send(msg);
			$('#responses').html($('#responses').html() + '<br />You Said "' + msg + ' @ ' + new Date() + '"');
		}
		else {
			alert('Enter some message');
		}
	}
	closeConnection = function() {
		if(sock.readyState != 2){
			sock.close();
			alert('Connection Closed');
		}
	}
	clearResponses = function() {
		$('#responses').text('');
	}
	
	window.onclose = function(){
		closeConnection();
	}
	
	$('#sendMsg').click(sendMessage);
	$('#closeConn').click(closeConnection);
	$('#clearResponses').click(clearResponses);