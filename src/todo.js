import {todo} from './decbasicelem';
import { getother , removeotherabout , removeotherhome, showtodo } from './pagetracker';
import { clicktoday } from './today';

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
    clicktoday();
}


export {clicktodo};