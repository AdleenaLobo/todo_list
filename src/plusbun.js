import { addbun , addcontentomore, arr, createmorediv, appendcontent , saved ,increment, checkedelem } from "./home";
import { calledit } from "./edithomebun";
import { clickcheck } from "./checkboxhome";
import { clickdeletebun } from "./deletehomebun";
import {trackbotharray} from "./checkboxnlisttracker"


let index;
let a;
function clickplus()
{
    addbun.addEventListener('click' , callplusfuns);
}

function callplusfuns()
{
    addinarray();
    trackbotharray();
    createmorediv();
    addcontentomore();
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


export {clickplus};