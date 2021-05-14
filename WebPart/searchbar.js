const gamesList = document.getElementById('gamesList');
const searchBar = document.getElementById('searchBar');
var lastRequest = "";
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    if(searchString!=""&&lastRequest!=e)
    {
        lastRequest=e;
        request.open("GET","https://api.rawg.io/api/games?key=d6cc5ff8a62b4b5ea8443d792d63ccf8&search="+e,true);
        request.onload= function(){

            var response =JSON.parse(request.responseText);

            
            displayCharacters(foundGames);
        }
        request.send();
        
     }
     

    

    
});


const displayCharacters = (games) => {
    const htmlString =games
        .map(games => {
            return `
            <li class="games">
                <h2>${games.name}</h2>
            </li>`
        ;
        });
    gamesList.innerHTML = htmlString;
};

