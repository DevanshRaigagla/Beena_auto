import React, { useState } from 'react';
import { Send, CheckCircle, HelpCircle } from 'lucide-react';
import axios from 'axios';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    hondaModel: '',
    partName: '',
    vinNumber: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // API call to backend
      await axios.post('/api/inquiries', { ...formData, type: 'Quote' });
      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Submission failed', error);
      alert('Failed to submit quote request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <CheckCircle size={80} className="text-secondary mx-auto mb-8" />
        <h1 className="text-4xl font-extrabold text-secondary mb-4 italic">Quote Request Received!</h1>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">
          Thank you for choosing Beena Auto Accessories. Our specialists are already looking for your parts. We will contact you shortly on {formData.mobile} with the best pricing.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-28">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
           <div className="bg-secondary p-12 text-white text-center relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-4 italic">Parts Inquiry</h1>
                <p className="text-gray-400 font-light text-lg">Detailed request for specific genuine Honda components.</p>
              </div>
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <HelpCircle size={150} />
              </div>
           </div>

           <form onSubmit={handleSubmit} className="p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-secondary font-bold mb-3 uppercase tracking-wider text-[10px]">Vehicle Model & Year *</label>
                <input 
                  required 
                  name="hondaModel"
                  value={formData.hondaModel}
                  onChange={handleChange}
                  placeholder="e.g., Honda City 2022 ZX" 
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                />
              </div>

              <div>
                <label className="block text-secondary font-bold mb-3 uppercase tracking-wider text-[10px]">Full Name *</label>
                <input 
                  required 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                />
              </div>

              <div>
                <label className="block text-secondary font-bold mb-3 uppercase tracking-wider text-[10px]">Mobile Number *</label>
                <input 
                  required 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91 98765 44321" 
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-secondary font-bold mb-3 uppercase tracking-wider text-[10px]">Part Name or OEM Number *</label>
                <textarea 
                  required 
                  name="partName"
                  value={formData.partName}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Describe the part or enter known OEM codes..." 
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                ></textarea>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-secondary font-bold mb-3 uppercase tracking-wider text-[10px]">VIN / Chassis Number (Optional)</label>
                <input 
                  name="vinNumber"
                  value={formData.vinNumber}
                  onChange={handleChange}
                  placeholder="17-Digit VIN helps ensure perfect compatibility" 
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                 <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-primary text-white py-5 rounded-2xl font-extrabold text-lg flex items-center justify-center hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
                 >
                   {loading ? 'Processing...' : 'Submit Inquiry'} <Send size={20} className="ml-3" />
                 </button>
              </div>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
