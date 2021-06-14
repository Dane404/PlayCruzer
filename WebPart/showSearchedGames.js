const query = window.location.search;
const urlParams = new URLSearchParams(query);
let searchValue = urlParams.get("search");
let searchPage = urlParams.get("page");
const request = new XMLHttpRequest();
request.open("GET","https://api.rawg.io/api/games?key=d6cc5ff8a62b4b5ea8443d792d63ccf8&search_precise=true&page_size=40&search="+searchValue+"&page="+searchPage,true);
request.onload= function()
{
     var response =JSON.parse(request.responseText);
     console.log(response.count);
     if(response!=null)
     {
        //create games to be shown
        for(let i = 0;i<response.results.length;i++)
        {

            let formatGameItem = document.createElement("div");// div to format games
            formatGameItem.setAttribute("class","col-md-6 col-lg-4 mb-5");
            let gameItem = document.createElement("div");// the game item div
            gameItem.setAttribute("class","game-item mx-auto");

            let cardDiv = document.createElement("div");
            cardDiv.setAttribute("class","card");
           

            let cardBody = document.createElement("div");
            cardBody.setAttribute("class","card-img-top");
            
            
            let gameTitle = document.createElement("h5"); //the game title 
            gameTitle.innerText=response.results[i].name;
            gameTitle.setAttribute("class","card-text");


            let createdLink = document.createElement("a"); // link to get on the game site
            createdLink.setAttribute("onclick","On_Click(event)");
            let centerImageDiv = document.createElement("div");

            let createdImage = document.createElement("img");//the image to be shown
            createdImage.setAttribute("class","card-img-bottom");
            
  
            createdImage.alt = response.results[i].id;
            createdImage.style.width="200px";
            createdImage.style.height="100px";
            
            if(response.results[i].background_image===null)
            {
                createdImage.src = "assets/img/Logo.png";
            }
            else{
                createdImage.src = response.results[i].background_image;
            }
            centerImageDiv.appendChild(createdImage);
            cardBody.appendChild(gameTitle);
           
            cardBody.appendChild(createdImage);
            
            cardDiv.appendChild(cardBody);
            createdLink.appendChild(cardDiv);
            gameItem.appendChild(createdLink);
            formatGameItem.appendChild(gameItem);
            document.getElementById("foundGames").appendChild(formatGameItem);
        }

        //page nav buttons
        let countBorder = 10;
        let pages=  Math.ceil(response.count/40);
        let pageNav = document.getElementById("pageNav");
        let firstButtonCreated= false;
        let shouldContinue=true;
        let pageLength=pages;
        if(searchPage+10<=pages)
        {
            pageLength=searchPage+10;
        }
        let count = 0;
        console.log(pages);
        if((parseInt(searchPage)+countBorder)>=pages)
        {
            countBorder=10-((parseInt(searchPage)+10-pages));
        }
        for(let i =searchPage;i<=pageLength;i++)
        {
            if(count==0&&searchPage!=1)
            {
                let prevButton = document.createElement("button");
                prevButton.setAttribute("onclick","On_PrevOrNext_Button_Click(event)");
                prevButton.innerText="<";
                pageNav.appendChild(prevButton);
            }
            if(count==0&&parseInt(searchPage)===pages)
            {
                if(i>1)
                {
                    let button = document.createElement("button");// create button
                    button.setAttribute("onclick","On_Page_ButtonClick(event)");
                    button.innerText=1;
                    pageNav.appendChild(button);
                    let dotButton = document.createElement("button");// create button
                    dotButton.innerText="...";
                    pageNav.appendChild(dotButton);
                }
               
                    let currbutton = document.createElement("button");// create button
                    currbutton.setAttribute("onclick","On_Page_ButtonClick(event)");
                    currbutton.innerText= pages;
                    if(i===searchPage)
                    {
                        currbutton.style.background="yellow";
                    }
                    pageNav.appendChild(currbutton);
            }
            if(count<countBorder)
            {
                count++;
                if(parseInt(searchPage)>=2&& firstButtonCreated===false)
                {
                    let button = document.createElement("button");// create button
                    button.setAttribute("onclick","On_Page_ButtonClick(event)");
                    button.innerText=1;
                    pageNav.appendChild(button);
                    let dotButton = document.createElement("button");// create button
                    dotButton.innerText="...";
                    pageNav.appendChild(dotButton);
                    firstButtonCreated=true;
                }
                if(i<=pageLength&&i<=pages)
                {
                    let button = document.createElement("button");// create button
                    button.setAttribute("onclick","On_Page_ButtonClick(event)");
                    button.innerText= i;
                    if(i===searchPage)
                    {
                        button.style.background="yellow";
                    }
                    pageNav.appendChild(button);
                }   
                if(count ===countBorder&&i!==pages&&i>1){
                    let dotButton = document.createElement("button");// create button
                    dotButton.innerText="...";
                    pageNav.appendChild(dotButton);
                    let button = document.createElement("button");// create button
                    button.setAttribute("onclick","On_Page_ButtonClick(event)");
                    button.innerText=pages;
                    pageNav.appendChild(button);
                    let nextButton = document.createElement("button");
                    nextButton.setAttribute("onclick","On_PrevOrNext_Button_Click(event)");
                    nextButton.innerText=">";
                    pageNav.appendChild(nextButton);
                }
            }
            else{

                i = pageLength;
            }
            
           
            
        }
     }

}
request.send();