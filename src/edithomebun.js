import { buttonedit, arr } from "./home";

let inputelem;
let oldarrelem;
let newarrelem;
function calledit ()
{
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
            arr[i] = newarrelem;
        }
    }
}

export{calledit};