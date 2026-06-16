import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Models = () => {
  const models = [
    { id: 'honda-city',    name: 'Honda City',    type: 'Premium Sedan',    img: '/images/honda-city-gen.png'    },
    { id: 'honda-amaze',   name: 'Honda Amaze',   type: 'Compact Sedan',    img: '/images/honda-amaze.png'   },
    { id: 'honda-civic',   name: 'Honda Civic',   type: 'Sport Sedan',      img: '/images/honda-civic.png'   },
    { id: 'honda-jazz',    name: 'Honda Jazz',    type: 'Premium Hatchback', img: '/images/honda-jazz.png'   },
    { id: 'honda-wr-v',    name: 'Honda WR-V',    type: 'Crossover',        img: '/images/honda-wrv.png'     },
    { id: 'honda-cr-v',    name: 'Honda CR-V',    type: 'Premium SUV',      img: '/images/honda-crv.png'     },
    { id: 'honda-elevate', name: 'Honda Elevate', type: 'Compact SUV',      img: '/images/honda-elevate.png' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 italic">The Honda Lineup</h1>
           <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
             Select your vehicle model to explore specialized parts engineered for your driving experience.
           </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {models.map((model, idx) => (
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.1 }}
                 key={model.id} 
                 className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500"
              >
                 {/* Image area */}
                 <div className="h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden px-6 pt-6">
                   <img 
                      src={model.img} 
                      alt={model.name} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-lg"
                   />
                   <span className="absolute top-4 right-4 bg-white text-[9px] font-bold uppercase tracking-widest text-gray-500 px-2.5 py-1 rounded-full border border-gray-200 shadow-sm">
                     {model.type}
                   </span>
                 </div>
                 {/* Info */}
                 <div className="p-6 border-t border-gray-100">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-1">Genuine Honda</p>
                    <h2 className="text-xl font-bold text-secondary mb-5 italic">{model.name}</h2>
                    <Link 
                      to={`/models/${model.id}`} 
                      className="flex items-center justify-center gap-2 text-sm font-bold bg-secondary text-white px-5 py-3 rounded-xl hover:bg-primary transition-all duration-300"
                    >
                      View Parts Ecosystem <ChevronRight size={16} />
                    </Link>
                 </div>
              </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Models;
