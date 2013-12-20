$(document).ready(function () {
    
	    var url = "http://symfony.p181457.webspaceconfig.de";
	    console.log(url);
    $('#body').load(url, function () {
	        $('#base').attr('href', url);
        $('#spinningwheel').hide();
	    	console.log(url + " loaded");
	    	location.reload();
	    }).fail(function () {
	        console.log(url + " not loaded");
	    });
	});

