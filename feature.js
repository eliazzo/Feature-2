
    const imageCarousel = document.getElementById("carousel-container"); //selects the "carousel-container" div
    let visibleWidth = "500px"//imageCarousel.offSetWidth; //returns the viewable width of the "carousel-container" div element
    let imageList = document.getElementById("image-list"); //selects the "image list" ul
    let imagePosition = 1; //
    const imageListItems = document.querySelectorAll("li");//returns the image-list li items as a list
    const numberOfImageListItems = imageListItems.length; //returns the length of the image-list li items
    
    
        
    const nextButton = document.getElementById("next"); //selects the "next" button
    const previousButton = document.getElementById("previous"); //selects the "previous" button
    imageList.style.left = 0
    
    // function resize(){
    //     visibleWidth = imageCarousel.offSetWidth
    // };
    // window.addEventListener('resize', resize());
     // When the page size is changed the image size will change accordingly

//};

    function nextImage(){
            if (imagePosition < numberOfImageListItems){ // if the imagePosition is less than the numberOfImageListItems
                console.log(imageList.style.left); // the css left property (0px) 
                let newLeft = parseInt(imageList.style.left) - 500 + "px"; // parseInt takes a string as an argument an converts to a number - in this case 0px into 0 // subtracts 500 from 0 // converts back to px
                imageList.style.left = newLeft;
                console.log(newLeft);
                imagePosition++; //increments (increases) imagePosition with each onclick 
        
                if (newLeft === ("-2500px")){ //if the css left property is at its limit (-2500px)
                    console.log("hello");
                    newLeft = ("0px"); // set the css left property variable to 0px
                    imageList.style.left = newLeft; // set the property variable equal to the left property itself
                    imagePosition = 1; // return the imagePosition to 1 (the first image)
                 } 

                 const displayImagePosition = document.getElementById("position") // selects "position" p element
                 displayImagePosition.innerHTML = imagePosition // sets innerHTML of "position" p element to imagePosition
             
        }
        }
        
    function previousImage() {
            if(imagePosition > 1) { // run function if the imagePosition is greater than one
              imageList.style.left =  parseInt(imageList.style.left) + 500 + "px"; // changes the css left property value
              imagePosition--; //decreases imagePosition with each onlick
            }

            const displayImagePosition = document.getElementById("position") // selects "position" p element
                 displayImagePosition.innerHTML = imagePosition // sets innerHTML of "position" p element to imagePosition
        }
    
    
    setInterval(function(){nextImage()}, 4000); //automatically changes the image every 4 seconds

    


    
       
    
    

      
            
           
        
