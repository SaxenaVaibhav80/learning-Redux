import { useSelector } from "react-redux"


function BookContainer()
{
   const number_of_books = useSelector(state=>state.number_of_book)

    // A function that takes a selector function as its first argument. The selector function is responsible for selecting a part of the Redux store's state or computing derived data.

    return(
        <>
           <h1>Book container</h1>
           <h1>Number of books ={number_of_books}</h1>

        </>
    )
}

export default BookContainer

// NOTE=>

    
// The useSelector hook is a key feature of the React-Redux library, allowing functional React components to access data from a Redux store. This hook replaces the traditional connect function used in class components, providing a more intuitive and concise way to read Redux state in functional components.