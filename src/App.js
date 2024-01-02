import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
