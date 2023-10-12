import {content, todo} from './decbasicelem';

let tempabout;
function clicktodo()
{
    todo.addEventListener('click' , calltodofuns);
}

function calltodofuns()
{
    getother();
    removeother();
    console.log("inside to do");
}
function getother()
{
    tempabout = document.querySelector('.pluckcard');
}
function removeother()
{
    if(tempabout == undefined)
    {
        console.log('not there');
    }
    else
    {
        content.removeChild(tempabout);
    }
}

export {clicktodo};