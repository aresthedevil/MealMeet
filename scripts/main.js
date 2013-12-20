$(document).ready(function () {
    $('#body').empty();
    var url = "http://symfony.p181457.webspaceconfig.de";
    alert(url);
    $('#body').load(url).fail(function(){
    	alert("error");    	
    });
})

