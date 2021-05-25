async function On_Click(event)
{
    console.log(event.target);
    window.location.replace("./gamePage.html?id="+event.target.alt);
 }
function On_Submit(event)
{
    if(event.keyCode==13)
    {
        let searchbar = document.getElementById("searchBar");
        let searchString = slugify(searchbar.value);
    
        window.location.replace("./searchSite.html?search="+searchString+"&page=1");
    }
    
}
function On_Page_ButtonClick(event)
{
    console.log(event.target);
    let newQuery = new URLSearchParams(window.location.search);
    newQuery.set("page",event.target.innerText);
    window.location.replace("./searchSite.html?"+newQuery);
}
function On_ButtonClick()
{
    let searchbar = document.getElementById("searchBar");
    let searchString = slugify(searchbar.value);
    window.location.replace("./searchSite.html?search="+searchString+"&page=1");


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