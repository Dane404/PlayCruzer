async function On_Click(event)
{
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