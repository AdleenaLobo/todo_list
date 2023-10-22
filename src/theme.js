import {color , theme , root } from './decbasicelem.js';
import './style.css';


function clicktheme()
{
   theme.addEventListener('click' , themefuns);
}
function themefuns()
{
    themechangecolor();
    themechangename();

}
function checkcolor()
{
    if(color == "light")
    {
        color = "dark";
    }
    else
    {
        color = "light";
    }

}
function themechangename()
{
    checkcolor();
    theme.setAttribute("name" , color);
}

function themechangecolor()
{

   if(color == "light")
   {
    //rgb(132,132,130)
    root.style.setProperty('--head' , 'rgb(132,132,130)');
    root.style.setProperty('--backblue' , 'rgb(25,39,52)');
    root.style.setProperty('--content' , 'rgb(132,132,130)');
   }
   else
   {
    root.style.setProperty('--head' , 'rgb(0,0,63)');
    root.style.setProperty('--backblue' , 'rgb(209, 215, 243)');
    root.style.setProperty('--content' , 'rgb(0,0,63)');
   }
}


export {clicktheme}