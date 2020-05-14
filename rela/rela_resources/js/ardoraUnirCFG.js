//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=3;
var score=0; scoreMax=10; scoreInc=10; scoreDec=5
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#D2D77D"; colorText="#000000"; colorSele="#FFE4CA";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="felicitaciones excelente trabajo"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="cmVsYQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["REVSRUNIT1M", "TmVjZXNpZGFkZXMgcXVlIGxhcyBwZXJzb25hcyB0aWVuZW4gcXVlIHRlbmVyIEN1YmllcnRhcyBwYXJhIFBvZGVyIFZpdmlyIERpZ25hbW5ldGU"],["SFVNQU5PUw", "U2VyZXMgcXVlIGZvcm1hbiBwYXJ0ZSBkZSBsYSBlc3BlY2llIEh1bWFuYQ"],["REVDTEFSQUNJT04", "SU5GT1JNQUNJT04sIENPTkZJUk1BQ0lPTg"],["VU5JVkVSU0FM", "UXVlIHNlIEV4dGllbmRlIGEgdG9kbyBlbCBNdW5kby4gYSB0b2RvcyBsb3MgUGFpc2VzIHkgUGVyc29uYXM"]];
var c=[[8,83],[7,43],[11,25],[9,62]];
var con1=["DERECHOS","HUMANOS","DECLARACION","UNIVERSAL"];
var con2=["INFORMACION, CONFIRMACION","Que se Extiende a todo el Mundo. a todos los Paises y Personas","Necesidades que las personas tienen que tener Cubiertas para Poder Vivir Dignamnete","Seres que forman parte de la especie Humana"];
var sel1=""; join1=[]; join2=[];
