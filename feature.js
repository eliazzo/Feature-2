   // global level
   
   let imageList = document.getElementById("image-list"); //selects the "image list" ul

    const imageListItems = document.querySelectorAll("li");//returns the image-list li items as a list
    const numberOfImageListItems = imageListItems.length; //returns the length of the image-list li items
    const nextButton = document.getElementById("next"); //selects the "next" button
    const previousButton = document.getElementById("previous"); //selects the "previous" button

    const imageDescriptionElement = document.getElementById("description") // selects the "description" p element
    const displayImagePosition = document.getElementById("position") // selects "position" p element


    imageList.style.left = 0 // sets the css left property to 0
    let imagePosition = 1; 
    const dotList = document.querySelectorAll(".dots");
    dotList[0].style.backgroundColor = "rgba(0,0,0,0.8)";
 
  
  // make sure to put code in the context of the app when explaining functions

    function nextImage(){
        console.log(dotList[0].style);

        if(imagePosition < numberOfImageListItems){ // if the imagePosition is less than the numberOfImageListItems
            console.log(imageList.style.left); // console.log the css left property (0px) 
            const newLeft = parseInt(imageList.style.left) - 500 + "px"; // parseInt takes a string as an argument an converts to a number - in this case 0px into 0 // subtracts 500 from 0 // converts back to px
            imageList.style.left = newLeft; // sets the left style attribute equal to the newLeft variable value
            console.log(newLeft);
            imagePosition++; //increments (increases) imagePosition with each onclick 
        }
        // Setting the image carousel to automatically return to first image when it reaches the end of the slideshow 
       
        else{ // when we're at the last image
            console.log("hello") //if the new left style attribute is at its limit (-2500px)
            const newLeft = ("0px"); // set the  newLeft property variable to it's original, 0px
            imageList.style.left = newLeft; // set the newLeft property variable equal to the css left property 
            imagePosition = 1; // return the imagePosition to 1 (the first image)
        }
        
        // Setting the dots to change colour depending on the image

        for(let i = 0; i < dotList.length; i++){
        if (i === imagePosition - 1) {
                    dotList[i].style.backgroundColor = "rgba(0,0,0,0.8)";
                }   
            
        else {
            dotList[i].style.backgroundColor = "white"
            }
        }   

            
        // Displaying the image position number beneath the image carousel 
                     
        displayImagePosition.innerText = imagePosition // sets innerHTML of "position" p element to imagePosition
                        

    
// Applying the description text to each image
 
                    if(imagePosition === 1){
                        imageDescriptionElement.innerText = "A Bigger Splash 1967";
                    } 

                    if(imagePosition === 2){
                        imageDescriptionElement.innerText = "Rubber Ring Floating In a Swimming Pool 1971";
                    }
                    if(imagePosition === 3){
                        imageDescriptionElement.innerText = "Garden #3 2016";
                    }
                    if(imagePosition === 4){
                        imageDescriptionElement.innerText = "A Lawn Being Sprinkled 1967";
                    }
                    if(imagePosition === 5){
                        imageDescriptionElement.innerText = "Santa Monica Boulevard 1979";
                    }
                    if(imagePosition === 6){
                        imageDescriptionElement.innerText = "Garrowby Hill 1998";
                    }

                    console.log(dotList[0].style);

                
        }

// Previous image function

    function previousImage() {
            
         if(imagePosition > 1) { // run function if the imagePosition is greater than one
              imageList.style.left =  parseInt(imageList.style.left) + 500 + "px"; // changes the css left property value
              imagePosition--; //decreases imagePosition with each onlick
            }

        else{
            console.log("hello2") //if the new css left property is at its limit (-2500px)
            const newLeft = ("-2500px"); // set the  newLeft property variable to it's original, 0px
            imageList.style.left = newLeft; // set the newLeft property variable equal to the css left property 
            imagePosition = 6; // return the imagePosition to 1 (the first image)
        }

        // Reusing next image loop to set the dots to change colour depending on the image

        for(let i = 0; i < dotList.length; i++){
            if (i === imagePosition - 1) {
                        dotList[i].style.backgroundColor = "rgba(0,0,0,0.8)";
                    }   
                
        else {
            dotList[i].style.backgroundColor = "white"
            }
        }   

//Displaying text description

        if(imagePosition === 1){
            imageDescriptionElement.innerText = "A Bigger Splash 1967";
            } 

        if(imagePosition === 2){
            imageDescriptionElement.innerText = "Rubber Ring Floating In a Swimming Pool 1971";
            }

        if(imagePosition === 3){
            imageDescriptionElement.innerText = "Garden #3 2016";
            }

        if(imagePosition === 4){
            imageDescriptionElement.innerText = "A Lawn Being Sprinkled 1967";
            }

        if(imagePosition === 5){
            imageDescriptionElement.innerText = "Santa Monica Boulevard 1979";
            }
            
        if(imagePosition === 6){
            imageDescriptionElement.innerText = "Garrowby Hill 1998";
            }

        //displaying the image position number below the image
                 displayImagePosition.innerText = imagePosition // sets innerHTML of "position" p element to imagePosition
        }
    
        

