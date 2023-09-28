import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { startRotate, stopRotate } from './reducers/rotateReducer';
function App() {
  const { rotate } = useSelector((state)=>state.rotate);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={
          "App-logo" + 
          (rotate ? "":"-paused")
          }  alt="logo" 
          onClick={rotate ? ()=>{dispatch(stopRotate())} : 
          ()=>{dispatch(startRotate())}}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
