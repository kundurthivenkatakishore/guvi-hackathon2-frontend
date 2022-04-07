import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className='categories'>
        <h1>Categories</h1>
        <ul class="list-group">
          <li class="list-group-item">Cars</li>
          <li class="list-group-item">Cameras</li>
          <li class="list-group-item">Books</li>
          <li class="list-group-item">Bikes</li>
        </ul>
      </div> */}
      <Home/>
    </div>
  );
}

export default App;
