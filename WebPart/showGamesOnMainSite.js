async function PostData(){
     const response= await fetch("https://api.igdb.com/v4/games",{
          method:"POST",
          mode:"cors",
          cache:"no-cache",
          "Client-ID": "awg3jkqqq1yxfbok7ggh0zrg03tprr",
          Authorization: "bearer ecllk4ol7gibj6p60559zqs99cnoai",
          credentials:"same-origin",
          headers:{
               "Content-Type": "application/json"
          },
          body:"fields name;"
     });
     return response.json();
}


PostData().
then(data=>{
     console.log(data);
})