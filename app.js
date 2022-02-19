document.getElementById("heading").innerHTML =
  localStorage["title"] || "The title"; // default text
document.getElementById("body").innerHTML =
  localStorage["text"] || "The body"; // default text
  document.getElementById("footer").innerHTML =
    localStorage["footer"] || "The footer"; // default text

document.getElementById("heading").className =
    localStorage["titles"] || "pn_l"; // default text
document.getElementById("body").className =
    localStorage["texts"] || "pn_m"; // default text
document.getElementById("footer").className =
      localStorage["footers"] || "pn_m"; // default text
  
document.getElementById("heading").style.color =
      localStorage["titlec"] || "#000"; // default text
document.getElementById("body").style.color =
      localStorage["textc"] || "#000"; // default text
document.getElementById("footer").style.color =
        localStorage["footerc"] || "#000"; // default text
    
setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["title"] = document.getElementById("heading").innerHTML + ' '; // heading div
  localStorage["text"] = document.getElementById("body").innerHTML + ' '; // content div
  localStorage["footer"] = document.getElementById("footer").innerHTML + ' '; // content div

  localStorage["titles"] = document.getElementById("heading").className + ' '; // heading div
  localStorage["texts"] = document.getElementById("body").className + ' '; // content div
  localStorage["footers"] = document.getElementById("footer").className + ' '; // content div

  localStorage["titlec"] = document.getElementById("heading").style.color + ' '; // heading div
  localStorage["textc"] = document.getElementById("body").style.color + ' '; // content div
  localStorage["footerc"] = document.getElementById("footer").style.color + ' '; // content div

}, 1000);
function clear(){
  localStorage.clear();
}
function hide(){
document.getElementById("controlBar").style.visibility = "hidden";
document.getElementById("footerHide").style.visibility = "hidden";
var x = document.getElementById("top");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}
function show(){
document.getElementById("controlBar").style.visibility = "visible";
document.getElementById("footerHide").style.visibility = "visible";
var x = document.getElementById("top");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "visible";
}
}
function hide2(){
   document.getElementById("ab").style.visibility = 'visible';
var x = document.getElementById("controlBar2");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}


function show2(){
   document.getElementById("ab").style.visibility = 'hidden';
var x = document.getElementById("controlBar2");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "visible";
}
}



function Hpf(){
   document.getElementById("heading").className = "pf_l";
}
function Hpn(){
   document.getElementById("heading").className = "pn_l";
}
function Hpc(){
   document.getElementById("heading").className = "pc_l";
}
function Hpo(){
   document.getElementById("heading").className = "po_l";
}
function Hph(){
   document.getElementById("heading").className = "ph_l";
}
function Hcenter(){
 document.getElementById("heading").style.textAlign = "center";
}
function Hleft(){
 document.getElementById("heading").style.textAlign = "left";
}
function Hright(){
 document.getElementById("heading").style.textAlign = "right";
}

function Bpf(){
   document.getElementById("body").className = "pf_m";
}
function Bph(){
   document.getElementById("body").className = "ph_m";
}
function Bpn(){
   document.getElementById("body").className = "pn_m";
}
function Bpc(){
   document.getElementById("body").className = "pc_m";
}
function Bpo(){
   document.getElementById("body").className = "po_m";
}
function Bcenter(){
 document.getElementById("body").style.textAlign = "center";
}
function Bleft(){
 document.getElementById("body").style.textAlign = "left";
}
function Bright(){
 document.getElementById("body").style.textAlign = "right";
}
function Fpf(){
   document.getElementById("footer").className = "pf_m";
}
function Fph(){
   document.getElementById("footer").className = "ph_m";
}
function Fpn(){
   document.getElementById("footer").className = "pn_m";
}
function Fpc(){
   document.getElementById("footer").className = "pc_m";
}
function Fpo(){
   document.getElementById("footer").className = "po_m";
}
function Fcenter(){
 document.getElementById("footer").style.textAlign = "center";
}
function Fleft(){
 document.getElementById("footer").style.textAlign = "left";
}
function Fright(){
 document.getElementById("footer").style.textAlign = "right";
}

function black(){
   document.getElementById("heading").style.color = "black";
   document.getElementById("body").style.color = "black";
   document.getElementById("footer").style.color = "black";
}
function green(){
   document.getElementById("heading").style.color = "green";
   document.getElementById("body").style.color = "green";
   document.getElementById("footer").style.color = "green";
}
function red(){
   document.getElementById("heading").style.color = "red";
   document.getElementById("body").style.color = "red";
   document.getElementById("footer").style.color = "red";
}
function blue(){
   document.getElementById("heading").style.color = "#0099ff";
   document.getElementById("body").style.color = "#0099ff";
   document.getElementById("footer").style.color = "#0099ff";
}



