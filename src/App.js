import './App.css';
import NewRecipe from './components/newRecipe';
import Navbar from './components/navBar';
import './bootstrap.min.css';
import './recipeAdd.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navbar>
      <Routes>
        <Route path='/components/home' component={<Home />} />
        <Route path='/components/newRecipe' component={<NewRecipe />} />
      </Routes>
      </Navbar>
    </div>
  );
}

export default App;
