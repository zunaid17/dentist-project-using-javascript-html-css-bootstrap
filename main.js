document.getElementById("btnp").addEventListener("click", sub);

 function sub() {
     var i1 = document.getElementById("validationCustom01").value;
     var i2 = document.getElementById("validationCustom02").value;
     

 
 if (i1 == "" && i2 == "" ) {
    document.getElementById("place1").innerHTML = "ERROR!!!!";
    document.getElementById("place2").innerHTML = "Please fill form first!";
    document.getElementById("place1").style.color = "RED";
    document.getElementById("place2").style.color = "RED";

}
else if (i1 != "" && i2 != "" ) {
    document.getElementById("place1").innerHTML = "SUCCESSFULL!!!!";
    document.getElementById("place2").innerHTML = "Your Details Have Been Submitted!!!!";
    document.getElementById("place1").style.color = "green";
    document.getElementById("place2").style.color = "green";
}
}
