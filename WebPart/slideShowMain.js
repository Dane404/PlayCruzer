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

  console.log("Scroll Amount: ", scrollAmount);
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmount);
}
function ShowGames(){
    const request = new XMLHttpRequest();
    request.open("GET","https://api.rawg.io/api/games?key=d6cc5ff8a62b4b5ea8443d792d63ccf8&ordering=-metacritic",true);
    request.onload=function(){
        var response = JSON.parse(request.responseText);
        for(let i = 0;i<response.results.length;i++)
        {
            let link = document.createElement("a");
           
            let carouselInner = document.getElementById("carouselInnerRated");
            let image = document.createElement("img");
            image.setAttribute("onclick","On_Click(event)");
            image.alt = response.results[i].id;
            image.setAttribute("class","img-"+(i+1)+" slider-img");
            image.src=response.results[i].background_image;

            carouselInner.appendChild(image);
        }

        scrollPerClick = document.querySelector(".img-1").clientWidth + 60;
    }
    request.send();
}
