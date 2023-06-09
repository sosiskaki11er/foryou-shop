import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import Footer from './components/Footer';
import CataloguePage from './Pages/CataloguePage';
import ProductPage from './Pages/ProductPage';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/catalogue/*' element={<CataloguePage/>}/>
        <Route path='product/:id' element={<ProductPage/>}/>
      </Routes>
      <Menu/>
      <Footer/>
    </Router>
  );
}

export default App;
