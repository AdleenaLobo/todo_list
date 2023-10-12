import './style.css';

let content ;
let about ;
let theme;
let color;
let root;
function getElements()
{
    
    content = document.getElementById('content');
    about = document.getElementById('About');
    theme = document.getElementById('Theme');
    color = theme.getAttribute('name');
    root = document.querySelector(':root');

}


export{content , about, color, theme, root,  getElements};