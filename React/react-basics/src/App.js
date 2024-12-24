import logo from './logo.svg';
import './App.css';

import { Home } from './components/Home/Home';
import Login from './components/Login/Login';
import DataBinding from './components/Data-binding/DataBinding';
import ArrayDt from './components/Data-binding/ArrayDt';
import { ObjectDt } from './components/Data-binding/ObjectDt';
import { ArrayObjectsDt } from './components/Data-binding/ArrayObjectsDt';

function App() {
  return (
    <div className="App">
      <ArrayObjectsDt />
    </div>
  );
}

export default App;
