var Brugernavn1;
var Adgangskode1;
var Gyldigtbrugernavn1 = "KasperPetersen";
var GyldigtKodeord1 = "25129312";
function formdata() 
{
 Brugernavn1= document.getElementById("Brugernavn").value; // brugernavn textbox i html fill for gemt det der blev indtastet i variable Brugernavn1.
 Adgangskode1= document.getElementById("Adgangskode").value; //Adgangskode textbox i html fill for gemt det der blev indtastet i variable Adgangskode1.
/*document.writeln("<h1>Confirmation Page</h1><br>");
document.writeln("Thank you for completing this form.<br><br>");
document.writeln("The first name you entered is " + Brugernavn1 + "<br>");
document.writeln("The last name you entered is " + Adgangskode1);*/
document.getElementById("udskrivning").innerHTML = "Det indtastede brugernavn og adgangskode er:" + " " + Brugernavn1 + " " + Adgangskode1;
}

function tjekCredentials(){
Brugernavn1= document.getElementById("Brugernavn").value; // brugernavn textbox i html fill for gemt det der blev indtastet i variable Brugernavn1.
Adgangskode1= document.getElementById("Adgangskode").value; //Adgangskode textbox i html fill for gemt det der blev indtastet i variable Adgangskode1.
	if ((Brugernavn1 == Gyldigtbrugernavn1) && (Adgangskode1 == GyldigtKodeord1) )
	{
		document.getElementById("loginstatus").innerHTML = "Dette er et gyldigt brugernavn og adgangskode. Access granted" ;
		
	}
	else
	{
		document.getElementById("loginstatus").innerHTML = " ikke gyldig eller fejlet";
	}
}