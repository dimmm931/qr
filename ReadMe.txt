 ======= QR Barcode create/geneerate Section ==========
1.How to create QR SECTION
<!--<img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=example2.esy.es&choe=UTF-8" title="Link to Google.com" />-->
<!--
300x300 is the size of the QR image you want to generate,
the chl is the url-encoded string you want to change into a QR code, and
the choe is the (optional) encoding.-->

<!--  Send  sms example
http://chart.apis.google.com/chart?cht=qr&chs=200x200&chl=sms:3809766413-->


//Uses Filesaver.js to save QR to local ( https://github.com/eligrey/FileSaver.js)
//When saving QR as an image, we use a canvas id="hiddenViewportCanvas" for saving QR <img> with FileSaver.js Library, 
  because Filesaver.js can only save visible canvases, so we 1stly draw a received QR to this canvas and then hide it with js {cnvs.style.display="none";}


---------------------------------------------------------------------------------------------------------------------------


 ======= QR Barcode read/ scan Section ==========
2.How to scan/ read QR SECTION
Previously tried gogr.me API, it worked while using <form action="http://api.qrserver.com/v1/read-qr-code/">(returning JSON), but can't use with ajax, passing an image to {http://api.qrserver.com/v1/read-qr-code/}
Thus now it uses Library/JS_Lib_toScan_QR/webqr.js + llqrcode.js
To use:
1. Use spec HTML mark -up(form to load file is generated inside it with js Libary {Library/JS_Lib_toScan_QR/webqr.js}):
                          div id="main">
                               <div id="mainbody">
                                    <div id="outdiv"></div>
                                    <div id="result" class="my-background"></div>
                               </div>
						  </div>         
                          <canvas id="qr-canvas" width="" height="10px;"></canvas> <!--Canvas to draw image -->
						 
2. Add Js library to index.php: 
       <script type="text/javascript" src="Library/JS_Lib_toScan_QR/webqr.js"></script>    <!--   QR read/scan Library--> <!-- Injected for Scan/Read-->
	   <script type="text/javascript" src="Library/JS_Lib_toScan_QR/llqrcode.js"></script>
	  
	  
	  
3.example at https://www.phpgang.com/how-to-decode-qr-code_344.html?doing_wp_cron=1536153588.1285529136657714843750
 1. 
 2.
