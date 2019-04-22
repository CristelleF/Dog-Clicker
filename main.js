var s = 0;
   function buttonClick1() {
       document.getElementById('salt').value = ++s;
   }

   var p = 0;
   function buttonClick2() {
       document.getElementById('peppa').value = ++p;
   }

   var b = 0;
   function buttonClick3() {
       document.getElementById('Bae&Jay').value = ++b;
   } 

   var f = 0;
   function buttonClick4() {
       document.getElementById('fattyboys').value = ++f;
   }
   
   var m = 0;
   function buttonClick5() {
       document.getElementById('migos').value = ++m;
   }

/*   const dog=document.querySelector("img");
   let counter=0;

const click=document.querySelector("#click");


click.textContent=counter;

   dog.addEventListener("click",()=>{
       counter++
       click.textContent=counter;
   })*/

   const dog1={
       name:"Salt",
       picture:"puppy pigtales.jpg",
       clicks:0
   }
   const dog2= {
       name:"Peppa",
       picture:"cute-puppy-2.jpg",
       clicks:0
   }
   const dog3= {
       name:"Bae&Jay",
       picture:"Bae&Jay.jpg",
       clicks:0
   }
   const dogs=[dog1,dog2,dog3]

   for(dog of dogs){
      dog.addEventListener() 
   }
   function myFunction(){
       dogs.splice(2,0,"fattyboys","migos");
   }