import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tools from './pages/Tools';
import ImageCompressor from './pages/ImageCompressor';
import ImageResizer from './pages/ImageResizer';
import ImageConverter from './pages/ImageConverter';
import ImageCropper from './pages/ImageCropper';
import ImageRotator from './pages/ImageRotator';
import ImageFlipper from './pages/ImageFlipper';
import About from './pages/About';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-light dark:bg-dark-bg text-slate-800 dark:text-slate-100 transition-colors">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/compressor" element={<ImageCompressor />} />
          <Route path="/tools/resizer" element={<ImageResizer />} />
          <Route path="/tools/converter" element={<ImageConverter />} />
          <Route path="/tools/cropper" element={<ImageCropper />} />
          <Route path="/tools/rotator" element={<ImageRotator />} />
          <Route path="/tools/flipper" element={<ImageFlipper />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
