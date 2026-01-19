import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all child routes */}
        <Route path="/" element={<Layout />}>
          {/* Index route renders on "/" */}
          <Route index element={<Home />} />
          {/* About route renders on "/about" */}
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
