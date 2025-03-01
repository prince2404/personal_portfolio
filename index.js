//function for showing more skills

function showMore(){
    var skillsRow2 = document.getElementById("skills-row-2");
    var showMore = document.getElementById("see-more");
    if(skillsRow2.style.display === "none"){
        skillsRow2.style.display = "flex";

        
        showMore.innerHTML = "See Less";
    }
    else{
        skillsRow2.style.display = "none";
        showMore.innerHTML = "See More";

    }
} 

//function for showing more projects
function showMoreProjects(){
    var projectRow2 = document.getElementById("project-row2");
    var seeMoreProjects = document.getElementById("see-more-projects");
    if(projectRow2.style.display === "none"){
        projectRow2.style.display = "grid";
        seeMoreProjects.innerHTML = "See Less";
    }
    else{
        projectRow2.style.display = "none";
        seeMoreProjects.innerHTML = "See More";
    }
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(content of tabcontent){
        content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}



var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbzg2o5wOGt-TSzxD2D93G9292xzunZLLzeyJwam7YhV80yvoRUxejNXh2JmEKVkUYba/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
}



