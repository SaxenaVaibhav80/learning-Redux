import { useSelector } from "react-redux"
import purchase_book from "./BookActionCreator"
import { useDispatch } from "react-redux"

function BookContainer()
{
   const number_of_books = useSelector(state=>state.number_of_book)

    // A function that takes a selector function as its first argument. The selector function is responsible for selecting a part of the Redux store's state or computing derived data.
     
    const dispatch=useDispatch()
    return(
        <>
           <h1>Book container</h1>
           <h1>Number of books ={number_of_books}</h1>
           <button onClick={()=>{
            (dispatch(purchase_book()))

            console.log(1)//it return action object
            
            }}>buy book</button>

        </>
    )
}

export default BookContainer

// NOTE=>

// in Redux, the reducer function runs when an action is dispatched to the Redux store.
    
// The useSelector hook is a key feature of the React-Redux library, allowing functional React components to access data from a Redux store. This hook replaces the traditional connect function used in class components, providing a more intuitive and concise way to read Redux state in functional components.


// FLOW OF CODE----->

// Redux Store:
// The Redux store is created with a reducer or a combination of reducers.
// It holds the global state and is responsible for processing actions and updating the state accordingly.

// Provider Component:
// The Provider component from react-redux is the link between your React application and the Redux store.
// It wraps your React component tree, making the Redux store available to all components within its scope.
// This component establishes the context needed for Redux and React to work together.

// useDispatch Hook:
// This React-Redux hook gives you the dispatch function, allowing you to dispatch Redux actions from functional React components.
// Since useDispatch relies on the Redux context set by Provider, it knows which store to interact with, even though there's no explicit connection in your code.

// Dispatching Actions:
// When you call dispatch, the action is sent to the Redux store defined in the Provider.
// The Redux store processes the action through its reducer(s) to determine how the state should change.
// The store then updates its internal state and notifies any subscribers, including React components that use useSelector or connect.