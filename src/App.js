import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from './pages/product/ProductPage';
import FixedComponent from './components/fixed-components/FixedComponent';
import Initial from './components/initial/Initial';
import Profile from './pages/profile/Profile';
import Config from './pages/config/Config';
import Paymentp from './pages/payment/Paymentp';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/'  element={<FixedComponent/>}>
              <Route index element={<Initial/>} />
              <Route path='product/:id' element={<ProductPage/>}/>
              <Route path='profiles' element={<Profile/>}/>
              <Route path='user/config' element={<Config/>}/>
              <Route path='payment' element={<Paymentp/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
