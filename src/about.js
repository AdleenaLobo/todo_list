import {content, about} from './decbasicelem.js';


let pulckcard;
let headingAbout;
let contentAbout;

function clickAbout()
{
    console.log(about);
    about.addEventListener('click' , aboutfuncs);
}

function aboutfuncs()
{
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
