document.addEventListener("DOMContentLoaded", function(event) {

    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function() {
	var clase = thumbnailElement.className;
	if(clase==""){
	    thumbnailElement.className="small";
	}
	else{
	    thumbnailElement.className="";
	}

    });

});
