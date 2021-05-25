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
          let slideShow = document.getElementById("slideShow");
          for(let i=0;i<screenShotResponse.results.length;i++)
          {
               let image = document.createElement("img");
               image.src=screenShotResponse.results[i].image;
               slideShow.appendChild(image);
          }
          var changeTitle = document.getElementById("gameTitle");
          changeTitle.innerText+=  " "+response.name;
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