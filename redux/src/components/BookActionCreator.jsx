import { buy_book } from "./BookConstType"
console.log(2)
function purchase_book()
{
    return{
        type:buy_book
    }
}


// ok this purchase_book function is action creator and return the object which show type of action have to do  
// but we need to make that object "type" constant its a good practice so we can meke other file and convert type into constant and export that type to this file

export default purchase_book