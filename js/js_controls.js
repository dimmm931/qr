$(document).ready(function(){
  
  //some controls like clear-> hide/show are in qr_core_generated
	
     // On CheckBox change
    // **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
    $('input[type="checkbox"]').on('change', function() {
	     var passedID = this.id;
	     //alert(passedID);
	 
	     $(".coreDivs-toHide").hide(800);  //hide all divs with class="coreDivs"
	     $("#" + passedID + "Div").show(2000); // show a div that matches checkbox ID + "Div" (i.e qrScanDivDiv, qrGenerateDiv)
	});
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************


});
// end ready	
	