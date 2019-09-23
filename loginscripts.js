var Brugernavn1;
var Adgangskode1;
var Gyldigtbrugernavn1 = "KasperPetersen";
var GyldigtKodeord1 = "25129312";
var pin1;
var Gyldigtbrugernavn2 = "LP";
var GyldigtKodeord2 = "123456";
var Gyldigtbrugernavn3 = "Steven";
var GyldigtKodeord3 = "654321";
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

function tjekCredentials(){//tjekker om det man indtaster svare til de gyldige credentials
Brugernavn1= document.getElementById("Brugernavn").value; // brugernavn textbox i html fill for gemt det der blev indtastet i variable Brugernavn1.
Adgangskode1= document.getElementById("Adgangskode").value; //Adgangskode textbox i html fill for gemt det der blev indtastet i variable Adgangskode1.
	if ((Brugernavn1 == Gyldigtbrugernavn1) && (Adgangskode1 == GyldigtKodeord1) )
	{
		document.getElementById("loginstatus").innerHTML = "Dette er et gyldigt brugernavn og adgangskode. Access granted" ;
		generePinkode("loginstatus");
		location.href="testafkvitering.html"; //fører videre til næste side.
	}
	else
	{
		document.getElementById("loginstatus").innerHTML = " ikke gyldig eller fejlet";
	}
}

function generePinkode(){
	 var length = 4,
        charset = "0123456789",
        pin1 = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        pin1 += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("loginstatus").innerHTML += "<br> " + pin1;
	
}

/*function input(e) {
    document.getElementById("pin").value += e;
tbInput.value = tbInput.value + e.value;
}*/

/*function del() {
	//document.getElementById("pin").value  = "";
    var tbInput = document.getElementById("pin").value; // pinkode textbox indhold gemems i variable
    document.getElementById("pin").value = tbInput.substr(0, tbInput.length - 1 );// den tager fra starten til men tager ikke den sidste cirfre med (eks 256 = 25) og så fjerne den sidste cifre
}*/

function tjekCredentialsswitch(){
	Brugernavn1= document.getElementById("Brugernavn").value; // brugernavn textbox i html fill for gemt det der blev indtastet i variable Brugernavn1.
	Adgangskode1= document.getElementById("Adgangskode").value; //Adgangskode textbox i html fill for gemt det der blev indtastet i variable Adgangskode1.
	switch(Brugernavn1){
		case"KasperPetersen":
			if(Adgangskode1 == GyldigtKodeord1){
				document.getElementById("loginstatus").innerHTML = "Dette er et gyldigt brugernavn og adgangskode. Access granted" ;
				pin1 = generePinkode("loginstatus");
				location.href="testafkvitering.html"; //fører videre til næste side.
			}
			else{
				document.getElementById("loginstatus").innerHTML = " Forkert Brugernavn eller password";	
			}	
			break;	
		case"LP":
			if(Adgangskode1 == GyldigtKodeord2){
			document.getElementById("loginstatus").innerHTML = "Dette er et gyldigt brugernavn og adgangskode. Access granted" ;
				//pin2 = generePinkode("loginstatus");
				location.href="testafkvitering.html"; //fører videre til næste side.
			}
			else{
				document.getElementById("loginstatus").innerHTML = " Forkert Brugernavn eller password";	
			}	
			break;
		case"Steven":
			if(Adgangskode1 == GyldigtKodeord3){
			document.getElementById("loginstatus").innerHTML = "Dette er et gyldigt brugernavn og adgangskode. Access granted" ;
				//pin3 = generePinkode("loginstatus");
				location.href="testafkvitering.html"; //fører videre til næste side.
			}
			else{
				document.getElementById("loginstatus").innerHTML = " Forkert Brugernavn eller password";	
			}
			break;			
			
		default:
			document.getElementById("loginstatus").innerHTML = " Forkert brugernavn eller password";	
		
			
	}
	
}

/*function tjekpin(){
	indtastetpin = document.getElementById("pin").value;
	switch(indtastetpin){
		case"1234":
			if (indtastetpin == pin2){
			document.getElementById("udskrivning").innerHTML = "godkendt pin, sender 1 til arduino";
		
		}
		break;
		
		case"4321":
			if (indtastetpin == pin3){
			document.getElementById("udskrivning").innerHTML = "godkendt pin, sender 1 til arduino";
		
		}
		break;
		
		default:
			document.getElementById("udskrivning").innerHTML = " Forkert pin sender 0";
	}
	
}*/