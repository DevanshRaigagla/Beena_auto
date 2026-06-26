import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';

const ModelDetail = () => {
  const { modelId } = useParams();
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mocking model data based on modelId
    const models = {
      'honda-city':    { name: 'Honda City',    yearRange: '1998 - 2024', img: '/images/honda-city-gen.png'    },
      'honda-amaze':   { name: 'Honda Amaze',   yearRange: '2013 - 2024', img: '/images/honda-amaze.png'   },
      'honda-civic':   { name: 'Honda Civic',   yearRange: '2006 - 2024', img: '/images/honda-civic.png'   },
      'honda-jazz':    { name: 'Honda Jazz',    yearRange: '2004 - 2022', img: '/images/honda-jazz.png'    },
      'honda-wr-v':    { name: 'Honda WR-V',    yearRange: '2017 - 2024', img: '/images/honda-wrv.png'     },
      'honda-cr-v':    { name: 'Honda CR-V',    yearRange: '2007 - 2024', img: '/images/honda-crv.png'     },
      'honda-elevate': { name: 'Honda Elevate', yearRange: '2023 - 2024', img: '/images/honda-elevate.png' },
      'bmw-3':         { name: 'BMW 3 Series',  yearRange: '1975 - 2024', img: '/images/3series.png' },
      'bmw-x5':        { name: 'BMW X5',        yearRange: '1999 - 2024', img: 'https://images.unsplash.com/photo-1608660601449-cd0586e92b3a?auto=format&fit=crop&w=800&q=80' },
      'bmw-5':         { name: 'BMW 5 Series',  yearRange: '1972 - 2024', img: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?auto=format&fit=crop&w=800&q=80' },
      'mercedes-c':    { name: 'Mercedes C-Class', yearRange: '1993 - 2024', img: '/images/c-class.png' },
      'mercedes-e':    { name: 'Mercedes E-Class', yearRange: '1993 - 2024', img: '/images/E-class.png' },
      'mercedes-gle':  { name: 'Mercedes GLE',     yearRange: '2015 - 2024', img: '/images/GLE.png' },
    };
    
    setTimeout(() => {
      setModel(models[modelId] || { name: modelId.toUpperCase(), yearRange: 'All Models', img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80" });
      setLoading(false);
    }, 500);
  }, [modelId]);

  if (loading) return <div className="h-screen flex items-center justify-center font-light italic text-gray-400 animate-pulse">Scanning Parts Network...</div>;

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden flex items-end bg-white">
         <img src={model.img} alt={model.name} className="absolute inset-0 w-full h-full object-cover object-center" />
         <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent"></div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-white">
            <Link to="/models" className="inline-flex items-center text-gray-400 hover:text-white mb-6 text-xs uppercase tracking-widest transition-colors font-bold">
               <ArrowLeft size={14} className="mr-2" /> Back to Models
            </Link>
            <h1 className="text-6xl font-extrabold italic uppercase tracking-tighter mb-2">{model.name}</h1>
            <p className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Ecosystem & Components • {model.yearRange}</p>
         </div>
      </section>

      {/* Parts Search in Model */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 px-8 py-6 bg-gray-50 rounded-[2rem] border border-gray-100">
            <h3 className="text-2xl font-bold text-secondary italic">Find Precise Parts for {model.name}</h3>
            <div className="relative max-w-md w-full">
               <input 
                 type="text" 
                 placeholder={`Search ${model.name} parts...`} 
                 className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
               />
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Iridium Spark Plug Set', category: 'Engine', oem: '12290-R48-H01', img: '/images/parts-engine.png' },
              { name: 'Engine Air Filter Assembly', category: 'Filters', oem: '17220-5A2-A00', img: '/images/parts-filters.png' },
              { name: 'Front Ceramic Brake Pads', category: 'Brakes', oem: '45022-T2G-A01', img: '/images/parts-brake.png' },
              { name: 'Manual Clutch Plate', category: 'Transmission', oem: '22200-RNR-M01', img: '/images/parts-transmission.png' },
              { name: 'Steering Ball Joint', category: 'Steering', oem: '51220-SDA-A02', img: '/images/parts-steering.png' },
              { name: 'Outer Tie Rod End', category: 'Steering', oem: '53540-S04-013', img: '/images/parts-steering.png' },
              { name: 'Front Lower Control Arm', category: 'Suspension', oem: '51350-TBA-A00', img: '/images/parts-suspension.png' },
              { name: 'Ventilated Brake Disc', category: 'Brakes', oem: '45251-T2G-A01', img: '/images/parts-brake.png' },
              { name: 'Clutch Pressure Plate', category: 'Transmission', oem: '22300-RNR-M01', img: '/images/parts-transmission.png' }
            ].map((part, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group">
                 <div className="h-56 bg-gray-50 flex items-center justify-center p-8 relative">
                    <img src={part.img} alt={part.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                 </div>
                 <div className="p-8">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{part.category}</p>
                    <h4 className="text-xl font-bold text-secondary mb-4 italic leading-tight">{part.name}</h4>
                    <div className="flex gap-4">
                       <Link to={`/products/${idx}`} className="flex-grow bg-gray-100 text-gray-600 py-3 rounded-lg text-center font-bold text-xs hover:bg-gray-200 transition-colors uppercase tracking-widest">Details</Link>
                       <a href="#" className="bg-primary text-white p-3 rounded-lg hover:bg-primary-dark transition-colors"><MessageCircle size={18} /></a>
                    </div>
                 </div>
              </div>
            ))}
         </div>

         <div className="mt-20 py-16 text-center border-t border-gray-100">
            <h2 className="text-3xl font-bold text-secondary mb-6 italic">Don't see your specific component?</h2>
            <p className="text-gray-500 max-w-xl mx-auto font-light mb-10 leading-relaxed">
               We have over 50,000 components for the {model.name} ecosystem. Our procurement team can source rare and localized parts directly from Honda manufacturers.
            </p>
            <Link to="/quote" className="inline-flex items-center bg-secondary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary transition-all uppercase tracking-widest text-sm italic">
               Send Custom Inquiry <ArrowRight size={18} className="ml-3" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default ModelDetail;
