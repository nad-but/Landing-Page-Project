/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// Variables for list of navagtion bar 
const listofnavbar = document.getElementById("navbar__list");
// Variables for selection all sections from document 
const sectionselec=Array.from(document.querySelectorAll('section'));
/**
 * End Global Variables
 * 
*/

//function to create list item and link inside it 
const funCreatListItem = function(){
    //Iterate for each section
    for (sect of sectionselec)  {
        // create  list item (li) element
        lItem = document.createElement("li");
        //create anchor link <a> /set the link for section / add id and section name /get the class for adding the style
        let linkTag = `<a href='#${sect.id}' class='menu__link' data-nav='${sect.id}'>${sect.dataset.nav}</a>`;
        //add the a tage inside html
        lItem.innerHTML = linkTag;
        //appand list item inside unorderlist
        listofnavbar.appendChild(lItem);
    }
}

// build the nav
funCreatListItem();

//Create Variable and store function to Section Active State
const activeState = function(){
    //select all the mune link
    const linkMeun = document.querySelectorAll(".menu__link");
    //Iterate for each section
     sectionselec.forEach(function(act,index){
    //Detect the element location relative to the viewport
     let bounRec = act.getBoundingClientRect().top;
     if(bounRec <= 100 && bounRec >= -100)
     {
        // Add class 'active' to section when near top of viewport 
        act.classList.add("your-active-class");
        //add 'active section' class to the specific nav section according to section ID
        linkMeun[index].classList.add('active_section');
     }
     else{
        //Remove class 'active' from the section when  out of the viewport
        act.classList.remove("your-active-class");
        //Remove 'active section' class that not selection
        linkMeun[index].classList.remove('active_section');
        }
});}

// Set sections as active
document.addEventListener('scroll',activeState);

//Scroll to  the appropriate section
const scrollsmoth = (tosection) =>{
    //use default event to section
    tosection.preventDefault();
    //check if data link of section has a attribute or not
    if(tosection.target.dataset.nav){
        //store attribute in elm Variable
        let elm = `${tosection.target.dataset.nav}`;
        // Scroll to selection section using scrollIntoView  to A smooth scrolling behavior 
        document.getElementById(elm).scrollIntoView({behavior: "smooth"});
}}
// add event to nav list when click it, it will Scroll smooth
listofnavbar.addEventListener('click',scrollsmoth);
