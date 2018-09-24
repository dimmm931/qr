<?php
        //NOT USED, CAUSED CRASHING, may be due Google  security policy!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //ini_set('display_errors', 1);
        //ini_set('display_startup_errors', 1);
        //error_reporting(E_ALL);
         
		 
        //form the URL for QR Scan
		$qrText = $_POST['serverQR'];
	    $data_url = "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" . $qrText . "&choe=UTF-8" . " title='QR' ";
		 
		echo $data_url . "<br>";
		 
		 
		 
		 
	
	
	     // Gets the QR Scan result
		 
         if (!$json = file_get_contents($data_url)) {
			 //echo $data_url;
		     echo "<br>Api stats php Error</br>";
	     }
		 echo $json;
		 
		 
		 
		 
                          //CURL---------
						  /*
                          $myCurl = curl_init();  
                          curl_setopt($myCurl, CURLOPT_URL, $data_url);
                          //curl_setopt($myCurl, CURLOPT_POST, 1);  // setting post request $_POST['']
                          //curl_setopt($myCurl, CURLOPT_POSTFIELDS, $postfields); //  http_build_query(array('postvar1' => $fileSent)) );  //urldecode(http_build_query($params)));      http_build_query(array('postvar1' => 'value1')     //sends $_POST['']
                          //curl_setopt($myCurl, CURLOPT_RETURNTRANSFER, true);
                          curl_setopt($myCurl, CURLOPT_SSL_VERIFYPEER, false);
                          $result = curl_exec($myCurl);
                          curl_close($myCurl);
						  //END CURL------
						  echo $result;
		                  */
		 
		 
		 
		 
		 
		 
		 
         //$obj = json_decode($json,true);//,  true used for [], not  used  for '->';
	     
         
         //print_r($obj); // display the JSOn to screen
         //echo json_encode($obj); // MAke sure JSOn encode  gotten result 
	
	
		

?>