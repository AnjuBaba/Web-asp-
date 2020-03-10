// console.log("Hello World");
// var name1 = 1234;

// var name2 = "This is .Net Training " +name1

// var name3 = `the sum of 1 and 2 is ${1+2}`

// var multiLine = ` this 
//                   is
//                   multiline`


// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30        // by key "age" store value 30
//   };

let showBtn= document.querySelector("#showButton")
let hideBtn= document.querySelector("#hideButton")
let titleContent = document.querySelector(".alert")

showBtn.addEventListener('click',()=>
 {
     console.log("show")
     titleContent.innerHTML ="SHOW CONTENT"
      titleContent.style.display ="block"
 });

 hideBtn.addEventListener('click',()=>
 {
     console.log("hide")
     titleContent.innerHTML ="hide CONTENT"
      titleContent.style.display ="none"
 });

var images = [],c=0;
images[0] = "anjan.jpg";
images[1] = "anjan2.jpg";
images[2] = "Desert.jpg";

setInterval(()=>
{
    
    var img = document.querySelector(".image");
    img.src = images[c];
    c++;
    if ( c >= images.length)
    {
        c=0;
    }
    
},1000)
