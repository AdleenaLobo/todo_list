import { trackbotharray } from './checkboxnlisttracker';
import {buttondelete , homecont } from './home';
import {arr} from './home';

let inputelem;
let a;
let index;
function clickdeletebun()
{
    for(let i = 0 ; i < buttondelete.length ; i++)
    {
        buttondelete[i].addEventListener('click' , calldeletefuns);
    }
}

function calldeletefuns()
{
    deletefromarr.call(this);
    trackbotharray();
    deleteelem();
}

function deletefromarr()
{
    inputelem= this.parentNode.previousElementSibling;
    a= inputelem.getAttribute('placeholder');
    for(let i = 0 ; i < arr.length ; i++)
    {
        if (a == arr[i])
        {
            index = i;
            arr.splice(i , 1);
        }
    }
}

function deleteelem()
{
    
    homecont.removeChild(inputelem.parentNode);
    console.log(arr);
}

export{clickdeletebun , index};