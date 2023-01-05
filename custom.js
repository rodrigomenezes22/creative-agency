onscroll = (event) => {
    if(window.scrollY > 300){
       const headerDiv = document.getElementById("header");

       headerDiv.className = " is-scrolled";
        
    } else {
        const headerDiv = document.getElementById("header");        
        headerDiv.className = " ";
    }
};