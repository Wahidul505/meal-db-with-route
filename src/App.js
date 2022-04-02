import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Meals from './components/Meals/Meals';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import MealDetails from './components/MealDetails/MealDetails';
import Social from './components/Social/Social';
import HotLines from './components/HotLines/HotLines';
import Info from './components/Info/Info';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/meals' element={<Meals />}></Route>
        <Route path='/meals/:mealId' element={<MealDetails />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}>
          <Route path='social' element={<Social />}></Route>
          <Route path='hot-lines' element={<HotLines />}></Route>
          <Route path='info' element={<Info />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
