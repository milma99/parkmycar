function calcCharge()
{
	var sati=parseInt(document.fee.sati.value);
	var tot;
	if (sati==1)
		tot=1;
	else if (sati>1 && sati<=20)
		tot=0.5*(sati);
	else
		tot=10;
	
	
    alert("Cijena parkinga :"+tot+" KM ");
    function calcTotal()
{
	var totCha;
	totCha=parseInt(totCha);
	totCha+=document.tot.value;
	alert("Total charge all customers"+totCha);
}
		
}