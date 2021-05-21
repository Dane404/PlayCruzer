GetIdFromURL(); 

const request = new XMLHttpRequest();
request.open("GET","https://api.rawg.io/api/games/"+localStorage.gameId+"?key=d6cc5ff8a62b4b5ea8443d792d63ccf8",true);
request.onload= function(){

     var response =JSON.parse(request.responseText);
     document.getElementById("gameImage").src = response.background_image;
     var changeTitle = document.getElementById("gameTitle");
     changeTitle.innerText+=  " "+response.name;
     document.getElementById("gameDescription").innerHTML=response.description;
     var changePlattforms = document.getElementById("gamePlatforms");
     for(let i = 0;i<response.platforms.length;i++)
     {
          changePlattforms.innerText+="\n"+ response.platforms[i].platform.name;
     }
}
request.send();
function GetIdFromURL()
{
     const query = window.location.search;
     console.log(query);
}