import './style.css';

let content ;
let about ;
let theme;
let color;
let root;
let todo;
function getElements()
{
    
    content = document.getElementById('content');
    about = document.getElementById('About');
    theme = document.getElementById('Theme');
    color = theme.getAttribute('name');
    root = document.querySelector(':root');
    todo = document.getElementById('todo');

}


export{content , about, color, theme, root, todo, getElements};