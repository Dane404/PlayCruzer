let searchedId= GetIdFromURL(); 
const screenShotRequest =new XMLHttpRequest();
screenShotRequest.open("GET","https://api.rawg.io/api/games/"+searchedId+"/screenshots?key=d6cc5ff8a62b4b5ea8443d792d63ccf8",true);
const request = new XMLHttpRequest();
request.open("GET","https://api.rawg.io/api/games/"+searchedId+"?key=d6cc5ff8a62b4b5ea8443d792d63ccf8",true);
screenShotRequest.onload=function(){
     request.onload= function()
     {
          var response =JSON.parse(request.responseText);
          var screenShotResponse =JSON.parse(screenShotRequest.responseText);
          if(screenShotResponse.results.length!=0||response.background_image!=null)
          {
               if(screenShotResponse.results.length>1)
               {
                    let carouselInner = document.getElementById("carouselInner");
                    for(let i=0;i<screenShotResponse.results.length;i++)
                    {
                         
                         let carouselItem = document.createElement("div");
                         if(i===0)
                         {
                              carouselItem.setAttribute("class","carousel-item active");
                         }
                         else{
                              carouselItem.setAttribute("class","carousel-item");
                         }
                         
                         let image = document.createElement("img");
                         image.setAttribute("class","d-block w-100");
                         image.src=screenShotResponse.results[i].image;
                         carouselItem.appendChild(image);
                         carouselInner.appendChild(carouselItem);
                    }
                    let currentButton = "prev";
                    for(let i = 0;i<=1;i++)
                    {
                         let button = document.createElement("a");
                         button.setAttribute("class","carousel-control-"+currentButton);
                         button.setAttribute("role","button");
                         button.setAttribute("data-slide",currentButton);
                         button.href = "#myCarousel";
                         let span1 = document.createElement("span");
                         span1.setAttribute("class","carousel-control-"+currentButton+"-icon");
                         span1.setAttribute("aria-hidden","true");
                         let span2 = document.createElement("span");
                         span2.setAttribute("class","sr-only");
                         span2.innerText=currentButton;
                         button.appendChild(span1);
                         button.appendChild(span2);
                         currentButton="next";
                         document.getElementById("myCarousel").appendChild(button);
                    }
               }
               else if(screenShotResponse.results.length===1){
                    let image = document.createElement("image");
                    image.src= screenShotResponse.results[0].image;
                    image.setAttribute("class","d-block w-100");
                    document.getElementById("carouselInner").appendChild(image);
               }
               else if(response.background_image!=null){
                    let image = document.createElement("image");
                    image.src= response.background_image;
                    image.setAttribute("class","d-block w-100");
                    document.getElementById("carouselInner").appendChild(image);
               }
               


          }
          var changeTitle = document.getElementById("gameTitle");
          changeTitle.innerText+=  " "+response.name;

          var release = document.createElement("p");
          release.innerText="Release-Date: "+response.released;
          document.getElementById("infos").appendChild(release);

          var metacritic = document.createElement("p");
          metacritic.innerText= "Metacritic-Score: "+response.metacritic;
          document.getElementById("infos").appendChild(metacritic);

          document.getElementById("gameDescription").innerHTML="description: "+response.description;
          var changePlattforms = document.getElementById("gamePlatforms");
          for(let i = 0;i<response.platforms.length;i++)
          {
               changePlattforms.innerText+="\n"+ response.platforms[i].platform.name;
          }
     }
     request.send();
}


screenShotRequest.send();
function GetIdFromURL()
{
     const query = window.location.search;
     const urlParams = new URLSearchParams(query);
     return urlParams.get("id");
}