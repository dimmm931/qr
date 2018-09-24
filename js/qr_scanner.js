$(document).ready(function(){
	// SO FAR IT IS NOT USED AT ALL-> it is delegated to Library/JS_Lib_toScan_QR
	
	
	// Click to send ajax QR Scan / Read the image
	/*
	$("#qrScanButton").click(function() {  
	    getScanQR_Result();  
	});
	
    */


  // onClick form submit
  $("#formImg").on('submit',(function(e) {
      e.preventDefault();
      alert(new FormData(this));
      $.ajax({
         url: "ajax_php/ajax_QR_Scan_handler.php",
         type: "POST",
         data: form.serialize(), // new FormData(this),
         //contentType: false,
         //cache: false,
         //processData:false,
         beforeSend : function()
        {
            //$("#preview").fadeOut();
            $("#err").fadeOut();
        },
        success: function(data)
        {
            if(data=='invalid')
            {
            // invalid file format.
            $("#err").html("Invalid File !").fadeIn();
            } else {
                // view uploaded file.
                $("#preview").html(data).fadeIn();
                $("#formImg")[0].reset(); 
             }
         },
       error: function(e) 
       {
           $("#err").html(e).fadeIn();
       }          
     });
 }));
 
 
 
	
	
	
	
	
	
	
	
	
	
     //  NOT USED
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	
	function getScanQR_Result()
	{
	//prevent the form from submitting by default
    event.preventDefault();

    alert($('input[type=file]').val());
	
	/*	
	 var form = new FormData(document.getElementById('formImg'));
     var file = document.getElementById('imgLoaded').files[0];
     if (file) {   
        form.append('upload-image', file);
    }
	*/
	//jQuery.noConflict();    
    formdata = new FormData();      
    $("#imgLoaded").on("change", function() {
        var file = this.files[0];
        if (formdata) {
            formdata.append("image", file);
	} 	
	 });

	 
	
	alert(JSON.stringify(formdata, null, 4));
	
    //var formData = new FormData(form);

       // send  data  to  PHP handler  ************ 
        $.ajax({
            url: 'ajax_php/ajax_QR_Scan_handler.php',
            type: 'POST',
			//use contentType, processData for sure.
            contentType: false,
            processData: false,
		    dataType: 'text', //{json/text}, text cause MEGA ERROR without this it returned string(that can be alerted), now it returns object
			//passing the city
            data: { 
			    file: formdata, //new FormData(this),//new FormData($('#devis')[1]),
			    
			},
			async: false,
            success: function(data) {
                // do something;
                $("#qrScanResult").stop().fadeOut("slow",function(){ $(this).html(data) }).fadeIn(2000);
			    //alert("S");
				
				
            },  //end success
			error: function (error) {
				$("#qrScanResult").stop().fadeOut("slow",function(){ $(this).html("<h4 style='color:red;padding:3em;'>ERROR!!! <br>QR Scanner Failed</h4>")}).fadeIn(2000);
            }	
        });                                      
       //  END AJAXed  part 

	   
	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	



});
// end ready	
	