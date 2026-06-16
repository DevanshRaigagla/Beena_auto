import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Categories = lazy(() => import('./pages/Categories'));
const Models = lazy(() => import('./pages/Models'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Quote = lazy(() => import('./pages/Quote'));
const Contact = lazy(() => import('./pages/Contact'));
const Products = lazy(() => import('./pages/Products'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Model specific routes
const ModelDetail = lazy(() => import('./pages/ModelDetail'));

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="h-screen w-full flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      }>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/:modelId" element={<ModelDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
