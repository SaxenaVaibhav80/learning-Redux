
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/Intro';
import store from './components/Store';
import {Provider} from "react-redux"
import BookContainer from './components/BookContainer';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Intro></Intro>}></Route>
          <Route path="/BookContainer" element={<BookContainer></BookContainer>}></Route>
        </Routes>
      </Router>
    </Provider>
    </>
  );
}

export default App;


// NOTE-->


// The Provider component in react-redux is used to make the Redux store available to your React application. It essentially "provides" the Redux store to any React component that needs to connect to it, allowing them to access Redux state and dispatch actions.