import { trackbotharray } from "./checkboxnlisttracker";
import {checkedelem } from "./home";

let inputelem;
function clickcheck()
{
    inputelem = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    for(let i = 0 ; i <inputelem.length ; i++)
    {
    inputelem[i].addEventListener('change' , callcheckfuns );
    }
}

function callcheckfuns()
{
    changeattribute.call(this);
    changearr.call(this);
    trackbotharray();
}

function changeattribute()
{
    if(this.getAttribute('checked') == false || this.getAttribute('checked')== null)
    {
        this.setAttribute('checked' , true);

    }
    else
    {
        this.removeAttribute('checked');
    }
}

function changearr()
{
    let index= inputelem.indexOf(this);
    if(checkedelem[index] == 'checked')
    {
        checkedelem[index] = '';
    }
    else
    {
        checkedelem[index] = 'checked';
    }
    localStorage.setItem('checkedElem' , checkedelem);
}

export{clickcheck};