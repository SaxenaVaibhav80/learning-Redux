
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
