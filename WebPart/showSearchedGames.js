const query = window.location.search;
const urlParams = new URLSearchParams(query);
let searchValue = urlParams.get("search");
let searchPage = urlParams.get("page");
const request = new XMLHttpRequest();
request.open("GET","https://api.rawg.io/api/games?key=d6cc5ff8a62b4b5ea8443d792d63ccf8&page_size=40&search="+searchValue+"&page="+searchPage,true);
request.onload= function()
{
     var response =JSON.parse(request.responseText);
     console.log(response.count);
     if(response!=null)
     {
       
        for(let i = 0;i<response.results.length;i++)
        {
            let formatGameItem = document.createElement("div");
            formatGameItem.setAttribute("class","col-md-6 col-lg-4 mb-5");
            let gameItem = document.createElement("div");
            gameItem.setAttribute("class","game-item mx-auto");
            let gameTitle = document.createElement("p");
            gameTitle.innerText=response.results[i].name;
            let createdImage = document.createElement("img");
            createdImage.setAttribute("object-fit","fill");
            createdImage.style.width="500px";
            createdImage.style.height="100px";
            createdImage.setAttribute("height","150px");
            createdImage.src = response.results[i].background_image;
            gameItem.appendChild(gameTitle);
            gameItem.appendChild(createdImage);
            formatGameItem.appendChild(gameItem);
            document.getElementById("foundGames").appendChild(formatGameItem);
            
        }
     }
     else
     {

     }
    
}
request.send();