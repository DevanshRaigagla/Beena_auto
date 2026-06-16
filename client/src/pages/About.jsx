import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-secondary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Engineering Excellence Since 1998
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Beena Auto Accessories has been the trusted name for genuine Honda 4-wheeler parts, serving car owners and workshops with dedication.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a passion for automotive perfection, Beena Auto Accessories started as a small local supplier in the heart of the automotive district. Today, we stand as a premier distributor of genuine Honda spare parts.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We understand that your vehicle is more than just a machine; it's an investment and a reliable companion. That's why we committed ourselves to providing only 100% authentic components that meet the rigorous standards of Honda engineering.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-primary font-bold text-3xl mb-1">28+</h4>
                <p className="text-gray-500 text-sm">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-primary font-bold text-3xl mb-1">50k+</h4>
                <p className="text-gray-500 text-sm">Parts in Catalog</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Automotive Warehouse"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-2xl hidden lg:block">
              <ShieldCheck size={40} className="mb-4" />
              <p className="font-bold text-lg">Official <br />Dealer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex items-start">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 mr-8">
                <Target size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide car owners and professional workshops with the most reliable, genuine Honda spare parts, ensuring vehicle longevity and safety on every road.
                </p>
              </div>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex items-start">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 mr-8">
                <Eye size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the nation's leading and most trusted online destination for authentic automotive components, set apart by our technical expertise and customer-first approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-secondary mb-16 text-center">Business Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { icon: <TrendingUp size={32} />, title: "Ready Stock", desc: "We maintain a massive inventory of fast-moving and critical components for all Honda models." },
            { icon: <ShieldCheck size={32} />, title: "Technical Expertise", desc: "Our specialists help you identify the precise OEM number for your specific vehicle trim." },
            { icon: <Users size={32} />, title: "Fleet Solutions", desc: "Specialized support and priority fulfillment for fleet owners and large scale workshops." }
          ].map((strength, idx) => (
            <div key={idx}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl text-primary mb-6">
                {strength.icon}
              </div>
              <h4 className="text-xl font-bold text-secondary mb-4">{strength.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{strength.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
