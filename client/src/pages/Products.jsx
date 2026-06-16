import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';

const ALL_PRODUCTS = [
  { id: '0', name: 'Iridium Spark Plug Set', category: 'Engine Parts', oem: '12290-R48-H01', cars: 'Honda City, Amaze', img: '/images/parts-engine.png' },
  { id: '1', name: 'Engine Air Filter Assembly', category: 'Filters', oem: '17220-5A2-A00', cars: 'Honda Civic, CR-V', img: '/images/parts-filters.png' },
  { id: '2', name: 'Front Ceramic Brake Pads', category: 'Brake Parts', oem: '45022-T2G-A01', cars: 'Honda Accord, CR-V', img: '/images/parts-brake.png' },
  { id: '3', name: 'Manual Clutch Plate', category: 'Transmission', oem: '22200-RNR-M01', cars: 'Honda City, Amaze', img: '/images/parts-transmission.png' },
  { id: '4', name: 'Steering Ball Joint', category: 'Steering Parts', oem: '51220-SDA-A02', cars: 'Honda Civic, Accord', img: '/images/parts-steering.png' },
  { id: '5', name: 'Outer Tie Rod End', category: 'Steering Parts', oem: '53540-S04-013', cars: 'Honda Jazz, WR-V', img: '/images/parts-steering.png' },
  { id: '6', name: 'Front Lower Control Arm', category: 'Suspension Parts', oem: '51350-TBA-A00', cars: 'Honda Civic, CR-V', img: '/images/parts-suspension.png' },
  { id: '7', name: 'Ventilated Brake Disc', category: 'Brake Parts', oem: '45251-T2G-A01', cars: 'Honda City, Elevate', img: '/images/parts-brake.png' },
  { id: '8', name: 'Clutch Pressure Plate', category: 'Transmission', oem: '22300-RNR-M01', cars: 'Honda City, Amaze', img: '/images/parts-transmission.png' },
  { id: '9', name: 'Engine Timing Belt', category: 'Engine Parts', oem: '14400-PMM-A02', cars: 'Honda Civic, City', img: '/images/parts-engine.png' },
  { id: '10', name: 'Water Pump Assembly', category: 'Cooling System', oem: '19200-RBC-013', cars: 'Honda CR-V, Accord', img: '/images/parts-cooling.png' },
  { id: '11', name: 'Fuel Injector Nozzle', category: 'Engine Parts', oem: '16450-RNA-A01', cars: 'Honda Jazz, WR-V', img: '/images/parts-engine.png' },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(ALL_PRODUCTS);

  useEffect(() => {
    let filtered = ALL_PRODUCTS;
    
    // Filter by URL category param if present
    if (categoryParam) {
      const normalizedParam = categoryParam.toLowerCase().replace(/-/g, ' ');
      filtered = filtered.filter(p => p.category.toLowerCase() === normalizedParam);
    }
    
    // Filter by text search
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.oem.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [categoryParam, searchTerm]);

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 italic capitalize">
             {categoryParam ? categoryParam.replace(/-/g, ' ') : 'All Genuine Parts'}
           </h1>
           <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
             Browse our comprehensive catalog of authentic Honda OEM components. Guaranteed fit and performance for your vehicle.
           </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="relative w-full md:w-1/2">
             <input 
               type="text" 
               placeholder="Search by part name or OEM number..." 
               className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">
             {filteredProducts.length} Parts Found
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {filteredProducts.map((part) => (
              <div key={part.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group flex flex-col">
                 <div className="h-48 bg-gray-50 flex items-center justify-center p-6 relative">
                    <img src={part.img} alt={part.name} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                    <span className="absolute top-3 right-3 bg-primary text-white text-[9px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest">Genuine</span>
                 </div>
                 <div className="p-6 flex flex-col flex-grow">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">{part.category}</p>
                    <h4 className="text-lg font-bold text-secondary mb-2 italic leading-tight">{part.name}</h4>
                    <p className="text-xs font-bold text-primary mb-4 font-mono">OEM: {part.oem}</p>
                    
                    <div className="mt-auto">
                       <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-4 border-t border-gray-100 pt-4">
                          <span className="font-bold">Fits:</span> {part.cars}
                       </p>
                       <Link to={`/products/${part.id}`} className="block w-full bg-secondary text-white py-3 rounded-lg text-center font-bold text-xs hover:bg-primary transition-colors uppercase tracking-widest">
                          View Details
                       </Link>
                    </div>
                 </div>
              </div>
           ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 font-light text-lg italic">No genuine parts found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
