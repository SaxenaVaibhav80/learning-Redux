import {createStore} from 'redux'
import BookReducer from './BookReducer'
const store=createStore(BookReducer)

export default store


// for combining multiple reducer that hold state in a single store----->


// import { createStore, combineReducers } from 'redux';
// import userReducer from './reducers/userReducer';
// import productReducer from './reducers/productReducer';

//Combine multiple reducers into one------>

// const rootReducer = combineReducers({
//   user: userReducer,
//   product: productReducer,
// });

// // Create the Redux store with the combined reducer---->

// const store = createStore(rootReducer);

// export default store;