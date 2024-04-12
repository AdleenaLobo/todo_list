
import { clickAbout} from "./about";
import { clicktheme} from "./theme";
import {getElements} from "./decbasicelem";
import { clicktodo } from "./todo";
import {clickedHome} from "./home";
import { clicktoday } from "./today";

localStorage.clear();
getElements();
clicktodo();
clicktoday();
clickedHome();
clickAbout();
clicktheme();