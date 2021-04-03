function Prikaz(n){
let I= document.getElementById("INt");
let O= document.getElementById("INF");
let A= document.getElementById("K1R");let o={0:I,1:O,2:A};
for(i in o){o[i].style.display="none";}
o[n].style.display="block";}

function SH_MNY(a){let V="none"; if(a){V="block";}
document.getElementsByTagName("NAV")[0].style.display =V;
   document.getElementById("myOverlay").style.display =V;}