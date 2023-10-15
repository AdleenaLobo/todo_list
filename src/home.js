import { content , home , insidecont } from "./decbasicelem";
import { clickdeletebun } from "./deletehomebun";
import { calledit} from "./edithomebun";
import { clickcheck } from "./checkboxhome";
import { removeotherabout , getother , hidetodo } from "./pagetracker";
import { trackbotharray } from "./checkboxnlisttracker";
import { clickplus } from "./plusbun";

let homecont;
let homeHeader;
let addbun;
let arr= ["one" ,"two" , "three" ];
let a = [];
let buttonedit;
let buttondelete;
let inputelem;
let checkedelem = ['' , '' , ''];
function clickedHome()
{
    home.addEventListener('click' , homefuns);
}

function homefuns()
{
   
    
    getother();
    removeotherabout();
    hidetodo();
    createhomeelems();
    addcontenthome();
    homeaddclass();
    addhomeelems();
    gethomecomponents();
    calledit();
    clickdeletebun();
    clickcheck();
    clickplus();
    trackbotharray();
    console.log("hi from home");
    console.log("arr:"+arr);
    console.log("checkbox:" +checkedelem);
}

function createhomeelems()
{
    homecont = document.createElement('div');
    homeHeader = document.createElement('h2');
    addbun = document.createElement('button');
    for(let i = 0 ; i < arr.length ; i++)
    {
         a[i] = document.createElement('div');
    }
}

function addcontenthome()
{
    addbun.textContent ="+";
    homeHeader.textContent = "Projects";
    for(let i = 0 ; i < arr.length ; i++)
    {
        a[i].innerHTML = `<input type="checkbox" ${checkedelem[i]}></input> <input type="text" placeholder = "${arr[i]}" disabled></imput><div class="bun"><button class="edit">edit</button> <button class="delete">delete</button></div>`;
      
    }
}

function homeaddclass()
{
    addbun.classList.add('plus');
    homeHeader.classList.add('homeHeader');
    homecont.classList.add('projects');
}
function addhomeelems()
{
    homeHeader.appendChild(addbun);
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
    inputelem = Array.from(document.querySelectorAll('input[type="checkbox"]'));
}

export {clickedHome , gethomecomponents , buttonedit , buttondelete , arr , homecont , inputelem , checkedelem , addbun, homefuns};