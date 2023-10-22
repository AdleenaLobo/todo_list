import { addbun , addcontentomore, arr, createmorediv, appendcontent , saved ,increment, duedates } from "./home";
import { calledit } from "./edithomebun";
import { clickcheck } from "./checkboxhome";
import { clickdeletebun } from "./deletehomebun";
import {trackbotharray} from "./checkboxnlisttracker";
import {addDays, format, startOfDay} from 'date-fns';


let index;

function clickplus()
{
    addbun.addEventListener('click' , callplusfuns);
}

function callplusfuns()
{
    addinarray();
    trackbotharray();
    createmorediv();
    let duedate = duedatecalc();
    adddateinarray(duedate);
    addcontentomore(duedate);
    appendcontent();
    calledit();
    clickdeletebun();
    clickcheck();


}

function addinarray()
{
    increment ++;
    index = arr.length;
    console.log(index);
    arr[index] = "add task by pressing edit";
    saved[index] = 'saved'+increment; 
    localStorage.setItem('increment' , increment);
    localStorage.setItem(saved[index], arr[index]);
}
function duedatecalc()
{
    let date;
    let duedate;
    date = new Date();
    duedate = addDays(date , 1);
    duedate = format(startOfDay(duedate), "dd.mm.yyyy");
    console.log("duedate is: "+ duedate);
    return duedate;
}

function adddateinarray(duedate)
{   console.log(duedate);
    duedates[index] = duedate;
    localStorage.setItem('duedates', JSON.stringify(duedates));
}



export {clickplus};