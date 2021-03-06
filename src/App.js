
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';
import Login from './Components/Login/Login';
import Checkout from './Components/CheckOut/Checkout';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path='/blog' element={<Blog></Blog>}></Route>
     <Route path="/service/:serviceId" element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route> 
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='*' element={<Notfound></Notfound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
