window.onload = ocultar;
function ocultar() {
	var fut = document.getElementById("futbolcancha").style.display ="none";
	var bask = document.getElementById("basketcancha").style.display="none";
	var tenni = document.getElementById("teniscancha").style.display="none";
}

var botonF=document.getElementById("futbol").addEventListener("click",mostrarF,true);
function mostrarF() {
	 ocultar();
	 document.getElementById("futbolcancha").style.display="block";
}
var botonB=document.getElementById("basquetbol").addEventListener("click",mostrarB,true);
function mostrarB() {
	ocultar()
	document.getElementById("basketcancha").style.display="block";
}
var botonT=document.getElementById("tenis").addEventListener("click",mostrarT,true);
    ocultar()
function mostrarT() {
	 document.getElementById("teniscancha").style.display="block";
}