	// just place a div at top right
  console.log($("#draggable"));
  if(!$("#draggable").length){
    var newdiv = document.createElement('div');
    newdiv.id="draggable";
    var webcamview = document.createElement('div');
    webcamview.id="webcamview";
    var iframe = document.createElement('iframe');
    iframe.id = "video-iframe";
    iframe.src = 'chrome-extension://ohjandoliamakdehaanbhpnajkoafola/camera.html';
    webcamview.appendChild(iframe);
    var exit = document.createElement('span');
    exit.id="exitwebcam";
    var exitText = document.createTextNode("x");
    exit.appendChild(exitText);
    newdiv.appendChild(webcamview);
    newdiv.appendChild(exit);
    document.body.appendChild(newdiv);  
    $( "#draggable" ).draggable({
      containment : "body"
    });
  }
	
  
  $( "#draggable" ).draggable({
    containment : "body"
  });
  $("#exitwebcam").click(function(){
    $("#draggable").remove();
  });
	//alert('inserted self... giggity');
