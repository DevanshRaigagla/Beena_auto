import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
   return (
      <div className="bg-white min-h-screen pt-20">
         <section className="bg-gray-50 py-20 border-b border-gray-100 text-center">
            <h1 className="text-4xl font-extrabold text-secondary mb-4 italic uppercase tracking-wider">Connect With Us</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">Direct support for all your automotive spare parts requirements.</p>
         </section>

         <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               <div className="space-y-10">
                  <div className="flex items-start">
                     <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0 mr-6">
                        <Phone size={24} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-secondary mb-1 italic">Call Our Experts</h4>
                        <p className="text-gray-500 font-light"> direct ordering.</p>
                        <a href="tel:+91 8779732651" className="text-primary font-bold text-lg mt-2 inline-block">+91 8779732651</a>
                     </div>
                  </div>

                  <div className="flex items-start">
                     <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0 mr-6">
                        <MessageSquare size={24} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-secondary mb-1 italic">Quick WhatsApp</h4>
                        <p className="text-gray-500 font-light">Instant availability checks.</p>
                        <a href="https://wa.me/918779732651" target="_blank" rel="noreferrer" className="text-primary font-bold text-lg mt-2 inline-block">Message on WhatsApp</a>
                     </div>
                  </div>

                  <div className="flex items-start">
                     <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0 mr-6">
                        <Mail size={24} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-secondary mb-1 italic">Email Support</h4>
                        <p className="text-gray-500 font-light">Bulk orders & dealership inquiries.</p>
                        <a href="mailto:mj6142@gmail.com" className="text-primary font-bold text-lg mt-2 inline-block">mj6142@gmail.com</a>
                     </div>
                  </div>

                  <div className="bg-secondary rounded-[2rem] p-10 text-white relative overflow-hidden">
                     <h4 className="text-2xl font-bold mb-6 italic flex items-center">
                        <Clock size={24} className="mr-3 text-primary" /> Working Hours
                     </h4>
                     <div className="space-y-4 font-light text-sm text-gray-400">
                        <div className="flex justify-between border-b border-white/5 pb-4">
                           <span>Monday - Friday</span> <span>8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-4">
                           <span>Saturday</span> <span>9:00 AM - 2:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                           <span>Sunday</span> <span className="text-primary font-bold">Closed</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100">
                     <h4 className="text-2xl font-bold mb-6 italic text-secondary flex items-center">
                        <MapPin size={24} className="mr-3 text-primary" /> Our Location
                     </h4>
                     <p className="text-gray-500 font-light mb-8">
                        Beena Auto Accessories, Mumbai, Maharashtra, India
                     </p>
                     <div className="rounded-2xl overflow-hidden h-72 border border-gray-200">
                        {/* Embedded Google Map Placeholder */}
                        <iframe
                           title="Beena Auto Location"
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913123102!2d77.06889751503417!3d28.50290961314cf!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzEwLjUiTiA3N8KwMDQnMTYuMSJF!5e0!3m2!1sen!2sin!4v1623777000000!5m2!1sen!2sin"
                           className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                           frameBorder="0"
                           allowFullScreen=""
                           aria-hidden="false"
                           tabIndex="0"
                        ></iframe>
                     </div>
                     <a
                        href="https://share.google/0D2kbmr3nEl9lcG9S"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full mt-8 block text-center py-4 bg-secondary text-white font-bold rounded-xl hover:bg-primary transition-all"
                     >
                        Get Directions
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Contact;
