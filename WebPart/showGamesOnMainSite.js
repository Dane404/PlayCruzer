const request = new XMLHttpRequest();
request.open("GET","https://api.rawg.io/api/games?key=d6cc5ff8a62b4b5ea8443d792d63ccf8",true);
request.onload= function(){
     var response =JSON.parse(request.responseText);
     for(let i = 0;i<=6;i++)
     {
        var changeElement = document.getElementById("recommendations"+(i+1));
        changeElement.src = response.results[i].background_image;
        var changeTitle = document.getElementById("gameTitle"+(i+1));
        changeTitle.innerText=  response.results[i].name;
     }

     for(let i = 0;i<=6;i++)
     {
         
        var changeElement = document.getElementById("random"+(i+1));
        
        changeElement.src = response.results[i].background_image;
        var changeTitle = document.getElementById("RandGameTitle"+(i+1));
        changeTitle.innerText=  response.results[i].name;
     }
    
     
}
request.send();