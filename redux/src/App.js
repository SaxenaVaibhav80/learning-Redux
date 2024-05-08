
import './App.css';
import Intro from './components/Intro';
import store from './components/store';
import {Provider} from "react-redux"

function App() {
  return (
    <>
    <Provider store={store}>
    <Intro></Intro>
    </Provider>
    </>
  );
}

export default App;


// NOTE-->

// The Provider component in react-redux is used to make the Redux store available to your React application. It essentially "provides" the Redux store to any React component that needs to connect to it, allowing them to access Redux state and dispatch actions.