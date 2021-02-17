const time=document.getElementById('time'),
      greeting=document.getElementById('greeting'),
      name=document.getElementById('name'),
      focus=document.getElementById('focus');


const showAmPm=true;
function showtime(){
    
let today= new Date(),
    hour =today.getHours(),
    min=today.getMinutes(),
    sec=today.getSeconds();

const ampm=hour>=12 ? 'PM':'AM';
    
    //12 hr format

    hour= hour % 12 || 12 ;
time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? ampm :' ' }`;
setTimeout(showtime,1000);
}
function addZero(n)
{
    
    return(parseInt(n,10) <10 ? '0':'')+ n;
}
// set background

function setBgGreet()
{
    let today = new Date(),
        hour =today.getHours();
if(hour<12){
//morning
    document.body.style.backgroundImage="url('../image/1aaa.jpg')";
greeting.textContent="Good Morning";
} 
else if(hour <18){
   document.body.style.backgroundImage="url('../image/2AA.jpg')";
greeting.textContent="Good AfterNoon"; 
}  
else {
   document.body.style.backgroundImage="url('../image/2AA.jpg')";
greeting.textContent="Good Evening";
    document.body.style.color='black';
}

}
function getName()
{
if(localStorage.getItem('name')==null)
{
name.textContent= '{ENTER NAME}';
}
else
{
        name.textContent=localStorage.getItem('name');
}
    
}
function setName(e)
{
if(e.type=='keypress')
{
    //make sure the enter is pressed  
    if(e.which==13 || e.keyCode==13)
        {
            localStorage.setItem('name',e.target.innerText);
            name.blur();
        }
    
}
else
{
localStorage.setItem('name',e.target.innerText); 
}
}
function getFocus()
{
if(localStorage.getItem('focus')==null)
{
focus.textContent= '{Enter focus}';
}
else
{
        focus.textContent=localStorage.getItem('focus');
}
    
}

function setFocus(e)
{
if(e.type=='keypress')
{
    //make sure the enter is pressed  
    if(e.which==13 || e.keyCode==13)
        {
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();
        }
    
}
else
{
localStorage.setItem('focus',e.target.innerText); 
}
}
name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);

focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);

showtime();
setBgGreet();
getName();
getFocus();
