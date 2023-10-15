import {todo} from './decbasicelem';
import { getother , removeotherabout , removeotherhome, showtodo } from './pagetracker';


function clicktodo()
{
    todo.addEventListener('click' , calltodofuns);
}

function calltodofuns()
{
    getother();
    removeotherabout();
    removeotherhome();
    showtodo();
}


export {clicktodo};