
import { clickAbout} from "./about";
import { clicktheme} from "./theme";
import {getElements} from "./decbasicelem";
import { clicktodo } from "./todo";
import {clickedHome} from "./home";
import { clicktoday } from "./today";


/* let user = ["adleena"];
localStorage.setItem('name' , JSON.stringify(user));
const userData = JSON.parse(localStorage.getItem('name'));
console.log(userData);*/
//localStorage.clear();
getElements();
clicktodo();
clicktoday();
clickedHome();
clickAbout();
clicktheme();