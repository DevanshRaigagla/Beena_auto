import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageCircle, ShieldCheck, Truck, RotateCcw, ArrowLeft } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const MOCK_PRODUCTS = {
          '0': {
            name: 'Iridium Spark Plug Set (x4)',
            oemNumber: '12290-R48-H01',
            category: 'Engine Components',
            modelCompatibility: ['Honda City 2014-2020', 'Honda Amaze 2013-2024'],
            description: 'Genuine Honda Iridium spark plugs. Delivers sustained peak performance, improved fuel efficiency, and a smoother idle.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-engine.png'
          },
          '1': {
            name: 'Engine Air Filter Assembly',
            oemNumber: '17220-5A2-A00',
            category: 'Filters',
            modelCompatibility: ['Honda Civic 2016-2021', 'Honda CR-V 2017-2022'],
            description: 'High-quality OEM air filter that prevents abrasive particulate matter from entering the engine. Enhances performance and protects your engine.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-filters.png'
          },
          '2': {
            name: 'Front Ceramic Brake Pads',
            oemNumber: '45022-T2G-A01',
            category: 'Braking Systems',
            modelCompatibility: ['Honda Accord 2013-2017', 'Honda CR-V 2015-2019'],
            description: 'Genuine Honda high-performance ceramic brake pads designed for maximum stopping power and minimal noise. Engineered specifically for your model to ensure optimal braking performance and longevity.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake.png'
          },
          '3': {
            name: 'Manual Clutch Plate (Friction Disc)',
            oemNumber: '22200-RNR-M01',
            category: 'Transmission',
            modelCompatibility: ['Honda City 2014-2020', 'Honda Amaze 2013-2024'],
            description: 'Genuine Honda OE clutch plate. Ensures smooth engagement, minimal judder, and reliable power transfer from the engine to the transmission for your manual Honda vehicle.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-transmission.png'
          },
          '4': {
            name: 'Steering Ball Joint',
            oemNumber: '51220-SDA-A02',
            category: 'Steering & Suspension',
            modelCompatibility: ['Honda Civic 2006-2011', 'Honda Accord 2003-2007'],
            description: 'Original Equipment Honda steering ball joint. Precision engineered to restore crisp steering response and maintain accurate wheel alignment under all driving conditions.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-steering.png'
          },
          '5': {
            name: 'Outer Tie Rod End',
            oemNumber: '53540-S04-013',
            category: 'Steering',
            modelCompatibility: ['Honda Jazz 2004-2013', 'Honda WR-V 2017-2022'],
            description: 'Genuine Honda outer tie rod end. Critical for precise steering control and tire wear prevention. Manufactured to exact Honda factory tolerances.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-steering.png'
          },
          '6': {
            name: 'Front Lower Control Arm',
            oemNumber: '51350-TBA-A00',
            category: 'Suspension',
            modelCompatibility: ['Honda Civic 2016-2021', 'Honda CR-V 2017-2022'],
            description: 'Honda OE front lower control arm assembly. Includes pre-installed factory bushings for a quiet, comfortable ride and restored handling geometry.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-suspension.png'
          },
          '7': {
            name: 'Ventilated Brake Disc (Rotor)',
            oemNumber: '45251-T2G-A01',
            category: 'Braking Systems',
            modelCompatibility: ['Honda City 2014-2023', 'Honda Elevate 2023-2024'],
            description: 'Genuine Honda ventilated front brake rotor. Designed with precision cooling vanes to prevent brake fade during heavy braking and ensure vibration-free stopping.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake.png'
          },
          '8': {
            name: 'Clutch Pressure Plate',
            oemNumber: '22300-RNR-M01',
            category: 'Transmission',
            modelCompatibility: ['Honda City 2014-2020', 'Honda Amaze 2013-2024'],
            description: 'Honda OE clutch pressure plate. Provides the exact clamping force required by your Honda engine to prevent clutch slip while maintaining a light, comfortable pedal feel.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-transmission.png'
          }
        };

        setTimeout(() => {
          setProduct(MOCK_PRODUCTS[id] || {
            name: 'Genuine Honda Replacement Part',
            oemNumber: 'OEM-HNDA-' + id,
            category: 'Genuine Parts',
            modelCompatibility: ['All Honda Models'],
            description: 'Precision-engineered genuine Honda replacement part. Guaranteed to perfectly fit your vehicle and perform up to factory standards.',
            stockStatus: 'Available to Order',
            imagePath: '/images/parts-accessories.png'
          });
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div></div>;
  if (!product) return <div className="text-center py-20">Product not found.</div>;

  return (
    <div className="bg-white pb-20 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/categories" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 font-light italic">
          <ArrowLeft size={16} className="mr-2" /> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-3xl overflow-hidden aspect-square border border-gray-100 flex items-center justify-center p-12">
               <img src={product.imagePath} alt={product.name} className="max-w-full max-h-full object-contain rounded-2xl shadow-xl" />
            </div>
          </div>

          {/* Details */}
          <div>
             <div className="flex items-center space-x-3 mb-4">
               <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest">Genuine Honda</span>
               <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest italic">{product.stockStatus}</span>
             </div>
             
             <h1 className="text-4xl font-extrabold text-secondary mb-2 italic tracking-tight leading-tight">{product.name}</h1>
             <p className="text-gray-400 text-sm mb-8 font-light italic uppercase tracking-wider">OEM NO: {product.oemNumber}</p>

             <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
               <h4 className="text-xs font-bold text-secondary mb-3 uppercase tracking-widest">Compatible Models</h4>
               <div className="flex flex-wrap gap-2 text-xs">
                 {product.modelCompatibility.map((model, idx) => (
                   <span key={idx} className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 shadow-sm">{model}</span>
                 ))}
               </div>
             </div>

             <p className="text-gray-600 leading-relaxed font-light mb-10 text-lg">
               {product.description}
             </p>

             <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/quote" className="flex-grow bg-secondary text-white py-4 rounded-xl font-bold text-center hover:bg-black transition-all shadow-xl shadow-black/10">
                  Send Inquiry
                </Link>
                <a 
                  href={`https://wa.me/918779732651?text=${encodeURIComponent(`Hello Beena Auto Accessories. I am interested in ${product.name} (OEM: ${product.oemNumber}). Please share details.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-grow bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center hover:scale-105 transition-transform shadow-xl shadow-green-500/10"
                >
                  <MessageCircle size={20} className="mr-2" /> Ask on WhatsApp
                </a>
             </div>

             <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-10">
                <div className="text-center">
                   <ShieldCheck size={28} className="mx-auto text-primary mb-3" />
                   <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">100% Genuine</p>
                </div>
                <div className="text-center">
                   <Truck size={28} className="mx-auto text-primary mb-3" />
                   <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Fast Delivery</p>
                </div>
                <div className="text-center">
                   <RotateCcw size={28} className="mx-auto text-primary mb-3" />
                   <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Expert Support</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
