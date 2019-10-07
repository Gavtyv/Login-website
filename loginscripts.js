var Brugernavn1;
var Adgangskode1;
var Gyldigtbrugernavn1 = "KasperPetersen";
var GyldigtKodeord1 = "25129312";
var pin1;
var Gyldigtbrugernavn2 = "LP";
var GyldigtKodeord2 = "123456";
var pin2 = "1234";
var Gyldigtbrugernavn3 = "Steven";
var GyldigtKodeord3 = "654321";
var pin3 = "4321";

function formdata() 
{
 Brugernavn1= document.getElementById("Brugernavn").value; // brugernavn textbox i html fill for gemt det der blev indtastet i variable Brugernavn1.
 Adgangskode1= document.getElementById("Adgangskode").value; //Adgangskode textbox i html fill for gemt det der blev indtastet i variable Adgangskode1.
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
    document.getElementById("myText").innerHTML += "<h2>" + pin1 + "</h2><br>";
	
}


function tjekCredentialsswitch(){
	// brugernavn textbox i html fill for gemt det der blev indtastet i variable Brugernavn1.
	Brugernavn1= document.getElementById("Brugernavn").value; 
	
	//Adgangskode textbox i html fill for gemt det der blev indtastet i variable Adgangskode1.
	Adgangskode1= document.getElementById("Adgangskode").value;
	
	switch(Brugernavn1){
		case"KasperPetersen":
			if(Adgangskode1 == GyldigtKodeord1){
				document.getElementById("loginstatus").innerHTML = 
				"Dette er et gyldigt brugernavn og adgangskode. Access granted" ;
				location.href="testafkvitering.html"; //fører videre til næste side.
			}
			else{
				document.getElementById("loginstatus").innerHTML = " Forkert Brugernavn eller password";	
			}	
			break;
			
		case"LP":
			if(Adgangskode1 == GyldigtKodeord2){
				document.getElementById("loginstatus").innerHTML = "Dette er et gyldigt brugernavn og adgangskode. Access granted" ;
				location.href="testafkvitering.html"; //fører videre til næste side.				
			}
			else{
				document.getElementById("loginstatus").innerHTML = " Forkert Brugernavn eller password";	
			}	
			break;
			
		case"Steven":
			if(Adgangskode1 == GyldigtKodeord3){
				document.getElementById("loginstatus").innerHTML = "Dette er et gyldigt brugernavn og adgangskode. Access granted" ;
				visPinNummer = "3";
				location.href="testafkvitering.html"; //fører videre til næste side.
			}
			else{
				document.getElementById("loginstatus").innerHTML = " Forkert Brugernavn eller password";	
			}
			break;			
			
		default:
			document.getElementById("loginstatus").innerHTML = " Forkert Brugernavn eller password";	
		
			
	}
	
}

function vispin1(){
	pin1;
	document.getElementById("myText").innerHTML = pin1;
}

function vispin2(){
	pin2;
	document.getElementById("myText").innerHTML = pin2;
}

function vispin3(){
	pin3;
	document.getElementById("myText").innerHTML = pin3;
}

