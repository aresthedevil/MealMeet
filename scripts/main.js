﻿$(document).ready(function(){
	alert ("drin");
	
});

$("#test").click(function() {
    var url = "http://symfony.p181457.webspaceconfig.de";
    console.log(url);
    $('#body').load(url, function() {
        console.log(url + " loaded");
    }).fail(function() {
        console.log(url + " not loaded");
    });
});