import './style.css';

let content ;
let about ;
let theme;
let color;
let root;
let todo;
let home;
function getElements()
{
    
    content = document.getElementById('content');
    about = document.getElementById('About');
    theme = document.getElementById('Theme');
    color = theme.getAttribute('name');
    root = document.querySelector(':root');
    todo = document.getElementById('todo');
    home = document.getElementById('Home');

}


export{content , about, color, theme, root, todo, home, getElements};