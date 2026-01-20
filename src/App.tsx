/**
 * APP.TSX
 * In React, this file acts as the "Switcher". It looks at the URL in your browser 
 * and decides which piece of the website to show on the screen.
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    /* 
       BrowserRouter is what allows the website to change pages 
       INSTANTLY without the browser having to reload the whole page.
    */
    <BrowserRouter>
      <Routes>
        {/* 
          The 'Layout' is like the master template. 
          It contains the Header and Footer 
        */}
        <Route path="/" element={<Layout />}>
          
          {/* This is the default 'Home' content */}
          <Route index element={<Home />} />
          
          {/* If the URL is /about, show the About content */}
          <Route path="about" element={<About />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
