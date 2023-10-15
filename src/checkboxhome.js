import { inputelem , checkedelem } from "./home";

function clickcheck()
{
    for(let i = 0 ; i <inputelem.length ; i++)
    {
    inputelem[i].addEventListener('change' , callcheckfuns );
    }
}

function callcheckfuns()
{
    changeattribute.call(this);
    changearr.call(this);
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
    if(this.getAttribute('checked') == null)
    {
        checkedelem[index] = '';
    }
    else
    {
        checkedelem[index] = 'checked';
    }
}

export{clickcheck};