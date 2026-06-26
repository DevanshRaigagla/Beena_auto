import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';

export const ALL_PRODUCTS = [
  { id: '0', name: 'Iridium Spark Plug Set', category: 'Engine Parts', oem: '12290-R48-H01', cars: 'Honda City, Amaze', img: '/images/parts-spark-plug.png' },
  { id: '1', name: 'Engine Air Filter Assembly', category: 'Filters', oem: '17220-5A2-A00', cars: 'Honda Civic, CR-V', img: '/images/parts-air-filter.png' },
  { id: '2', name: 'Front Ceramic Brake Pads', category: 'Brake Parts', oem: '45022-T2G-A01', cars: 'Honda Accord, CR-V', img: '/images/parts-brake-pads.png' },
  { id: '3', name: 'Manual Clutch Plate', category: 'Transmission', oem: '22200-RNR-M01', cars: 'Honda City, Amaze', img: '/images/parts-clutch-plate.png' },
  { id: '4', name: 'Steering Ball Joint', category: 'Steering Parts', oem: '51220-SDA-A02', cars: 'Honda Civic, Accord', img: '/images/parts-steering.png' },
  { id: '5', name: 'Outer Tie Rod End', category: 'Steering Parts', oem: '53540-S04-013', cars: 'Honda Jazz, WR-V', img: '/images/parts-steering.png' },
  { id: '6', name: 'Front Lower Control Arm', category: 'Suspension Parts', oem: '51350-TBA-A00', cars: 'Honda Civic, CR-V', img: '/images/parts-suspension.png' },
  { id: '7', name: 'Ventilated Brake Disc', category: 'Brake Parts', oem: '45251-T2G-A01', cars: 'Honda City, Elevate', img: '/images/parts-brake-disc.png' },
  { id: '8', name: 'Clutch Pressure Plate', category: 'Transmission', oem: '22300-RNR-M01', cars: 'Honda City, Amaze', img: '/images/parts-transmission.png' },
  { id: '9', name: 'Engine Timing Belt', category: 'Engine Parts', oem: '14400-PMM-A02', cars: 'Honda Civic, City', img: '/images/parts-timing-belt.png' },
  { id: '10', name: 'Water Pump Assembly', category: 'Cooling System', oem: '19200-RBC-013', cars: 'Honda CR-V, Accord', img: '/images/parts-cooling.png' },
  { id: '11', name: 'Fuel Injector Nozzle', category: 'Engine Parts', oem: '16450-RNA-A01', cars: 'Honda Jazz, WR-V', img: '/images/parts-fuel-injector.png' },
  { id: '12', name: 'Premium Engine Oil Filter', category: 'Filters', oem: '11428507683', cars: 'BMW 3 Series, 5 Series', img: '/images/parts-filters.png' },
  { id: '13', name: 'M-Sport Ceramic Brake Pads', category: 'Brake Parts', oem: '34116850885', cars: 'BMW X5, 5 Series', img: '/images/parts-brake-pads.png' },
  { id: '14', name: 'Active Carbon Cabin Filter', category: 'Filters', oem: 'A2058350147', cars: 'Mercedes C-Class, E-Class', img: '/images/parts-filters.png' },
  { id: '15', name: 'AirMatic Shock Absorber', category: 'Suspension Parts', oem: 'A1663201313', cars: 'Mercedes GLE', img: '/images/parts-suspension.png' },
  { id: '16', name: 'Engine Main Bearing Set', category: 'Engine Parts', oem: '13341-PAA-A01', cars: 'Honda City, Amaze, Civic', img: '/images/parts-main-bearing.png' },
  { id: '17', name: 'Connecting Rod Bearing Set', category: 'Engine Parts', oem: '13216-PAA-A01', cars: 'Honda City, Jazz, WR-V', img: '/images/parts-con-rod-bearing.png' },
  { id: '18', name: 'Engine Valve Set (Intake & Exhaust)', category: 'Engine Parts', oem: '14711-PLC-000', cars: 'Honda City, Amaze, Civic, Jazz', img: '/images/parts-valve-set.png' },
  { id: '19', name: 'Cylinder Head Gasket', category: 'Engine Parts', oem: '12251-PLC-000', cars: 'Honda City, Amaze, WR-V, Elevate', img: '/images/parts-head-gasket.png' },
  { id: '20', name: 'Engine Valve Stem Seal Set', category: 'Engine Parts', oem: '12209-PCX-004', cars: 'Honda City, Civic, CR-V, Jazz', img: '/images/parts-valve-seal.png' },
  { id: '21', name: 'Crankshaft Thrust Washer Set', category: 'Engine Parts', oem: '13014-PH7-003', cars: 'Honda City, Amaze, Civic, WR-V', img: '/images/parts-thrust-washer.png' },
  { id: '22', name: 'Honda Brake Master Cylinder', category: 'Brake Parts', oem: '46100-TF0-G01', cars: 'Honda City, Jazz, Amaze', img: '/images/parts-brake-mc.png' },
  { id: '23', name: 'Honda Brake Booster (Servo)', category: 'Brake Parts', oem: '01469-TF0-G00', cars: 'Honda City, WR-V, Jazz', img: '/images/parts-brake-booster.png' },
  { id: '24', name: 'Honda Rear Brake Shoe / Liner', category: 'Brake Parts', oem: '43153-TF0-G01', cars: 'Honda City, Amaze, Jazz', img: '/images/parts-brake-liner.png' },
  { id: '25', name: 'Honda Premium Brake Pad Set', category: 'Brake Parts', oem: '45022-T7A-000', cars: 'Honda Elevate, City, WR-V', img: '/images/parts-brake-pads.png' },
  { id: '26', name: 'Honda Front Disc Rotor', category: 'Brake Parts', oem: '45251-T7A-000', cars: 'Honda Elevate, WR-V, City', img: '/images/parts-brake-disc.png' },
  { id: '27', name: 'BMW Brake Master Cylinder', category: 'Brake Parts', oem: '34316773663', cars: 'BMW 3 Series, 5 Series', img: '/images/parts-brake-mc.png' },
  { id: '28', name: 'BMW Vacuum Brake Booster', category: 'Brake Parts', oem: '34336779679', cars: 'BMW 3 Series, X5', img: '/images/parts-brake-booster.png' },
  { id: '29', name: 'BMW Parking Brake Shoe Set', category: 'Brake Parts', oem: '34416761292', cars: 'BMW 3 Series, 5 Series', img: '/images/parts-brake-liner.png' },
  { id: '30', name: 'BMW Performance Brake Pads', category: 'Brake Parts', oem: '34116799166', cars: 'BMW 3 Series, X5', img: '/images/parts-brake-pads.png' },
  { id: '31', name: 'BMW Ventilated Disc Rotor', category: 'Brake Parts', oem: '34116792223', cars: 'BMW 3 Series, 5 Series', img: '/images/parts-brake-disc.png' },
  { id: '32', name: 'Mercedes Brake Master Cylinder', category: 'Brake Parts', oem: 'A0064307701', cars: 'Mercedes C-Class, E-Class', img: '/images/parts-brake-mc.png' },
  { id: '33', name: 'Mercedes Brake Booster', category: 'Brake Parts', oem: 'A0044302630', cars: 'Mercedes E-Class, GLE', img: '/images/parts-brake-booster.png' },
  { id: '34', name: 'Mercedes Parking Brake Shoe', category: 'Brake Parts', oem: 'A2044200620', cars: 'Mercedes C-Class, E-Class', img: '/images/parts-brake-liner.png' },
  { id: '35', name: 'Mercedes Ceramic Brake Pads', category: 'Brake Parts', oem: 'A0004203002', cars: 'Mercedes C-Class, GLE', img: '/images/parts-brake-pads.png' },
  { id: '36', name: 'Mercedes Front Disc Rotor', category: 'Brake Parts', oem: 'A0004211112', cars: 'Mercedes E-Class, GLE', img: '/images/parts-brake-disc.png' },
  { id: '37', name: 'Honda CVT Drive Belt', category: 'Transmission', oem: 'BANDO HMMF', cars: 'Honda City, Jazz', img: '/images/parts-cvt-belt.png' },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get('brand') || 'All');
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
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by brand
    if (selectedBrand !== 'All') {
      filtered = filtered.filter(p => p.cars.includes(selectedBrand));
    }
    
    setFilteredProducts(filtered);
  }, [categoryParam, searchTerm, selectedBrand]);

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 italic capitalize">
             {categoryParam ? categoryParam.replace(/-/g, ' ') : 'Spare Parts Categories'}
           </h1>
           <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-8">
             Browse our comprehensive catalog of authentic OEM components. Guaranteed fit and performance for your vehicle.
           </p>

           {/* Brand Filter Tabs */}
           <div className="flex flex-wrap justify-center items-center gap-2">
             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-2">Brand:</span>
             {['All', 'Honda', 'BMW', 'Mercedes'].map(brand => (
               <button
                 key={brand}
                 onClick={() => setSelectedBrand(brand)}
                 className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                   selectedBrand === brand 
                     ? 'bg-secondary text-white shadow-md' 
                     : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-100'
                 }`}
               >
                 {brand}
               </button>
             ))}
           </div>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="relative w-full md:w-1/2">
             <input 
               type="text" 
               placeholder="Search by part name..." 
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
                 </div>
                 <div className="p-6 flex flex-col flex-grow">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">{part.category}</p>
                    <h4 className="text-lg font-bold text-secondary mb-2 italic leading-tight">{part.name}</h4>
                    
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
