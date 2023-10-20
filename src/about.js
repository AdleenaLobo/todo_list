import {content, about} from './decbasicelem.js';
import { getother , hidetodo, hidehome, showabout} from './pagetracker.js';


let pulckcard;
let headingAbout;
let contentAbout;
let tempabout;
let temphome;

function clickAbout()
{
    about.addEventListener('click' , aboutfuncs);
}

function aboutfuncs()
{
    tempabout = document.querySelector('.pluckcard');
    temphome = document.querySelector('.projects');
    if(tempabout == null || tempabout == undefined )
    {
        
        if(temphome != null || temphome != undefined)
        {
            getother();
            hidehome();
        }

        hidetodo();
        createAboutElem();
        addcontentAboutElem();
        addClassAboutElem();
        addAboutElem();

    }
    else
    {        
        if(temphome != null  || temphome != undefined)
        {
            getother();
            hidehome();
        }
        hidetodo();
        showabout();
    }

}
function createAboutElem()
{
    pulckcard = document.createElement('div');
    headingAbout = document.createElement('h2');
    contentAbout =  document.createElement('div');

}
function addcontentAboutElem()
{
    headingAbout.textContent = "What is to-do app about?"
    contentAbout.textContent = "It is a simple to-do list app which helps you to navigate through your life with a proper schedule.";
}

function addClassAboutElem()
{
    pulckcard.classList.add('pluckcard');
    headingAbout.classList.add('header');
    contentAbout.classList.add('content');
}
function addAboutElem()
{
    pulckcard.appendChild(headingAbout);
    pulckcard.appendChild(contentAbout);
    content.appendChild(pulckcard);
}

export {clickAbout};
