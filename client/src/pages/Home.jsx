import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Award, Search, Filter, Star, Truck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../Images/background.png';

const MODELS = [
  { brand: 'Honda', name: 'Honda City', type: 'Premium Sedan', img: '/images/honda-city-gen.png' },
  { brand: 'Honda', name: 'Honda Amaze', type: 'Compact Sedan', img: '/images/honda-amaze.png' },
  { brand: 'Honda', name: 'Honda Civic', type: 'Sport Sedan', img: '/images/honda-civic.png' },
  { brand: 'Honda', name: 'Honda Jazz', type: 'Premium Hatchback', img: '/images/honda-jazz.png' },
  { brand: 'Honda', name: 'Honda CR-V', type: 'Premium SUV', img: '/images/honda-crv.png' },
  { brand: 'Honda', name: 'Honda Elevate', type: 'Compact SUV', img: '/images/honda-elevate.png' },
  { brand: 'BMW', name: 'BMW 3 Series', type: 'Luxury Sedan', img: '/images/3series.png' },
  { brand: 'BMW', name: 'BMW X5', type: 'Luxury SUV', img: 'https://images.unsplash.com/photo-1608660601449-cd0586e92b3a?auto=format&fit=crop&w=800&q=80' },
  { brand: 'BMW', name: 'BMW 5 Series', type: 'Executive Sedan', img: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?auto=format&fit=crop&w=800&q=80' },
  { brand: 'Mercedes', name: 'Mercedes C-Class', type: 'Luxury Sedan', img: '/images/c-class.png' },
  { brand: 'Mercedes', name: 'Mercedes E-Class', type: 'Executive Sedan', img: '/images/E-class.png' },
  { brand: 'Mercedes', name: 'Mercedes GLE', type: 'Luxury SUV', img: '/images/GLE.png' },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }) };

const Home = () => {
  const [selectedBrand, setSelectedBrand] = useState('Honda');
  const filteredModels = MODELS.filter(m => m.brand === selectedBrand);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Genuine Honda Auto Parts"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#b81d24] text-white rounded-sm text-[10px] font-bold uppercase tracking-widest mb-8"
            >
              <span className="font-serif italic font-bold">H</span> GENUINE HONDA PARTS SPECIALIST
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-white tracking-tight">
              Genuine Parts.<br />
              <span className="text-[#e32636]">Perfect Fit.</span><br />
              Honda Performance.
            </h1>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light max-w-lg">
              Original Honda auto accessories and replacement parts designed for durability, reliability, and peak performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <Link
                to="/categories"
                className="bg-[#cc0000] hover:bg-[#aa0000] text-white px-8 py-4 rounded-md font-bold flex items-center justify-center transition-all"
              >
                Explore Parts Catalog <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/quote"
                className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-8 py-4 rounded-md font-bold flex items-center justify-center transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Bar */}
        <div className="absolute bottom-8 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row justify-around items-center gap-6">
            <div className="flex items-center gap-4 text-white">
              <div className="p-3 bg-white/5 rounded-full border border-white/10"><ShieldCheck size={24} className="text-[#e32636]" /></div>
              <div>
                <h4 className="text-sm font-bold mb-0.5">100% Genuine Parts</h4>
                <p className="text-xs text-gray-400 font-light">Authorized & trusted by Honda</p>
              </div>
            </div>

            {/* Removed Fast Shipping and Expert Support as requested */}

            <div className="flex items-center gap-4 text-white">
              <div className="p-3 bg-white/5 rounded-full border border-white/10"><Award size={24} className="text-[#e32636]" /></div>
              <div>
                <h4 className="text-sm font-bold mb-0.5">28+ Years of Trust</h4>
                <p className="text-xs text-gray-400 font-light">Serving car owners and workshops</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 text-xs">
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>



      {/* ── HONDA MODELS ───────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">Find Your Vehicle</p>
            <h2 className="text-4xl font-bold text-secondary mb-4">Premium Brands</h2>
            <p className="text-gray-500 max-w-xl mx-auto font-light">
              Select your vehicle to view precision-engineered genuine parts tailored for your model year and trim.
            </p>
          </div>

          {/* Brand Tabs */}
          <div className="flex justify-center gap-2 md:gap-4 mb-12">
            {['Honda', 'BMW', 'Mercedes'].map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all ${
                  selectedBrand === brand 
                    ? 'bg-secondary text-white shadow-lg' 
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredModels.map((model, idx) => (
              <motion.div
                key={model.name}
                custom={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="h-44 overflow-hidden relative bg-gray-50 flex items-center justify-center">
                  <img
                    src={model.img}
                    alt={model.name}
                    className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ${model.brand === 'Honda' ? 'object-contain p-3' : 'object-cover'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-wider text-gray-600 px-2 py-1 rounded-full">
                    {model.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-secondary mb-4">{model.name}</h3>
                  <Link
                    to={`/models/${model.name.toLowerCase().replace(/ /g, '-')}`}
                    className="w-full block text-center py-2.5 bg-secondary text-white text-xs font-bold rounded-xl hover:bg-primary transition-all duration-300"
                  >
                    View Compatible Parts →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST / GUARANTEE ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <ShieldCheck size={32} />, title: '100% Genuine', desc: 'All parts sourced directly from authorized Honda manufacturers. Quality you can trust.' },
              { icon: <Award size={32} />, title: '28+ Years Trust', desc: 'Serving car owners and workshops since 1998 with dedication and expertise.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="bg-secondary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/10" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Not sure what you need?</h2>
              <p className="text-gray-400 font-light mb-8 max-w-lg mx-auto">
                Share your VIN or chassis number and our specialists will identify the exact genuine part for your Honda.
              </p>
              <Link
                to="/quote"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
                Send an Inquiry <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
