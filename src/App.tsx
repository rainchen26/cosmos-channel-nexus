
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GalaxyNav from './components/GalaxyNav';
import Index from './pages/Index';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Community from './pages/Community';
import Member from './pages/Member';
import AIGenerate from './pages/AIGenerate';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <GalaxyNav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/community" element={<Community />} />
        <Route path="/member" element={<Member />} />
        <Route path="/ai-generate" element={<AIGenerate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
