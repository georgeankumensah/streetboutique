import './App.css';
import react from 'react';
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';
import Product from './components/product';
import Background from './components/background/background';
import Tabs from './components/nav/tabs';

function App() {
  return (
    <div className='App'>
      <Header/>
      <div className='body'>
        <Background/>
        <Tabs/>
        {/* <Product/> */}
      {/* <About/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
