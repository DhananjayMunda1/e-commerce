// for the hamberger menu
const bar=document.getElementById('bar');
// to see the nav bar
const nav=document.getElementsByClassName('nav')[0];
// to check if the nav bar is showing in the screen or not
// if any one click on the bar an event listner is there

const close=document.getElementById('close');


if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.toggle('active');
        // toggle was use earlier
    })
    // This line adds an event listener to the entire document 
    // that listens for any click events. 
    // When a click occurs anywhere on the page, the function inside the event 
    // listener will be executed.
    document.addEventListener('click',(event)=>{
        if(!nav.contains(event.target)&&event.target!==bar){
            nav.classList.remove('active');
        }
    })
}   

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
    // document.addEventListener('click',(event)=>{
    //     if(!nav.contains(event.target)&&event.target!==bar){
    //         nav.classList.remove('active');
    //     }
    // })
}


