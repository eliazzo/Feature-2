//function responsiveCarousel(){
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
            if (imagePosition < numberOfImageListItems){ //if the imagePosition is less than the number returned by the numberOfImageListItems variable
                console.log(imageList.style.left);
                //imageList.style.left = imagePosition * 500 + "px"; //sets the css left property of image-list ul element to the negative value of image position * visible width // not sure about the px(?)
                //imageCarousel.style.left = imagePosition * 500 + "px"
                let newLeft = parseInt(imageList.style.left) - 500 + "px"; // parseInt takes as string as an argument an converts to a number - in this case 0px into 0
                imageList.style.left = newLeft
                console.log(newLeft)
                //imageList.style.left = parseInt(imageList.style.left) - 500;
                imagePosition++; //increments (increases) imagePosition with each onclick the function is run
                      
        }
        }
        
    function previousImage() {
            if(imagePosition > 1) {
             // imagePosition = imagePosition - 2;
              imageList.style.left =  parseInt(imageList.style.left) + 500 + "px"
              imagePosition--;
            }
        }
//  next button onclick will move the visible/viewer along the ul "image-list" to reveal the next image