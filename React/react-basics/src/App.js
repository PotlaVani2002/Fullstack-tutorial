import logo from './logo.svg';
import './App.css';

import { Home } from './components/Home/Home';
import Login from './components/Login/Login';
import DataBinding from './components/Data-binding/DataBinding';
import ArrayDt from './components/Data-binding/ArrayDt';
import { ObjectDt } from './components/Data-binding/ObjectDt';
import { ArrayObjectsDt } from './components/Data-binding/ArrayObjectsDt';
import { NestedIterations } from './components/Data-binding/NestedIterations';
import DateDt from './components/Data-binding/DateDt';
import { DateDt2 } from './components/Data-binding/DateDt2';
import { Fakestoreapifetch } from './components/FakestoreAPI/Fakestoreapifetch';

function App() {
  return (
    <div className="App">
    <Fakestoreapifetch />
    </div>
  );
}

export default App;
