
document.getElementById("addImageBtn").addEventListener("click", function() {
    
    
    let newImg = document.createElement("img");

    
    newImg.src = "images/divingfootball.jpg";

   
    newImg.style.width = "300px";
    newImg.style.margin = "10px";


    document.getElementById("mydiv100").appendChild(newImg);
});