import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Award, Search, Filter, Star, Truck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const MODELS = ['Honda City', 'Honda Amaze', 'Honda Civic', 'Honda Jazz', 'Honda WR-V', 'Honda CR-V', 'Honda Elevate'];

const MODEL_IMAGES = {
  'Honda City': '/images/honda-city.jpg',
  'Honda Amaze': '/images/honda-amaze.png',
  'Honda Civic': '/images/honda-civic.png',
  'Honda Jazz': '/images/honda-jazz.png',
  'Honda WR-V': '/images/honda-wrv.png',
  'Honda CR-V': '/images/honda-crv.png',
  'Honda Elevate': '/images/honda-elevate.png',
};

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }) };

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Honda Engine"
            className="w-full h-full object-cover opacity-50"
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
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/90 rounded-sm text-[10px] font-bold uppercase tracking-[0.25em] text-white mb-8"
            >
              <Star size={10} fill="white" /> Genuine Honda Parts Specialist
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 text-white">
              Precision<br />
              <span className="text-white/70 font-light italic">Engineering.</span><br />
              <span className="text-primary">Uncompromising</span><br />
              <span className="text-white/70 font-light italic">Quality.</span>
            </h1>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light max-w-lg">
              Discover genuine Honda auto accessories and replacement parts. Engineered for exact fit and maximum performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                to="/categories"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-bold flex items-center justify-center transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:translate-y-[-2px]"
              >
                Explore Catalog <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/quote"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-md font-bold flex items-center justify-center transition-all hover:translate-y-[-2px]"
              >
                Request a Quote
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 text-gray-400 text-xs font-medium">
              <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-primary" /> 100% Genuine</div>
              <div className="flex items-center gap-2"><Truck size={16} className="text-primary" /> Fast Delivery</div>
              <div className="flex items-center gap-2"><Clock size={16} className="text-primary" /> 25+ Years Trust</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 text-xs">
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── SEARCH BAR ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 py-6 px-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center gap-3 bg-gray-50 rounded-2xl border border-gray-200 px-5 py-3 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/30 transition-all">
          <Search size={20} className="text-gray-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by part number, OEM code, or model..."
            className="flex-grow bg-transparent focus:outline-none text-gray-700 text-sm placeholder:text-gray-400"
          />
          <Link to="/categories" className="shrink-0 bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-primary-dark transition-colors">
            Search
          </Link>
        </div>
      </div>

      {/* ── ESSENTIAL CATEGORIES ───────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">Our Catalog</p>
            <h2 className="text-3xl font-bold text-secondary">Essential Components</h2>
            <p className="text-gray-500 mt-2 font-light">Browse our comprehensive catalog of authentic Honda systems.</p>
          </div>
          <Link to="/categories" className="text-primary font-bold flex items-center hover:underline text-sm shrink-0">
            View All <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { title: 'Braking Systems', desc: 'Pads, Rotors, Calipers', icon: <ShieldCheck size={28} />, bg: 'from-red-50 to-rose-100' },
            { title: 'Suspension', desc: 'Shocks, Struts, Arms', icon: <Zap size={28} />, bg: 'from-orange-50 to-amber-100' },
            { title: 'Filters & Fluids', desc: 'Oil, Air, Cabin, Coolant', icon: <Filter size={28} />, bg: 'from-blue-50 to-sky-100' },
            { title: 'Electrical', desc: 'Batteries, Alternators, Bulbs', icon: <Award size={28} />, bg: 'from-purple-50 to-violet-100' },
          ].map((item, idx) => (
            <Link
              to="/categories"
              key={idx}
              className="group bg-white p-7 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${item.bg} rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-secondary mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-500 font-light">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HONDA MODELS ───────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">Find Your Vehicle</p>
            <h2 className="text-4xl font-bold text-secondary mb-4">Compatible Honda Models</h2>
            <p className="text-gray-500 max-w-xl mx-auto font-light">
              Select your vehicle to view precision-engineered genuine parts tailored for your model year and trim.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MODELS.map((model, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="h-44 overflow-hidden relative bg-gray-50 flex items-center justify-center">
                  <img
                    src={MODEL_IMAGES[model]}
                    alt={model}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-wider text-gray-600 px-2 py-1 rounded-full">
                    {idx % 2 === 0 ? 'Sedan' : 'SUV'}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-secondary mb-4">{model}</h3>
                  <Link
                    to={`/models/${model.toLowerCase().replace(' ', '-')}`}
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
              { icon: <Truck size={32} />, title: 'Fast Shipping', desc: 'Nationwide delivery within 2-3 working days. Express options available.' },
              { icon: <Award size={32} />, title: '25+ Years Trust', desc: 'Serving car owners and workshops since 1998 with dedication and expertise.' },
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
