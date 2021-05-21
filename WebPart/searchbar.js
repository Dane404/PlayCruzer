const gamesList = document.getElementById('gamesList');
const searchBar = document.getElementById('searchBar');

function on_submit()
{
    let searchString = slugify(e.target.value);
    const request = new XMLHttpRequest();
    console.log(searchString);
    request.open("GET","https://api.rawg.io/api/games?key=d6cc5ff8a62b4b5ea8443d792d63ccf8&search="+searchString+"&search_precise=true",true);
    request.onload= function(){
        
        var response =JSON.parse(request.responseText);
        displayGames(response.results);
    }
    request.send();
}




function slugify(stringToSlug)
{
    let newSlug="";
    for(let i = 0;i<stringToSlug.length;i++)
    {
        if(stringToSlug[i]===" ")
        {
            newSlug+="-";
        }
        else{
            newSlug+=stringToSlug[i];
        }
    }
    return newSlug;
}