// // Dots onclick change to respective image 


function splashPositionChange(){

        imageList.style.left = ("0px");
        imagePosition = 1;
        imageDescriptionElement.innerText = "A Bigger Splash 1967";
        displayImagePosition.innerText = imagePosition;
        
        for(let i = 0; i < dotList.length; i++){ //let i = 0 starting value // i < dotList.length condition checked every time the loop is completed // 
            //final index ALWAYS = dotList.length - 1 because I have not used 0 index for imagePosition// which is why we use < // i++ increase i by one after every loop
            if (i === imagePosition - 1){
                console.log(dotList[i]);
                dotList[i].style.backgroundColor = "rgba(0,0,0,0.8)";
            }
            else {
                dotList[i].style.backgroundColor = "white";
            }
            
        }
    }

function ringPositionChange() {
    
        imageList.style.left = ("-500px");
        imagePosition = 2;
        imageDescriptionElement.innerText = "Rubber Ring Floating In a Swimming Pool 1971";
        displayImagePosition.innerText = imagePosition;

        for(let i = 0; i < dotList.length; i++){ //let i = 0 starting value // i < dotList.length condition checked every time the loop is completed // 
            //final index ALWAYS = dotList.length - 1 // which is why we use < // i++ increase i by one after every loop
            if (i === imagePosition - 1){
                console.log(dotList[i]);
                dotList[i].style.backgroundColor = "rgba(0,0,0,0.8)";
            }
            else {
                dotList[i].style.backgroundColor = "white";
            }
            
        }
    }

function gardenPositionChange(){
        imageList.style.left = ("-1000px");
        imagePosition = 3;
        imageDescriptionElement.innerText = "Garden #3 2016";
        displayImagePosition.innerText = imagePosition;
        
        for(let i = 0; i < dotList.length; i++){ //let i = 0 starting value // i < dotList.length condition checked every time the loop is completed // 
            //final index ALWAYS = dotList.length - 1 // which is why we use < // i++ increase i by one after every loop
            if (i === imagePosition - 1){
                console.log(dotList[i]);
                dotList[i].style.backgroundColor = "rgba(0,0,0,0.8)";
            }
            else {
                dotList[i].style.backgroundColor = "white";
            }
            
        }

    }

function lawnPositionChange(){
        imageList.style.left = ("-1500px");
        imagePosition = 4;
        imageDescriptionElement.innerText = "A Lawn Being Sprinkled 1967";
        displayImagePosition.innerText = imagePosition;
        
        for(let i = 0; i < dotList.length; i++){ //let i = 0 starting value // i < dotList.length condition checked every time the loop is completed // 
            //final index ALWAYS = dotList.length - 1 // which is why we use < // i++ increase i by one after every loop
            if (i === imagePosition - 1){
                console.log(dotList[i]);
                dotList[i].style.backgroundColor = "rgba(0,0,0,0.8)";
            }
            else {
                dotList[i].style.backgroundColor = "white";
            }
            
        }
    }

function santaPositionChange(){
        imageList.style.left = ("-2000px");
        imagePosition = 5;
        imageDescriptionElement.innerText = "Santa Monica Boulevard 1979";
        displayImagePosition.innerText = imagePosition;
        
        for(let i = 0; i < dotList.length; i++){ //let i = 0 starting value // i < dotList.length condition checked every time the loop is completed // 
            //final index ALWAYS = dotList.length - 1 // which is why we use < // i++ increase i by one after every loop
            if (i === imagePosition - 1){
                console.log(dotList[i]);
                dotList[i].style.backgroundColor = "rgba(0,0,0,0.8)";
            }
            else {
                dotList[i].style.backgroundColor = "white";
            }
            
        }
    }

function garrowbyPositionChange(){
    imageList.style.left = ("-2500px");
    imagePosition = 6;
    imageDescriptionElement.innerText = "Garrowby Hill 1998";
    displayImagePosition.innerText = imagePosition;
    
    for(let i = 0; i < dotList.length; i++){ //let i = 0 starting value // i < dotList.length condition checked every time the loop is completed // 
        //final index ALWAYS = dotList.length - 1 // which is why we use < // i++ increase i by one after every loop
        if (i === imagePosition - 1){
            console.log(dotList[i]);
            dotList[i].style.backgroundColor = "rgba(0,0,0,0.8)";
        }
        else {
            dotList[i].style.backgroundColor = "white";
        }
        
    }
}


// Automatic play function 


let automaticPlay = setInterval(nextImage, 5000); //automatically changes the image every 5 seconds // declared at a higher scope than the functions
console.log(automaticPlay) // logs the ID which has been assigned to the automaticPlay variable - in this case, 1
    
// Pause button 
function pause(){
        clearInterval(automaticPlay); // takes the ID as an argument
    
        automaticPlay = null; // removing the setInterval function from the automaticPlay variable and explictly sets this to 0
    }

// Play button
function play(){
        automaticPlay = setInterval(function(){nextImage()}, 5000);
    }


  

    

    


    
       
    
    

      
            
           
        
