var iframe = document.getElementsByTagName('iframe')[0]
var printerdiv = document.getElementById('printers')
var og_list = printerdiv.innerHTML
var hider = '<a href="#" onclick="hidePage()">Close Window</a> - '
function add_listeners(){
	document.getElementById("printer1").addEventListener("click", function() {
	showPage("http://10.7.1.63/web/guest/en/websys/webArch/authForm.cgi");
	}, false);
	document.getElementById("printer2").addEventListener("click", function() {
		showPage("http://10.7.1.56/web/guest/en/websys/webArch/authForm.cgi");
	}, false);
	document.getElementById("printer3").addEventListener("click", function() {
		showPage("http://10.7.1.40/web/guest/en/websys/webArch/authForm.cgi");
	}, false);
	document.getElementById("printer4").addEventListener("click", function() {
		showPage("http://10.7.1.32/web/guest/en/websys/webArch/authForm.cgi");
	}, false);
	document.getElementById("printer6").addEventListener("click", function() {
		showPage("http://10.7.1.45/web/guest/en/websys/webArch/authForm.cgi");
	}, false);
}
function showPage(u){
	iframe.src = u

	setSize()

	printerdiv.innerHTML = hider + u.substring(7,16)
}
function setSize(){
	if(document.body.clientWidth-200>600){
		iframe.width=document.body.clientWidth-200
	} else {
		iframe.width="1080"
	}

	if(screen.height-300>400){
		/*iframe.height=document.body.clientHeight-300*/
		iframe.height=screen.height-360
		 
	} else {
		iframe.height="1080"
	}
}
window.onresize = function (){
	setSize()
}
function hidePage(u){
	iframe.src = ""
	iframe.width = "0"
	iframe.height = "0"
	printerdiv.innerHTML=og_list
	add_listeners()
}
add_listeners()
