import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />

          <Route path="/cart" element={<Cart />} />

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
