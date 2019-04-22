/*var s = 0;
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

/*   
//select dog image
   const dog=document.querySelector("img");
//counter for counting clicks
   let counter=0;
//select the span with click id
const click=document.querySelector("#click");

//set counter into click
click.textContent=counter;
//add click event on dog image
   dog.addEventListener("click",()=>{
       counter++
       click.textContent=counter;
   })*/


  /*Anothermethod
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
   const dog4={
       name:"fattyboys",
       picture:"fattyboys.jpg",
       clicks:0
   }
   const dog5={
       name:"migos",
       picture:"migos.jpg",
       clicks:0
   }*/

class dog{
constructor(name,picture,clicks=0){
    this.name=names;
    this.picture=pictures;
    this.clicks=clicks;

}
}
const dog1=new dog("Salt" ,"img/puppy pigtales.jpg" );
const dog2=new dog("Peppa" ,"img/cute-puppy-2.jpg" );
const dog3=new dog("Bae&Jay" ,"img/Bae&Jay.jpg" );
const dog4=new dog("Fat Boys" ,"img/fattyboys.jpg" );
const dog5=new dog("The Migos" ,"img/migos.jpg" );

   //List of all dogs
   const dogs=[dog1,dog2,dog3,dog4,dog5];


   //Select left column in dom
   const leftColumn = document.querySelector(".col-4");

   //construct dog list
   const ul= document.createElement("ul");
   ul.className="list-group";

   for(dog of dogs){
       const li=document.createElement("li");
       li.className="list-group-item";
       li.textContent=dog.name;
    li.addEventListener("click",()=>{
        displayDog(dog);
    })

       ul.appendChild(li);  
   }

   leftColumn.appendChild(ul);

const displayDog=(dog)=>{
const rightColumn=document.querySelector(".col-8");

//Clear the display area
 rightColumn.innerHTML="";

//display the dog that I clicked
const h1=document.createElement("h1");
h1.textContent=dog.name;
rightColumn.appendChild(h1);

const img=document.createElement("img");
img.setAttribute("src", dog.picture);
img.setAttribute("alt", "dog");
img.addEventListener("click",()=>{
dog.clicks++;
h2.textContent
});
rightColumn.appendChild(img);

const h2=document.createElement("h2");
h2.textContent=`clicks:${dog.clicks}`;
//h2.textContent="Clicks: " + dog.clicks;
rightColumn.appendChild(h2); 
}