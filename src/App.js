import './App.css';
import Navbar from './components/Navbar';
import Trending from './components/Trending'
import Preview from './components/Preview';
import MovieDetails from './pages/MovieDetails';
import { Route, BrowserRouter, Link } from 'react-router-dom';


function App() {

  return (
    <>
    <div className="App">
      <Navbar></Navbar>
      <Trending></Trending>
      <Preview></Preview>
    </div>
    </>
  );
}

export default App;