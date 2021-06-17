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
     
  for(let i = 0;i<10;i++)
  {
     const request = new XMLHttpRequest();
     let randomGame = Math.floor(Math.random()*570507);
     request.open("GET","https://api.rawg.io/api/games/"+randomGame+"?key=d6cc5ff8a62b4b5ea8443d792d63ccf8",true);
     request.onload=function(){
         var response = JSON.parse(request.responseText);
         
         let carouselInner = document.getElementById("carouselInnerRated");
         let image = document.getElementById("img"+i);
         image.setAttribute("onclick","On_Click(event)");
         image.alt = response.id;
         image.setAttribute("class","img-"+(i+1)+" slider-img");
         if(response.background_image===null)
         {
           image.src="assets/img/Logo.png";
         }
         else{
            image.src=response.background_image;
         }            
         carouselInner.appendChild(image);
         scrollPerClick = document.querySelector(".img-1").clientWidth + 850;
     }
     request.send();  
 }

}
function ShowGames()
{
  for(let i = 0;i<10;i++)
  {
     const request = new XMLHttpRequest();
     let randomGame = Math.floor(Math.random()*570507);
     request.open("GET","https://api.rawg.io/api/games/"+randomGame+"?key=d6cc5ff8a62b4b5ea8443d792d63ccf8",true);
     request.onload=function(){
         var response = JSON.parse(request.responseText);
         
         
         let carouselInner = document.getElementById("carouselInnerRated");
         let image = document.createElement("img");
         image.setAttribute("onclick","On_Click(event)");
         image.alt = response.id;
         image.setAttribute("class","img-"+(i+1)+" slider-img");
         image.setAttribute("id","img"+i);
         if(response.background_image===null)
         {
           image.src="assets/img/Logo.png";
         }
         else{
            image.src=response.background_image;
         }            
         carouselInner.appendChild(image);
         scrollPerClick = document.querySelector(".img-1").clientWidth + 850;
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
