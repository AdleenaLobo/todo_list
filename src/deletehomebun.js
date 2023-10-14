import {buttondelete , homecont } from './home';
import {arr} from './home';

let inputelem;
let a;
function clickdeletebun()
{
    for(let i = 0 ; i < buttondelete.length ; i++)
    {
        buttondelete[i].addEventListener('click' , calldeletefuns);
    }
}

function calldeletefuns()
{
    deletefromarr.call(this)
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
            arr.splice(i , 1);
        }
    }
}

function deleteelem()
{
    
    homecont.removeChild(inputelem.parentNode);
    console.log(arr);
}

export{clickdeletebun};