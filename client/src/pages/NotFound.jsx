import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-xl w-full text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-gray-50 z-0 select-none">
          404
        </div>
        <div className="relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary animate-spin-slow">
              <Settings size={48} />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-secondary mb-6 italic">Route Not Found</h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed mb-12">
            It seems like you've taken a wrong turn. The part or page you are looking for has been moved or doesn't exist in our current inventory.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="flex items-center justify-center bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all">
              <Home size={20} className="mr-3" /> Back to Base
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center justify-center bg-gray-100 text-gray-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all"
            >
              <ArrowLeft size={20} className="mr-3" /> Previous Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
