//IMPORTING ACTION type 
import { buy_book } from "./BookConstType"

//initiaizing initial state--->

const TotalInitialBook={number_of_book:20}

// creating reducer take action and initial state

function BookReducer(state=TotalInitialBook,action)
{
    console.log(4)
    switch(action.type){
        
        case buy_book:return{...state,number_of_book:state.number_of_book-1}
        default:return state
    }
    
}

export default BookReducer


// reducer function will actually use to make a changes provided by the action given by dispatch fuction