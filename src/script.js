let isVisible = false;

function toggleProjects(){
    const projects = document.querySelectorAll('.project');

    if(isVisible == true){
        projects.forEach(project => project.style.display ="none");
        isVisible = false;
    }else{
        projects.forEach(project => project.style.display ="block");
        isVisible= true;
    }
    
}