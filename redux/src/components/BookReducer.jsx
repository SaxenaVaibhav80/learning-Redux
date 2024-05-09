//IMPORTING ACTION type 
import { buy_book } from "./BookConstType"

//initiaizing initial state--->

const TotalInitialBook={number_of_book:20}

// creating reducer take action and initial state

function BookReducer(state=TotalInitialBook,action)
{
    switch(action.type){
        
        case buy_book:return{...state,number_of_book:state.number_of_book-1}
        default:return state
    }
    
}

export default BookReducer