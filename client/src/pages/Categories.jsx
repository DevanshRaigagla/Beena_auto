import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_PRODUCTS } from './Products';

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  
  const getCount = (categoryName) => {
    return ALL_PRODUCTS.filter(p => {
      const matchCategory = p.category === categoryName;
      const matchBrand = selectedBrand === 'All' ? true : p.cars.includes(selectedBrand);
      return matchCategory && matchBrand;
    }).length;
  };

  const categories = [
    { name: "Engine Parts", count: getCount("Engine Parts"), img: "/images/parts-engine.png" },
    { name: "Brake Parts", count: getCount("Brake Parts"), img: "/images/parts-brake.png" },
    { name: "Suspension Parts", count: getCount("Suspension Parts"), img: "/images/parts-suspension.png" },
    { name: "Steering Parts", count: getCount("Steering Parts"), img: "/images/parts-steering.png" },
    { name: "Transmission", count: getCount("Transmission"), img: "/images/parts-transmission.png" },
    { name: "Filters", count: getCount("Filters"), img: "/images/parts-filters.png" },
    { name: "Cooling System", count: getCount("Cooling System"), img: "/images/parts-cooling.png" },
    { name: "Electrical Parts", count: getCount("Electrical Parts"), img: "/images/parts-electrical.png" },
    { name: "Body Parts", count: getCount("Body Parts"), img: "/images/parts-body.png" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Static Title Section (Mobile Only) */}
      <section className="bg-white pt-6 pb-2 md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-2xl font-bold text-secondary mb-1">Spare Parts Categories</h1>
           <p className="text-gray-500 text-sm">Find the exact component using our catalog.</p>
        </div>
      </section>

      {/* Compact Sticky Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
             
             {/* Desktop Title */}
             <div className="hidden md:block">
               <h1 className="text-2xl font-bold text-secondary mb-0">Spare Parts Categories</h1>
             </div>

             <div className="flex flex-col md:flex-row md:items-center gap-3 md:ml-auto w-full md:w-auto">
               {/* Search Bar */}
               <div className="relative w-full md:w-64 lg:w-80">
                 <input 
                   type="text" 
                   placeholder="Search categories..." 
                   className="w-full pl-11 pr-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light shadow-sm text-sm"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
               </div>

               {/* Brand Filter Tabs */}
               <div className="flex flex-wrap items-center gap-1.5">
                 {['All', 'Honda', 'BMW', 'Mercedes'].map(brand => (
                 <button
                   key={brand}
                   onClick={() => setSelectedBrand(brand)}
                   className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                     selectedBrand === brand 
                       ? 'bg-secondary text-white shadow-md' 
                       : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                   }`}
                 >
                   {brand}
                 </button>
               ))}
             </div>
           </div>
           </div>
        </div>
      </div>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {categories.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((cat, idx) => (
             <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer">
                <div className="h-48 overflow-hidden relative">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 shadow-inner" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-primary px-2 py-0.5 rounded-sm">
                      {selectedBrand === 'All' ? 'Premium OEM' : `${selectedBrand} Genuine`}
                    </span>
                    <h3 className="text-2xl font-bold mt-1">{cat.name}</h3>
                  </div>
                </div>
                <div className="p-6 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{cat.count} Items Available</span>
                  <Link to={`/products?category=${cat.name.toLowerCase().replace(' ', '-')}&brand=${selectedBrand}`} className="text-primary font-bold flex items-center hover:translate-x-2 transition-transform">
                    Explore <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
             </div>
           ))}
        </div>
      </section>

      <section className="py-20 bg-secondary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <ShieldCheck size={48} className="mx-auto mb-8 text-primary" />
           <h2 className="text-3xl font-bold mb-6">Expert Technical Assistance</h2>
           <p className="max-w-xl mx-auto text-gray-400 font-light mb-10">
             Not sure what you need? Send us your VIN or chassis number, and our specialists will identify the exact part for your Honda model.
           </p>
           <Link to="/quote" className="bg-white text-secondary px-10 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
             Request Technical ID
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Categories;
