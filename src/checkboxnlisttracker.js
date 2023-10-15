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
        else if(arr.length > checkedelem.length)
        {
            checkedelem.push('');
        }
    }
}

export {trackbotharray};