const request = new XMLHttpRequest();
request.open("GET","https://api.rawg.io/api/games/"+localStorage.gameId+"?key=d6cc5ff8a62b4b5ea8443d792d63ccf8",true);
request.onload= function(){
     var response =JSON.parse(request.responseText);
     var changeTitle = document.getElementById("gameTitle");
     changeTitle.innerText=  response.results[0].name;
}
request.send();
