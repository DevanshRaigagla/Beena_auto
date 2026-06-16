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
      'city':    { name: 'Honda City',    yearRange: '1998 - 2024', img: '/images/honda-city.jpg'    },
      'amaze':   { name: 'Honda Amaze',   yearRange: '2013 - 2024', img: '/images/honda-amaze.png'   },
      'civic':   { name: 'Honda Civic',   yearRange: '2006 - 2024', img: '/images/honda-civic.png'   },
      'jazz':    { name: 'Honda Jazz',    yearRange: '2004 - 2022', img: '/images/honda-jazz.png'    },
      'wr-v':    { name: 'Honda WR-V',    yearRange: '2017 - 2024', img: '/images/honda-wrv.png'     },
      'cr-v':    { name: 'Honda CR-V',    yearRange: '2007 - 2024', img: '/images/honda-crv.png'     },
      'elevate': { name: 'Honda Elevate', yearRange: '2023 - 2024', img: '/images/honda-elevate.png' },
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
      <section className="relative h-[60vh] overflow-hidden flex items-end">
         <img src={model.img} alt={model.name} className="absolute inset-0 w-full h-full object-cover" />
         <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent"></div>
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
              { name: 'Iridium Spark Plug Set (x4)', category: 'Engine', oem: '12290-R48-H01', img: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=400&q=80' },
              { name: 'Engine Air Filter Assembly', category: 'Filters', oem: '17220-5A2-A00', img: 'https://images.unsplash.com/photo-1530046339160-ce3e5b087ea2?auto=format&fit=crop&w=400&q=80' },
              { name: 'Front Ceramic Brake Pads', category: 'Brakes', oem: '45022-T2G-A01', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=400&q=80' }
            ].map((part, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group">
                 <div className="h-56 bg-gray-50 flex items-center justify-center p-8 relative">
                    <img src={part.img} alt={part.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    <span className="absolute top-4 right-4 bg-primary text-white text-[9px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest">Genuine</span>
                 </div>
                 <div className="p-8">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{part.category}</p>
                    <h4 className="text-xl font-bold text-secondary mb-4 italic leading-tight">{part.name}</h4>
                    <p className="text-[10px] font-bold text-gray-400 mb-6 font-mono">OEM: {part.oem}</p>
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