function hblack(){
   document.getElementById("heading").style.color = "black";
   document.getElementById("hcustomcolor").value = "black";


}
function hgreen(){
   document.getElementById("heading").style.color = "green";
   document.getElementById("hcustomcolor").value = "green";


}
function hred(){
   document.getElementById("heading").style.color = "red";
   document.getElementById("hcustomcolor").value = "red";


}
function hblue(){
   document.getElementById("heading").style.color = "#0099ff";
   document.getElementById("hcustomcolor").value = "blue";


}


function bblack(){

   document.getElementById("body").style.color = "black";
   document.getElementById("bcustomcolor").value = "black";

}
function bgreen(){

   document.getElementById("body").style.color = "green";
   document.getElementById("bcustomcolor").value = "green";

}
function bred(){

   document.getElementById("body").style.color = "red";
   document.getElementById("bcustomcolor").value = "red";

}
function bblue(){

   document.getElementById("body").style.color = "#0099ff";
   document.getElementById("bcustomcolor").value = "green";

}



function fblack(){


   document.getElementById("footer").style.color = "black";
   document.getElementById("fcustomcolor").value = "black";
   
}
function fgreen(){


   document.getElementById("footer").style.color = "green";
   document.getElementById("fcustomcolor").value = "green";
}
function fred(){


   document.getElementById("footer").style.color = "red";
   document.getElementById("fcustomcolor").value = "red";
}
function fblue(){


   document.getElementById("footer").style.color = "#0099ff";
   document.getElementById("fcustomcolor").value = "blue";
}



function hcustomcolor(){


   document.getElementById("heading").style.color = document.getElementById("hcustomcolor").value;
}

function bcustomcolor(){


   document.getElementById("body").style.color = document.getElementById("bcustomcolor").value;
}
function fcustomcolor(){


   document.getElementById("footer").style.color = document.getElementById("fcustomcolor").value;
}

function hrecallcolor(){
   document.getElementById("hcustomcolor").value = document.getElementById("heading").style.color;
}
function brecallcolor(){
   document.getElementById("bcustomcolor").value = document.getElementById("body").style.color;
}
function frecallcolor(){
   document.getElementById("fcustomcolor").value = document.getElementById("footer").style.color;
}

function colorinspect(){
   document.getElementById("inspectortitle").innerHTML = 'Color Inspector';
   document.getElementById("inspector1").innerHTML = 'Heading: ' + document.getElementById("heading").style.color;
   document.getElementById("inspector2").innerHTML = 'Body: ' + document.getElementById("body").style.color;
   document.getElementById("inspector3").innerHTML = 'Footer: ' + document.getElementById("footer").style.color;

   document.getElementById("inspectorcontrols").innerHTML = '<button class="btn btn-outline-dark" onclick="closeinspector();">X</button>';

}



function closeinspector(){
   document.getElementById("inspectortitle").innerHTML = '';
   document.getElementById("inspector1").innerHTML = '';
   document.getElementById("inspector2").innerHTML = '';
   document.getElementById("inspector3").innerHTML = '';

   document.getElementById("inspectorcontrols").innerHTML = '';

}



function welcome(){
   document.getElementById("iframe").src = "./welcome.html";
}
function doc1(){
   document.getElementById("iframe").src = "./doc.html";
}
function doc2(){
   document.getElementById("iframe").src = "./doc2.html";
}
function doc3(){
   document.getElementById("iframe").src = "./doc3.html";
}
function doc4(){
   document.getElementById("iframe").src = "./doc4.html";
}
function doc5(){
   document.getElementById("iframe").src = "./doc5.html";
}
function doc6(){
   document.getElementById("iframe").src = "./doc6.html";
}
function doc7(){
   document.getElementById("iframe").src = "./doc7.html";
}

function privacy(){
   document.getElementById("iframe").src = "./privacy.html";
}

function save() {
   var blob = new Blob([localStorage["title"], localStorage["text"], localStorage["footer"]],
    { type: "text/plain;charset=utf-8" });
   saveAs(blob, "author.txt");
}

function expand() {
   document.getElementById("document").style.height = "500px";
}

function shrink() {
   document.getElementById("document").style.height = "3in";
}