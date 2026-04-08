import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Module1 } from './pages/Module1';
import { Module2 } from './pages/Module2';
import { Module3 } from './pages/Module3';
import { Module3Practica } from './pages/Module3Practica';
import { Module4 } from './pages/Module4';
import { Module4Practica } from './pages/Module4Practica';
import { Module1Practica } from './pages/Module1Practica';
import { Module2Practica } from './pages/Module2Practica';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="module1" element={<Module1 />} />
          <Route path="module1/practica" element={<Module1Practica />} />
          <Route path="module2" element={<Module2 />} />
          <Route path="module2/practica" element={<Module2Practica />} />
          <Route path="module3" element={<Module3 />} />
          <Route path="module3/practica" element={<Module3Practica />} />
          <Route path="module4" element={<Module4 />} />
          <Route path="module4/practica" element={<Module4Practica />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
