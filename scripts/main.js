$(document).ready(function () {
    
	    var url = "http://symfony.p181457.webspaceconfig.de";
	    console.log(url);
    $('#body').load(url, function () {
	        $('#base').attr('href', url);            
	        var content = $('#body').html();
	    	$('#body').html(content, function(){
	    		$('#body').show();
	    	$('#spinningwheel').hide();
	    	console.log(url + " loaded");
	    	});
	    }).fail(function () {
	        console.log(url + " not loaded");
	    });
	});

