<!doctype html>
<!--------------------------------Bootstrap  Main variant ------------------------------------------>
  <html lang="en-US">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html">
      <meta name="description" content="QR Codes, qr codes on-line," />
      <meta name="keywords" content="QR Codes on-line">
      <title>QR Codes</title>
  
      <!--Favicon-->
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	  
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	 

      <link rel="stylesheet" type="text/css" media="all" href="css/myQRCss.css">
      <script src="js/qr_core_generate.js"></script><!--  Core QR create JS-->
	  <script src="js/qr_scanner.js"></script><!--  Core QR read/scan JS --- NOT USED- SO FAR IT IS NOT USED AT ALL-> it is delegated to Library/JS_Lib_toScan_QR--> 
	  <script src="js/js_controls.js"></script><!-- js_controlsn (hides/show el)--> 
	  <script src="Library/FileSaver_libary/FileSaver.js"></script><!-- JS FileSaver library--> <!-- https://github.com/eligrey/FileSaver.js-->
	  
	  <script type="text/javascript" src="Library/JS_Lib_toScan_QR/webqr.js"></script>    <!--   QR read/scan Library--> <!-- Injected for Scan/Read-->
	  <script type="text/javascript" src="Library/JS_Lib_toScan_QR/llqrcode.js"></script> <!--   QR read/scan Library--> <!-- Injected for Scan/Read-->
	  
	  <script src="js/changeStyleTheme.js"></script> <!-- change wallpapers,changeStyleTheme JS-->
	  
	  
	  
	
	  
	  <meta name="viewport" content="width=device-width" />
	  
	  <!--Favicon-->
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

     </head>

     <body  onload="load(); setimg();">  <!-- Injected for Scan/Read-->

       <div id="headX" class="jumbotron text-center gradient alert-success my-background head-style" style =' background-color:lavender ;'> <!--#2ba6cb;-->
         <h1 id="h1Text"> <span id="textChange"> QR Codes on-line</span> <span class="glyphicon glyphicon-paste"><!--</span> <img src="http://78.media.tumblr.com/tumblr_m2hq5tt3ma1qav3uso1_400.gif" style="width:3%"/>--> </h1> 
		   
           <!--<p class="header_p">QR Codes on-line processor   <span class="glyphicon glyphicon-duplicate"></span>-->    <!--generates random lists, ramdomizes integers, etc-->
           </p>
		   <!--<p class="language"><a href="/eng">ENG</a></p>-->
		   
	   </div>



       
         <div class="wrapper grey">
    	     <div class="container">
		         <div class="row row1">
			 
			         <!-------CHECKBOX to change generate/scan--><!-- Checkbox ID will be used in js_controls.js to form div ids (qrGenerateDiv,etc) -->
			         <div class=" col-sm-12 col-xs-12 my-background checkbox head-style"> <!-- Checkbox ID will be used in JS to form div ids (randListDiv,etc) -->
                          <label><input type="checkbox" value="" name="r" id="qrGenerate" checked >Generate QR<!--Random list--></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			             <label><input type="checkbox" value="" name="r" id="qrScan">Scan QR<!--Random int--></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     </div>
			         <!---- END CHECKBOX to change generate/scan-->
					 
			  
			         <!-------------- GENERATE qr Form Start------------->	
			         <!-- Each div should have id = checkboxID + "Div",  to automate it in js_controls.js -->
		             <div class="col-sm-4 col-xs-12 my-background coreDivs-toHide head-style" style="background-color:lavender;" id="qrGenerateDiv" >
		                 <!-------------- GENERATE Form Start------------->	
                         <form action="" id="myFormZ" method="post">
                             <div class="form-group">
                                  <label for="qrtext">Your text to QR: <span class="glyphicon glyphicon-transfer"></span></label>
                                  <input type="text" class="form-control" id="qrtext" name="qr">
                             </div>
					
                            <button type="button" class="btn btn-default" id="submitQR">Submit</button>
				            <button type="button" class="btn btn-default" id="clear">Clear</button>
                        </form>				   
                        <!---------------- END GENERATE  Form -------->				   
				  
			         </div> <!--END <div class="col-sm-4" style="background-color:lavender;">-->
				     <!--</div>--> <!--"row">-->
				 
				 
				 
				     <!--------- Start DIV to display QR Generate Results -------->
				     <!--<div class="" id="qrResultRow">-->
				          <div class="col-sm-4 col-xs-12" id="qrResult">
                                <?php
								     //PHP DELEGATED to JS qr_core_generated.js ->{$("#submitQR").click(function(e)}
                                    // START GENERATING QR**********************************************************************************
									/*
                                    if( isset($_POST['qr']) && $_POST['qr']!=''){ //if issert and the value not NULL, it helps to avoid proccess on page reload
                                        $text = $_POST["qr"];//your input
                                        $textR = str_replace(' ', '+', $text);  //  replace  all  blankspaces  with "+" as with  blankspaces it proceedes only  the  1  st word;
                                        //echo $textR;
                                        $url = "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" . $textR . "&choe=UTF-8" . " title='QR' ";
	 
                                        echo '<div class="alert alert-success"><p id="qrCode">Your  QR Code with text <span class="red">' . $text . '</span> has been created</p></div>'; //bootsrap class= alert-success
                                        echo '<div><span class="badge "><img src='.$url.' /></span></div>'; // BStrap Class badge to make a frame
				    
					                    unset($text);
					                    unset($_POST['qr']);// delete var to prevent appear on reload
					                    exit();
  
                                      } //End isset($_POST['QRSend'])
									  */
                                    // END  GENERATING QR--------------------------------------------------------------------------------------
								?>
				          </div>
                     <!--</div>--><!-- end class="row"-->	
				     <!--------- END  DIV to display QR Generate -------->
				 
				   </div>  <!-- END class="row row1"> here, to make sure QR img appears on the same line in desktop-->
				 
				 
				 
				  
				   
				   
			       <!--------- QR Scan Form Was cut here ------->
				
				
				
				

				
				
				  <!-------------------------------------------------- Injected DIV for Scan/Read----------------------------------------------->
				  <br>
				  <div class="row coreDivs-toHide head-style" id="qrScanDiv" style="display:none;" >
				      <div class="col-sm-4 col-xs-12 " id="qrscanner">
				 
				          <!----Provided by library-->
				          <div id="main">
                               <div id="mainbody">
                                    <div id="outdiv"></div>
                                    <div id="result" class="my-background head-style"></div>
                               </div>
						  </div>         
                          <canvas id="qr-canvas" width="" height="10px;"></canvas> <!--Canvas to draw image -->
				         <!----Provided by library-->
				   
				   </div>
				   </div>
		          <!-------------------------------------------------- Injected for Scan/Read----------------------------------------------->		
				
				
				
	 
	 
	 
    		</div><!-- /.container -->	  		
         </div><!-- /.wrapper -->
        
                


    	           <!-- This is a auto hidden canvas, used for saveing qr image to JPEG-->
				   <!--used for saving QR <img> with FileSaver.js because Filesaver.js can only save visible canvases, so we 1stly draw a received QR to this canvas and then hide it with js {cnvs.style.display="none";}-->
				   <canvas id="hiddenViewportCanvas" width="300" height="400" style=""></canvas>
				   <!-- End  a hidden canvas-->
    	
		
		
		
			      <!-----------------  Button to change Style theme------------------------->
	              <input type="button" class="btn" value=">>" id="changeStyle" style="position:absolute;top:0px;left:0px;" title="click to change theme"/>
	              <!-----------------  Button to change Style theme------------------------->
				  
				  
				  
				  
				  
		
		          <!------------- Footer ------------->
				  <div class="footer navbar-fixed-bottom"> <!--navbar-fixed-bottom  fixxes bootom problem-->
				      Contact: <strong>dimmm931@gmail.com</strong><br>
					  <?php  echo date("Y"); ?>
				  </div>
		          <!------------ END Footer ----------->  
		
		
		
		
		<!-- ##### -- Advertise -- #### -->
		<!--
		   <div class="ads ">
		        <a target="_blank" href="https://www.facebook.com/events/165143454205556/" id="link">
				    <img src="images/ads/sub_od.jpg" alt="Submerged"/>  
				</a>	
			</div>
			-->
		<!-- ##### -- END Advertise -- #### -->
		
		
		
		
    
    </body>
</html>





<?php

// Record (with CLASS) all the  input  to  txt;  //;
      include("Classes/RecordTxt.php");
      RecordTxt::RecordAnyInput(array(/*$user*/), 'recordText/random.txt');// Record  to  text;
//End  Record;
?>
