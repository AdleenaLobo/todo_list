import {todo} from './decbasicelem';
import { getother , hideabout, hidehome, showtodo } from './pagetracker';
import { clicktoday } from './today';


function clicktodo()
{
    todo.addEventListener('click' , calltodofuns);
}

function calltodofuns()
{
    let temphome = document.querySelector('.projects');
let tempabout = document.querySelector('.pluckcard');
    getother();
    if(temphome != null)
    {
        console.log('hi');
        hidehome();
    }
    if(tempabout != null)
    {
        hideabout();
    }

    showtodo();
    clicktoday();
}


export {clicktodo};