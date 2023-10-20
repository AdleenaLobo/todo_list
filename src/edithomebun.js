import { arr, saved , increment } from "./home";

let inputelem;
let oldarrelem;
let newarrelem;
let index;
let buttonedit;
function calledit ()
{
    buttonedit = Array.from(document.getElementsByClassName('edit'));
    for(let i = 0 ; i<buttonedit.length ; i++)
    {
    buttonedit[i].addEventListener('click' , calleditfuns);
    }

}

function calleditfuns()
{
    editfocus.call(this);

}

function editfocus()
{

    inputelem=this.parentNode.previousElementSibling;
    inputelem.removeAttribute("disabled");
    inputelem.focus();
    oldarrelem = inputelem.getAttribute('placeholder');
    addListen.call(inputelem);
}
function addListen()
{
    this.addEventListener('focusout' , callediting);
}

function callediting()
{
    editattri.call(this);
    editarr();
    saveinls();
}

function editattri()
{
    newarrelem = this.value;
    this.setAttribute('placeholder' , newarrelem);
}
function editarr()
{
    for(let i = 0 ; i< arr.length ; i++)
    {
        if (oldarrelem == arr[i])
        {
            index = i;
            arr[i] = newarrelem;
        }
    }
}

function saveinls()
{
    console.log(saved);
    console.log(arr);
    localStorage.setItem(saved[index] ,(arr[index]) );
    localStorage.setItem('increment' , increment);
    
    
}

export{calledit};