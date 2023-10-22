import { content , home  } from "./decbasicelem";
import { clickdeletebun } from "./deletehomebun";
import { calledit} from "./edithomebun";
import { clickcheck } from "./checkboxhome";
import { getother , hidetodo, showhome, hideabout } from "./pagetracker";
import { clickplus } from "./plusbun";

let homecont;
let homeHeader;
let addbun;
let arr= [];
let a = [];
let checkedelem = [];
let saved=[];
let duedates=[];
let temphome;
let tempabout;
let index;
let increment;
function clickedHome()
{
    home.addEventListener('click' , homefuns);
}

function homefuns()
{
    temphome = document.querySelector('.projects');
    tempabout = document.querySelector('.pluckcard');
    if(temphome == null || temphome == undefined)
    {
        if(tempabout != null || tempabout != undefined)
        {
            getother();
            hideabout();
        }

        hidetodo();
        startingpopulatearr();
        createstartinghomeelems();
        addstartingcontenthome();
        startinghomeaddclass();
        addhomeelems();
        calledit();
        clickdeletebun();
        clickcheck();
        clickplus();


    }
    else
    {
        if(tempabout != null || tempabout != undefined)
        {
            getother();
            hideabout();
        }
        hidetodo();
        showhome(); 
        calledit();
        clickdeletebun();
        clickcheck();
        clickplus();

    }

}

function createstartinghomeelems()
{
    homecont = document.createElement('div');
    homeHeader = document.createElement('h2');
    addbun = document.createElement('button');
    for(let i = 0 ; i < arr.length ; i++)
    {
         a[i] = document.createElement('div');
    }
}
function startingpopulatearr()
{
    let tempa;
    let iterator = 0;
    let temp= Object.fromEntries( Object.keys(localStorage).sort().map((key) => {
        return [key, localStorage[key]];
        //findout
      }));
      console.log(temp);
   
    for(let key in temp)
    {
        if(key != 'checkedElem' && key != 'increment' && key != 'duedates')
        {
            saved[iterator] = key;
            arr[iterator] = localStorage.getItem(saved[iterator]);
            iterator++;   
        }
        else if(key == 'increment')
        {
            increment = localStorage.getItem(key);
        }
        else if(key == 'checkedElem')
        {
            tempa= localStorage.getItem(key);
            
            checkedelem = tempa.split(',');
        }
        else if(key == 'duedates')
        {
            tempa = localStorage.getItem(key);
            duedates = tempa.split(',');
        }
    }
    if (increment == undefined)
    {increment = 0;}

}

function addstartingcontenthome()
{
    addbun.textContent ="+";
    homeHeader.textContent = "Projects";

    for(let i = 0 ; i < arr.length ; i++)
    {
        arr[i]=arr[i].replace(/['|"]+/g , "");
        console.log("in : "+ checkedelem[i]+ " : yes");
        duedates[i] = duedates[i].replace(/['|"|\\|\/|\[|\]]+/g, "");
        a[i].innerHTML = `<input type="checkbox" ${checkedelem[i]}></input> <input type="text" placeholder = "${arr[i]}" disabled></imput><div class="bun"><div class="duedate">DueDate: ${duedates[i]}</div><button class="edit">edit</button> <button class="delete">delete</button></div>`;
      
    }
}



function startinghomeaddclass()
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

function createmorediv()
{
    index = a.length;
    a[index]= document.createElement("div");
}
function addcontentomore(duedate)
{
    console.log(index);
   a[index].innerHTML=  `<input type="checkbox" ${checkedelem[index]}></input> <input type="text" placeholder = "${arr[index]}" disabled></input><div class="bun"><div class="duedate">DueDate: ${duedate}</div><button class="edit">edit</button> <button class="delete">delete</button></div>`;
}

function appendcontent()
{
    homecont.appendChild(a[index]);
}
export {increment ,a ,duedates,saved, clickedHome , arr , homecont , checkedelem , addbun, homefuns, createmorediv ,addcontentomore , appendcontent };