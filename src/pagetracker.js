import { insidecont} from './decbasicelem';

let tempabout;
let temphome;
function getother()
{
    tempabout = document.querySelector('.pluckcard');
    temphome =document.querySelector('.projects');
}
function hideabout()
{
  tempabout.style.visibility = "hidden";
}

function showabout()
{
    tempabout.style.visibility = "visible";
}

function hidehome()
{
    temphome.style.visibility ="hidden";
}
function showhome()
{
    temphome.style.visibility ="visible";
}
function hidetodo()
{
    insidecont.style.visibility = "hidden";
}

function showtodo()
{
    insidecont.style.visibility = "visible";
}

export {getother , hideabout, showabout ,hidehome , showhome , hidetodo ,showtodo };

