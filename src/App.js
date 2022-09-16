import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import AsideBarLeft from './components/AsideBarLeft';
import ProductPage from './pages/ProductPage/ProductPage';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='nji' element={<ProductPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
