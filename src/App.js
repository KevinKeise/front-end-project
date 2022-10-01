import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from './pages/ProductPage/ProductPage';
import FixedComponent from './components/FixedComponent';
import Initial from './components/Initial';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/'  element={<FixedComponent/>}>
              <Route index element={<Initial/>} />
              <Route path='product/:id' element={<ProductPage/>}/>
              <Route path='user/config' element={<ProductPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
