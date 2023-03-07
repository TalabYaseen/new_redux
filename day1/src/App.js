import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const disp = useDispatch();
  const incr = () => {
    disp({type:'inc'})
  }
  const decr = () => {
    disp({type:'dec'})
  }
  const double = () => {
    disp({type:'double'})
  }
  const count = useSelector(state => state.counter)
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={incr}>+</button>
      <button onClick={decr}>-</button>
      <button onClick={double}>double</button>
    </div>
  );
}

export default App;
