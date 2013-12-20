$(document).ready(function () {
    alert(window.location.pathname);
	    var url = "http://symfony.p181457.webspaceconfig.de";
	    console.log(url);
	    $('#body').load(url, function () {
	        console.log(url + " loaded");
	    }).fail(function () {
	        console.log(url + " not loaded");
	    });
	});

