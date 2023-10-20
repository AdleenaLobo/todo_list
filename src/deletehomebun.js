import { trackbotharray } from './checkboxnlisttracker';
import { homecont , saved , a, increment} from './home';
import {arr} from './home';

let inputelem;
let ab;
let index;
let buttondelete;
function clickdeletebun()
{
    
    buttondelete = Array.from(document.getElementsByClassName('delete'));
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
    ab= inputelem.getAttribute('placeholder');
    for(let i = 0 ; i < arr.length ; i++)
    {

        if (ab == arr[i])
        {
            index = i;
            arr.splice(i , 1);
            localStorage.removeItem(saved[i]);
            saved.splice(i ,1);
            a.splice(i , 1);
            console.log(arr);
            console.log(saved);
        }
    }

    if (arr.length == 0)
    {increment = 0;}
    localStorage.setItem('increment' , increment);
}

function deleteelem()
{
    
    homecont.removeChild(inputelem.parentNode);
}

export{clickdeletebun , index};