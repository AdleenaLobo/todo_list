import { content , home } from "./decbasicelem";
import { clickdeletebun } from "./deletehomebun";
import { calledit} from "./edithomebun";

let homecont;
let homeHeader;
let arr= ["one" ,"two" , "three" ];
let a = [];
let buttonedit;
let buttondelete;
function clickedHome()
{
    home.addEventListener('click' , homefuns);
}

function homefuns()
{
    createhomeelems();
    addcontenthome();
    homeaddclass();
    addhomeelems();
    gethomecomponents();
    calledit();
    clickdeletebun();
}

function createhomeelems()
{
    homecont = document.createElement('div');
    homeHeader = document.createElement('h2');
    for(let i = 0 ; i < arr.length ; i++)
    {
         a[i] = document.createElement('div');
    }
}

function addcontenthome()
{
    homeHeader.textContent = "Projects";
    for(let i = 0 ; i < arr.length ; i++)
    {
        a[i].innerHTML = `<input type="checkbox"/> <input type="text" placeholder = "${arr[i]}" disabled></imput><div class="bun"><button class="edit">edit</button> <button class="delete">delete</button></div>`;
      
    }
}

function homeaddclass()
{
    homeHeader.classList.add('homeHeader');
    homecont.classList.add('projects');
}
function addhomeelems()
{
    homecont.appendChild(homeHeader);
    for(let i = 0 ; i <arr.length ; i++)
    {
        homecont.appendChild(a[i]);
    }
    content.appendChild(homecont)
}
function gethomecomponents()
{
    buttonedit = Array.from(document.getElementsByClassName('edit'));
    buttondelete = Array.from(document.getElementsByClassName('delete'));
}

export {clickedHome , gethomecomponents , buttonedit , buttondelete , arr , homecont};