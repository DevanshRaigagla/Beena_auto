import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    { name: "Engine Parts", count: 1240, img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=400&q=80" },
    { name: "Brake Parts", count: 450, img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=400&q=80" },
    { name: "Suspension Parts", count: 820, img: "https://images.unsplash.com/photo-1598209279122-8541213a0387?auto=format&fit=crop&w=400&q=80" },
    { name: "Electrical Parts", count: 630, img: "https://images.unsplash.com/photo-1620288627223-53302f4e8c70?auto=format&fit=crop&w=400&q=80" },
    { name: "Filters", count: 180, img: "https://images.unsplash.com/photo-1530046339160-ce3e5b087ea2?auto=format&fit=crop&w=400&q=80" },
    { name: "Cooling System", count: 310, img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80" },
    { name: "Steering Parts", count: 240, img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=400&q=80" },
    { name: "Body Parts", count: 1540, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80" },
    { name: "Accessories", count: 3200, img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
             <div>
               <h1 className="text-3xl font-bold text-secondary mb-2">Spare Parts Categories</h1>
               <p className="text-gray-500">Find the exact component using our structured catalog.</p>
             </div>
             <div className="relative max-w-md w-full">
               <input 
                 type="text" 
                 placeholder="Search categories or part names..." 
                 className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
               />
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
             </div>
           </div>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {categories.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((cat, idx) => (
             <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer">
                <div className="h-48 overflow-hidden relative">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 shadow-inner" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-primary px-2 py-0.5 rounded-sm">Honda Genuine</span>
                    <h3 className="text-2xl font-bold mt-1">{cat.name}</h3>
                  </div>
                </div>
                <div className="p-6 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{cat.count} Items Available</span>
                  <Link to={`/products?category=${cat.name.toLowerCase().replace(' ', '-')}`} className="text-primary font-bold flex items-center hover:translate-x-2 transition-transform">
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
