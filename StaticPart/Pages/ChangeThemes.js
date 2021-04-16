
  if(localStorage.theme===undefined)
  {
    
    localStorage.theme="light";
  }
  else if(localStorage.theme==="dark")
  {
    SetTheme("dark");
  }
 
  function ChangeTheme(){ 
      if (localStorage.theme==="light")
      { 
          localStorage.theme="dark";
      }else if(localStorage.theme==="dark"){ 
          localStorage.theme="light";

      }      
      SetTheme(localStorage.theme);
 }
 function SetTheme (newTheme){
      let theme = document.getElementsByTagName('link')[1];  
      if(newTheme==="light")
      {
        theme.href='whiteThemeStyle.css';
      }
      else if(newTheme==="dark")
      {
        theme.href="darkThemeStyle.css";
      }
  }