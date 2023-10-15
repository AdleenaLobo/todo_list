import {content, about} from './decbasicelem.js';
import { getother, removeotherhome , hidetodo} from './pagetracker.js';


let pulckcard;
let headingAbout;
let contentAbout;

function clickAbout()
{
    about.addEventListener('click' , aboutfuncs);
}

function aboutfuncs()
{
    getother();
    removeotherhome();
    hidetodo();
    createAboutElem();
    addcontentAboutElem();
    addClassAboutElem();
    addAboutElem();
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
