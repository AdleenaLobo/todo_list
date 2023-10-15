import {content , insidecont} from './decbasicelem';

let tempabout;
let temphome;
function getother()
{
    tempabout = document.querySelector('.pluckcard');
    temphome =Array.from( document.querySelectorAll('.projects'));
}
function removeotherabout()
{
    if(tempabout != undefined)
    {
        content.removeChild(tempabout);
    }
}

function removeotherhome()
{
    if(temphome != undefined)
    {
        for(let i = 0 ; i<temphome.length ; i++)
        {
        content.removeChild(temphome[i]);
        }
    }
}
function hidetodo()
{
    insidecont.style.visibility = "hidden";
}

function showtodo()
{
    insidecont.style.visibility = "visible";
}

export {getother , removeotherabout ,removeotherhome , hidetodo ,showtodo };

