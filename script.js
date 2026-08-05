// Smooth reveal animation

const sections = document.querySelectorAll(".section, .hero-content, .hero-image");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});


sections.forEach(section=>{

    observer.observe(section);

});




// Add active link effect

const links = document.querySelectorAll(".nav-links a");


links.forEach(link=>{

    link.addEventListener("click",()=>{

        links.forEach(item=>item.classList.remove("active"));

        link.classList.add("active");

    });

});
