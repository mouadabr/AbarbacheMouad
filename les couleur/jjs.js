



let btn = document.getElementById('bt')
var div = document.getElementById('1')
var di = document.getElementById('p')

let cl=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];   

var rgb 
function change(){
  rgb=["#"]
    
    let a ;
    for(var i=0;i<6;i++){
   a= Math.floor(Math.random()*15);  
    
   rgb=rgb+cl[a]
 
}
di.innerHTML=rgb
div.style.backgroundColor=rgb

}




btn.addEventListener("click",change)
















