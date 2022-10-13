import './App.css';
import NewRecipe from './components/newRecipe';
import Navbar from './components/navBar';
import './bootstrap.min.css';
import './recipeAdd.css';
import {Route, Routes } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/components' element={<Home />} />
        <Route path='/components/newRecipe' element={<NewRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
