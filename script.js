// for the hamberger menu
const bar=document.getElementById('bar');
// to see the nav bar
const nav=document.getElementsByClassName('nav')[0];
// to check if the nav bar is showing in the screen or not
// if any one click on the bar an event listner is there

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
        console.log("hello");
    })
}


