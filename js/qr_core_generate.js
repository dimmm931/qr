$(document).ready(function(){
	
	
	


	 
	
// **************************************************
// **************************************************
// **                                              **
// START HEADER  CHANGE HOVER HEADER Change -> Waze Check Apllication******
  $('#headX').hover(function(){    
         //$('#headerp').html('Social Networking');
   $("#textChange").clearQueue();//prevent endeless
   $("#textChange").stop().fadeOut(900,function(){  $(this).html("<span style=''>Generates on-line </span> ") }).fadeIn(900);

             /*$('#textChange').stop().hide(800);  
             $('#headerpHIDDEN').stop().show(1000);*/

             /*$('#textChange').animate({ "margin-left": 200 }, 2000, 'linear');
              $('#headerpHIDDEN').stop().show(1000);*/
},
function(){ //hover off
           
          $("#textChange").clearQueue();
          $("#textChange").stop().fadeOut(900,function(){  $(this).html("QR codes on-line") }).fadeIn(900);
         
  //$(this).html('Dynamically  changed MVC');
              /*$('#headerpHIDDEN').stop().hide(900);
              $('#textChange').stop().show(1000);*/

              //$('#textChange').html('Waze');
             /* $('#textChange').animate({ "margin-right": 0 }, 2000, 'linear');
              $('#headerpHIDDEN').stop().hide(1000);*/
              
});
// END HEADER  CHANGE HOVER HEADER Change----------------------
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************









	
	
    // **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	$("#clear").click(function() {   // $(document).on("click", '.circle', function() {   // this  click  is  used  to   react  to  newly generated cicles;       
		clearQRField();
    });
    //END 
	
	
	
	
	
	//Prevent empty form submitting---------
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	function checkIfNotEmpty() {   
        if ($("#qrtext").val().trim()==''){
			if ( !$("#qrResult").is(':visible')) { 
				$("#qrResult").show(900);
			}
			
			$("#qrResult").html('<div class="alert alert-danger"><h2 class="red"><center><span class="glyphicon glyphicon-log-in"></span><br><br>EMPTY INPUT FOR QR</center><h2></div>'); 
			return false;
		} else{
			return true;
		}
		
	}
    //END Prevent empty form submitting------------------
	
	
	
	
	
	
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	function clearQRField()
	{
		$("#qrtext").val("");      //clear generate part
		$("#qrResult").hide(900);  //clear generate part
		
		$("#qrfile input:file").val("");      //clear scan part file input
		$(".qr-result, .scanTitle").hide(900); //clear scan part
		
		scroll_toTop(); //scroll to top
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	// On CheckBox change, make sure that only one checkbox is not unselected + Allow to checkBox only one itembox at once
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
    $('input[type="checkbox"]').on('change', function() {
		
		// Make sure that only one checkbox is not unselected
		if ($('input:checked', $(this).parent()).length === 0) {
			$(this).prop('checked', true);
            return false; // this prevents from event triggering-> html-ing the div again
        }
		// Make sure that the oly checkbox is not unselected
		
		
		
		// Start Allow to checkBox only one itembox at once;
        $('input[name="' + this.name + '"]').not(this).prop('checked', false); // });
       // End Start Allow  to  checkBox  only  one  item;	
	
	    /*if ( $('#r1').prop('checked') )  {
			alert("1 ch");
		}*/
		
		// function detects the checkbox checked and show relevant div, hides others
        clearQRField();
		
	});
	// END On CheckBox change
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	 
	 
	 
	
	
	// CORE - onClick QR generate QR  from form 
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	
	
    $("#submitQR").click(function(e) { 
        //e.preventDefault(); 
		
		//checks if user input is not empty
		if(!checkIfNotEmpty()){
			return false;
		}
		
		var qrTextRaw = $("#qrtext").val(); //gets raw user input for QR(with possible blankspaces)
		var qrText = qrTextRaw.replace(/\s/g, "+");  //replace all blankspaces with "+", so if u use {text text}, it will work(if there are blankspaces, only the 1st text wil be encoded to qr)
		
		//form the text to show ("Your QR Code with text Dima has been created")
		var barCodeText = "<div class='alert alert-success'><p id='qrCode'>Your  QR Code with text <span class='red'>" + qrTextRaw + "</span> has been created</p></div>"; //bootsrap class= alert-success
        
		//creates button to save QR with FileSaver Library
		var barCodeImageSaveButton = "<br><br><a id='downloadLnk'><button class='btn' >Save QR </button></a><br><br><br><br>";
		
		// form the link to QR API
		var barCodeLink = "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" + qrText + "&choe=UTF-8"; //form the link to QR API
		// set <img> {crossOrigin='Anonymous'} is a must FIX
		var barCode =  "<span class='badge'><img crossOrigin='Anonymous' id='saveImg' src=" + barCodeLink  + " title=" + qrText + " alt='barcode' /></span>";  //set the link to <img>
		
		
		 
		
		//$("#qrResult").html(barCode).fadeIn(1200);
		//html text+qr+saveButton
		$("#qrResult").stop().fadeOut("slow",function(){ $(this).html(barCodeText + barCode + barCodeImageSaveButton)}).fadeIn(2000);//appear with animation
		
		
		 //Scroll to results in Mobile only
		  if(screen.width <= 640){ 
	          scrollResults("#qrResult"); //scroll the page down to weather results
		  }
		
		
		/*
        $.ajax({
            url: "ajax_php/ajax_QR_Generate_handler.php",
            type: "POST",
            data: {
				serverQR:qrText
			},
            //contentType: false,
            //cache: false,
            //processData:false,
            beforeSend : function()
            {
            },
            success: function(data)
            {
                if(data=='invalid')
                {
                // invalid file format.
                $("#qrResult").html("Invalid File !").fadeIn();
                } else {
                    // view result
                    $("#qrResult").html(data).fadeIn(900); 
                }
             },
            error: function(e) 
            {
                $("#qrResult").html(e).fadeIn();
            }          
        }); */
		
    });
	// 
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	// Save QR as JPEG image //https://github.com/eligrey/FileSaver.js, uses a canvas id="hiddenViewportCanvas" for saving QR <img> with FileSaver.js Library, because Filesaver.js can only save visible canvases, so we 1stly draw a received QR to this canvas and then hide it with JS
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	
	$(document).on("click", '#downloadLnk', function() {   // this  click  is  used  to   react  to  newly generated cicles;
	   if (confirm("Sure to download the image?\n Please notice, it may not work in some browsers, in this case use right-click save.")) {
		   
		   //to save image, first we have to convert it to canvas and then we can save it with FileSaver.js 
		   
		   var cnvs = document.getElementById('hiddenViewportCanvas'); //gets hidden canvas
           var ctx = cnvs.getContext('2d');
           var mirror = document.getElementById('saveImg'); // received qr img id 

           //cnvs.width = mirror.width = window.innerWidth;
            //cnvs.height = mirror.height = window.innerHeight;
		   

		   //var canvas = document.getElementById("saveImg");//, ctx = canvas.getContext("2d");
		   
		   //draw qr <img> to canvas
            ctx.drawImage(mirror,2,2); //ctx.drawImage(myImage, margin-left,margin-top)

            try{  //use try catch to show alert, when download is not working in samsung browser
               // Use FileSaver.js
               cnvs.toBlob(function(blob) {
                   saveAs(blob, "myBarCode.jpeg");
               });
		   
		       //hide  #hiddenViewportCanvas from view, as if set hidden from beginning, u won't be able to save img from it
	           cnvs.style.display="none";
			} catch(ee) {
				alert("Browser is not supported, use right-click save.");
				cnvs.style.display="none";
			}
	   } 
	   
	   
	 });
	
	// 
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	// Save QR as image //https://github.com/eligrey/FileSaver.js
	
	
	

	
	
	
	
	
	
	
	
	
	//On Focus in qr generate Section input in mobile version, scroll it up for better usabilty
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	$( "#qrtext" ).focus(function() {
		if(screen.width <= 640){
			 scrollResults("#qrGenerate");
		}	
    });

	// 
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	// OLD ----------------------------------------------------------------------------------------------------------------------------------
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
   
	
	
	
	
	
	
	
	
	
	
	
	// Scroll the page to results  #resultFinal
	function scrollResults(divName) 
	{
		 
         $('html, body').animate({
            
            scrollTop: $(divName).offset().top
			//scrollTop: $('.footer').offset().top
            //scrollTop: $('.your-class').offset().top
        }, 'slow'); 
		// END Scroll the page to results
	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	function scroll_toTop() 
	{
	    $("html, body").animate({ scrollTop: 0 }, "slow");	
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	

// END READY
});



