import {arr , checkedelem} from './home';
import {index} from './deletehomebun';


function trackbotharray()
{
    if(index != undefined)
    {
        if(arr.length < checkedelem.length)
        {
            checkedelem.splice(index , 1);
        }
    }
        
        while(checkedelem.length != arr.length)
        {
                checkedelem.push(" ");

        }

    
    localStorage.setItem('checkedElem' ,checkedelem );
}

export {trackbotharray};