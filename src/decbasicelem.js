import './style.css';

let content ;
let about ;
let theme;
let color;
let root;
let todo;
let home;
let insidecont;
let today;
function getElements()
{
    
    content = document.getElementById('content');
    about = document.getElementById('About');
    theme = document.getElementById('Theme');
    color = theme.getAttribute('name');
    root = document.querySelector(':root');
    todo = document.getElementById('todo');
    home = document.getElementById('Home');
    insidecont = document.querySelector('.insidecontent');
    today = document.getElementById('today');

}


export{content , about, color, theme, root, todo, home, getElements , insidecont , today};