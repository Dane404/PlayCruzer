const sliders = document.querySelector(".carouselbox");
var scrollPerClick;
var ImagePadding = 20;
ShowGames();
// Scroll Functionality
var scrollAmount =0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }


}
function GenerateRandomGames()
{
     
  for(let i = 0;i<=10;i++)
  {
    let shouldContinue = false;
      const request = new XMLHttpRequest();
      let randomGame = Math.floor(Math.random()*570507);
      request.open("GET","https://api.rawg.io/api/games/"+randomGame+"?key=d6cc5ff8a62b4b5ea8443d792d63ccf8",true);
      request.onload=function(){
        if(request.status!==404)
        {
          shouldContinue=true;
          var response = JSON.parse(request.responseText);
          console.log(response);
           
           let image = document.getElementById("img"+i);
           let text= document.getElementById("text"+i);
           text.innerText=response.name;
           image.setAttribute("onclick","On_Click(event)");
           image.alt = response.id;
           if(response.background_image===null)
           {
             image.src="assets/img/Logo.png";
           }
           else{
              image.src=response.background_image;
           }  
        }
        else{
          i-=1;
        }
             
      }
      request.send();  
    }
     
 

}
function ShowGames()
{
  for(let i = 0;i<=10;i++)
  {
      const request = new XMLHttpRequest();
      let randomGame = Math.floor(Math.random()*570507);
      request.open("GET","https://api.rawg.io/api/games/"+randomGame+"?key=d6cc5ff8a62b4b5ea8443d792d63ccf8",true);
      request.onload=function(){
        if(request.status!==404)
        {
          shouldContinue=true;
          var response = JSON.parse(request.responseText);
          
          let imageDiv = document.createElement("div");
          imageDiv.setAttribute("class","");
          let textDiv = document.createElement("div");
          textDiv.setAttribute("id","text"+i);
          textDiv.innerText=response.name;
          textDiv.setAttribute("class","centered");
          textDiv.setAttribute("style","background-color:black");
          let carouselInner = document.getElementById("carouselInnerRated");
          let image = document.createElement("img");
          image.setAttribute("onclick","On_Click(event)");
          image.alt = response.id;
          imageDiv.setAttribute("class","img-"+(i+1)+" slider-img card-img-bottom image-container");
          image.setAttribute("id","img"+i);
          if(response.background_image===null)
          {
            image.src="assets/img/Logo.png";
          }
          else{
             image.src=response.background_image;
          
           }
           textDiv.width=image.width;
           imageDiv.appendChild(image);
           imageDiv.appendChild(textDiv);
          carouselInner.appendChild(imageDiv);
          
          scrollPerClick = document.querySelector(".img-1").clientWidth + 850;
        }
        else{
          i-=1;
        }
     }
     request.send();  

    }
     
 
}
function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
  
}
