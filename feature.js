    let imageList = document.getElementById("image-list"); //selects the "image list" ul
    let imagePosition = 1; //
    const imageListItems = document.querySelectorAll("li");//returns the image-list li items as a list
    const numberOfImageListItems = imageListItems.length; //returns the length of the image-list li items
    console.log(numberOfImageListItems)
    
    
        
    const nextButton = document.getElementById("next"); //selects the "next" button
    const previousButton = document.getElementById("previous"); //selects the "previous" button


    imageList.style.left = 0 // sets the css left property to 0


    function nextImage(){
            if (imagePosition < numberOfImageListItems){ // if the imagePosition is less than the numberOfImageListItems
                    console.log(imageList.style.left); // console.log the css left property (0px) 
                    let newLeft = parseInt(imageList.style.left) - 500 + "px"; // parseInt takes a string as an argument an converts to a number - in this case 0px into 0 // subtracts 500 from 0 // converts back to px
                    imageList.style.left = newLeft; // sets the css left property equal to the newLeft variable value
                    console.log(newLeft);
                    imagePosition++; //increments (increases) imagePosition with each onclick 
        
                
    // Setting the image carousel to automatically return to first image when it reaches the end of the slideshow 
                                    
                    newLeft = parseInt(imageList.style.left);
                    console.log(newLeft);

                    if (newLeft <= -2500){
                        console.log("hello") //if the new css left property is at its limit (-2500px)
                        newLeft = ("0px"); // set the  newLeft property variable to it's original, 0px
                        imageList.style.left = newLeft; // set the newLeft property variable equal to the css left property 
                        imagePosition = 1; // return the imagePosition to 1 (the first image)
                } 


    // Displaying the image position beneath the image carousel 

                        const displayImagePosition = document.getElementById("position") // selects "position" p element
                        displayImagePosition.innerText = imagePosition // sets innerHTML of "position" p element to imagePosition
             
                }

    
    
// Applying the description text to each image

    // function displayDescription(){

        const imageDescriptionElement = document.getElementById("description") // selects the "description" p element

                    // if(imagePosition === 1){
                    //     imageDescriptionElement.innerText = "A Bigger Splash 1967";
                    // } 

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
                }
    // }
        
    function previousImage() {
            if(imagePosition > 1) { // run function if the imagePosition is greater than one
              imageList.style.left =  parseInt(imageList.style.left) + 500 + "px"; // changes the css left property value
              imagePosition--; //decreases imagePosition with each onlick
            }

            const displayImagePosition = document.getElementById("position") // selects "position" p element
                 displayImagePosition.innerText = imagePosition // sets innerHTML of "position" p element to imagePosition
        }
    
    
    setInterval(function(){nextImage()}, 4000); //automatically changes the image every 4 seconds


  

    

    


    
       
    
    

      
            
           
        
