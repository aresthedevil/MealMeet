$(document).ready(function () {
    $('#body').empty();
    var url = "http://symfony.p181457.webspaceconfig.de/app_dev.php";
    alert(url);
    $('#body').load(url).fail(function(){
    	alert("error");
    	
    });
})

