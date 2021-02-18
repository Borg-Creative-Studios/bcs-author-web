document.getElementById("head").innerHTML =
    localStorage["head"] || "Bill Bob Joe"; // default text

document.getElementById("solutation").innerHTML =
    localStorage["solutation"] || "Dear Mr. or Mrs,"; // default text
document.getElementById("closing").innerHTML =
    localStorage["closing"] || "sincerely yours,"; // default text
document.getElementById("yourName").innerHTML =
  localStorage["yourName"] || "Billy Bob Joe"; // default text

document.getElementById("heading").innerHTML =
  localStorage["title"] || "The title"; // default text
document.getElementById("body").innerHTML =
  localStorage["text"] || "The body"; // default text
  document.getElementById("footer").innerHTML =
    localStorage["footer"] || "The footer"; // default text

setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
  localStorage["text"] = document.getElementById("body").innerHTML; // content div
  localStorage["footer"] = document.getElementById("footer").innerHTML; // content div
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
var x = document.getElementById("controlBar2");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}
function show2(){
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
