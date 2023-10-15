import {today} from './decbasicelem';
import { homefuns } from './home';

function clicktoday()
{
    today.addEventListener('click' , calltodayfuns);
}

function calltodayfuns()
{
     homefuns()

}
export{clicktoday};