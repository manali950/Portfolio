<html lang="en">
<head>
<title>Download</title>



</head>
<?php
$name="Er.Shivam Pathak";
$designation="Software Engineer HCL";
$Skills="FrontEnd (React)/BackEnd (PhP,Java)";
?>
<body onload="myFunction();">

</body>

						<!-- jsPDF library -->
						<script src="jspdf.min.js"></script>

						<script>
						/*
						 * Generate PDF document
						 */
						 
						function myFunction() {


						var doc = new jsPDF(
						{
						 orientation: 'l',
						 unit: 'mm',
						 format: 'credit-card',
						 putOnlyUsedFonts:true
						}
						);//'p', 'mm', [210, 297] Portrait format

						/* var imgData = ' variable define in php file  base 64 code ' */
						 <?php include ("certiImg64.php"); ?>


							doc.addImage(imgData, 'JPEG', 0, 0,90,50 ); //'p', 'mm', [210, 297] Portrait format
							doc.setFont("courier");
							doc.setFontSize(10);
							//doc.setTextColor(13,15,49);
							//doc.text(110, 140, 'Mr./Ms. ');
							doc.setTextColor(0,0,0);
							doc.text('<?php echo $name; ?>', 49, 7 );
							
							doc.setTextColor(0,0,0);
							doc.text('<?php echo $designation; ?>', 10, 47 );
							
							doc.setFontSize(8);
							doc.setTextColor(13,15,49);
							doc.text(10, 51, 'Skills: ');
							doc.setTextColor(0,0,0);
							doc.text('<?php echo $Skills; ?>', 22, 51 );
						

							doc.setDrawColor(0,0,255);
						//	doc.rect(105, 132, 180, 24, '0'); */
							
							// Save the PDF
							doc.save('<?php echo $name; ?>_certi.pdf');
						}

						</script>
						
						<h1>Thanks</h1>
						<p>Web page redirects after 5 seconds.</p>
							<script>
								 //setTimeout(function(){
									//window.location.href = 'index.php';
								// }, 5000);
							  </script>
</html>