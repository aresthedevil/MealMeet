$(document).ready(function () {
    
	    var url = "http://symfony.p181457.webspaceconfig.de";
	    console.log(url);
    $('#body').load(url, function () {
        var base = document.createElement('base');    
	        base.attr('href', url);
	        $('#head').append(base);
        $('#spinningwheel').hide();
	    	console.log(url + " loaded");
	    }).fail(function () {
	        console.log(url + " not loaded");
	    });
	});

