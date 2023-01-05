onscroll = (event) => {
    if(window.scrollY > 300){
       const headerDiv = document.getElementById("header");

       headerDiv.className = " is-scrolled";
        
    } else {
        const headerDiv = document.getElementById("header");        
        headerDiv.className = " ";
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});