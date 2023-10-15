import { addbun , arr, homefuns } from "./home";

let index;
function clickplus()
{
    console.log(addbun);
    addbun.addEventListener('click' , callplusfuns);
}

function callplusfuns()
{
    addinarray();
    homefuns();
}

function addinarray()
{
    index = arr.length;
     arr[index] = "add task by pressing edit";
}
export {clickplus};