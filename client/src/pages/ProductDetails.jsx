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
            imagePath: '/images/parts-spark-plug.png'
          },
          '1': {
            name: 'Engine Air Filter Assembly',
            oemNumber: '17220-5A2-A00',
            category: 'Filters',
            modelCompatibility: ['Honda Civic 2016-2021', 'Honda CR-V 2017-2022'],
            description: 'High-quality OEM air filter that prevents abrasive particulate matter from entering the engine. Enhances performance and protects your engine.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-air-filter.png'
          },
          '2': {
            name: 'Front Ceramic Brake Pads',
            oemNumber: '45022-T2G-A01',
            category: 'Braking Systems',
            modelCompatibility: ['Honda Accord 2013-2017', 'Honda CR-V 2015-2019'],
            description: 'Genuine Honda high-performance ceramic brake pads designed for maximum stopping power and minimal noise. Engineered specifically for your model to ensure optimal braking performance and longevity.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake-pads.png'
          },
          '3': {
            name: 'Manual Clutch Plate (Friction Disc)',
            oemNumber: '22200-RNR-M01',
            category: 'Transmission',
            modelCompatibility: ['Honda City 2014-2020', 'Honda Amaze 2013-2024'],
            description: 'Genuine Honda OE clutch plate. Ensures smooth engagement, minimal judder, and reliable power transfer from the engine to the transmission for your manual Honda vehicle.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-clutch-plate.png'
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
            imagePath: '/images/parts-brake-disc.png'
          },
          '8': {
            name: 'Clutch Pressure Plate',
            oemNumber: '22300-RNR-M01',
            category: 'Transmission',
            modelCompatibility: ['Honda City 2014-2020', 'Honda Amaze 2013-2024'],
            description: 'Honda OE clutch pressure plate. Provides the exact clamping force required by your Honda engine to prevent clutch slip while maintaining a light, comfortable pedal feel.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-transmission.png'
          },
          '9': {
            name: 'Engine Timing Belt',
            oemNumber: '14400-PMM-A02',
            category: 'Engine Components',
            modelCompatibility: ['Honda Civic 2001-2005', 'Honda City 1996-2002'],
            description: 'Genuine Honda engine timing belt. Essential for maintaining the precise synchronization between the crankshaft and camshaft. Replace at recommended intervals to prevent catastrophic engine failure.',
            stockStatus: 'Available to Order',
            imagePath: '/images/parts-timing-belt.png'
          },
          '10': {
            name: 'Water Pump Assembly',
            oemNumber: '19200-RBC-013',
            category: 'Cooling System',
            modelCompatibility: ['Honda CR-V 2007-2011', 'Honda Accord 2008-2012'],
            description: 'Genuine Honda water pump. Ensures optimal coolant circulation to prevent engine overheating. Features a precision-machined impeller and high-quality bearing for long-lasting reliability.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-cooling.png'
          },
          '11': {
            name: 'Fuel Injector Nozzle',
            oemNumber: '16450-RNA-A01',
            category: 'Engine Components',
            modelCompatibility: ['Honda Jazz 2009-2014', 'Honda WR-V 2017-2022'],
            description: 'Genuine Honda fuel injector. Provides a precise fuel spray pattern for optimal combustion, fuel efficiency, and smooth engine performance. Solves misfires and rough idling caused by clogged injectors.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-fuel-injector.png'
          },
          '12': {
            name: 'Premium Engine Oil Filter',
            oemNumber: '11428507683',
            category: 'Filters',
            modelCompatibility: ['BMW 3 Series', 'BMW 5 Series'],
            description: 'OEM BMW premium engine oil filter element. Captures microscopic contaminants and debris to protect your engine\'s moving parts. Essential for every oil change service.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-filters.png'
          },
          '13': {
            name: 'M-Sport Ceramic Brake Pads',
            oemNumber: '34116850885',
            category: 'Braking Systems',
            modelCompatibility: ['BMW X5', 'BMW 5 Series'],
            description: 'OEM BMW M-Sport ceramic brake pads. Engineered for high-performance driving, offering exceptional bite, low dust, and minimal fade under heavy braking conditions.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake-pads.png'
          },
          '14': {
            name: 'Active Carbon Cabin Filter',
            oemNumber: 'A2058350147',
            category: 'Filters',
            modelCompatibility: ['Mercedes C-Class', 'Mercedes E-Class'],
            description: 'Genuine Mercedes-Benz active carbon cabin air filter. Blocks dust, pollen, and harmful exhaust odors from entering the vehicle interior, ensuring clean and fresh air for passengers.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-filters.png'
          },
          '15': {
            name: 'AirMatic Shock Absorber',
            oemNumber: 'A1663201313',
            category: 'Suspension',
            modelCompatibility: ['Mercedes GLE'],
            description: 'Genuine Mercedes-Benz AirMatic front air suspension strut. Restores original ride comfort, vehicle leveling, and dynamic handling capabilities. Direct replacement for leaking or failed units.',
            stockStatus: 'Available to Order',
            imagePath: '/images/parts-suspension.png'
          },
          '16': {
            name: 'Engine Main Bearing Set',
            oemNumber: '13341-PAA-A01',
            category: 'Engine Components',
            modelCompatibility: ['Honda City 2009-2023', 'Honda Amaze 2013-2024', 'Honda Civic 2006-2021'],
            description: 'Genuine Honda crankshaft main bearing set. Precision-manufactured to exact factory tolerances, these bearings provide the critical oil film between the crankshaft and engine block. Essential for preventing metal-to-metal contact and ensuring long engine life. Supplied as a complete set for a full overhaul.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-main-bearing.png'
          },
          '17': {
            name: 'Connecting Rod Bearing Set',
            oemNumber: '13216-PAA-A01',
            category: 'Engine Components',
            modelCompatibility: ['Honda City 2009-2023', 'Honda Jazz 2004-2013', 'Honda WR-V 2017-2022'],
            description: 'Genuine Honda connecting rod (big-end) bearing set. These bearings sit between the connecting rod and the crankshaft journal. Manufactured with a precision-engineered tri-metal construction for superior load capacity and resistance to wear. A full set is included for a complete engine rebuild.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-con-rod-bearing.png'
          },
          '18': {
            name: 'Engine Valve Set (Intake & Exhaust)',
            oemNumber: '14711-PLC-000',
            category: 'Engine Components',
            modelCompatibility: ['Honda City 2009-2023', 'Honda Amaze 2013-2024', 'Honda Civic 2012-2021', 'Honda Jazz 2004-2013'],
            description: 'Complete genuine Honda engine valve set including all intake and exhaust valves. Made from high-grade heat-resistant steel alloy. Ensures perfect sealing of the combustion chamber, optimal compression, and efficient gas exchange for peak engine performance. A must-have for engine top overhaul.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-valve-set.png'
          },
          '19': {
            name: 'Cylinder Head Gasket',
            oemNumber: '12251-PLC-000',
            category: 'Engine Components',
            modelCompatibility: ['Honda City 2009-2023', 'Honda Amaze 2013-2024', 'Honda WR-V 2017-2022', 'Honda Elevate 2023-2024'],
            description: 'Genuine Honda multi-layer steel (MLS) cylinder head gasket. Forms the critical seal between the engine block and cylinder head to contain combustion pressure, coolant, and engine oil. Using a genuine OEM gasket prevents coolant leaks, oil mixing, and catastrophic head gasket failure. Engineered for perfect fitment.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-head-gasket.png'
          },
          '20': {
            name: 'Engine Valve Stem Seal Set',
            oemNumber: '12209-PCX-004',
            category: 'Engine Components',
            modelCompatibility: ['Honda City 2009-2023', 'Honda Civic 2006-2021', 'Honda CR-V 2013-2022', 'Honda Jazz 2004-2013'],
            description: 'Genuine Honda valve stem seal (valve guide seal) complete set for all intake and exhaust valves. These seals prevent engine oil from seeping down the valve stems into the combustion chamber. Worn seals cause blue smoke on startup and excessive oil consumption. A complete set is included.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-valve-seal.png'
          },
          '21': {
            name: 'Crankshaft Thrust Washer Set',
            oemNumber: '13014-PH7-003',
            category: 'Engine Components',
            modelCompatibility: ['Honda City 2009-2023', 'Honda Amaze 2013-2024', 'Honda Civic 2006-2021', 'Honda WR-V 2017-2022'],
            description: 'Genuine Honda crankshaft thrust washer set. Controls the end-play (axial movement) of the crankshaft inside the engine block. Worn thrust washers cause crankshaft knock and can lead to complete engine failure. This OEM set restores proper crankshaft clearance and prevents further damage.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-thrust-washer.png'
          },
          '22': {
            name: 'Honda Brake Master Cylinder',
            oemNumber: '46100-TF0-G01',
            category: 'Braking Systems',
            modelCompatibility: ['Honda City', 'Honda Jazz', 'Honda Amaze'],
            description: 'Genuine Honda brake master cylinder assembly with fluid reservoir. Ensures firm brake pedal feel and reliable hydraulic pressure generation for all four wheels. Directly replaces leaking or internally bypassing master cylinders.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake-mc.png'
          },
          '23': {
            name: 'Honda Brake Booster (Servo)',
            oemNumber: '01469-TF0-G00',
            category: 'Braking Systems',
            modelCompatibility: ['Honda City', 'Honda WR-V', 'Honda Jazz'],
            description: 'Genuine Honda vacuum brake booster. Provides the necessary power assist to reduce brake pedal effort and ensure rapid, safe stops. Ideal for replacing a booster with a ruptured internal diaphragm causing a hard pedal.',
            stockStatus: 'Available to Order',
            imagePath: '/images/parts-brake-booster.png'
          },
          '24': {
            name: 'Honda Rear Brake Shoe / Liner',
            oemNumber: '43153-TF0-G01',
            category: 'Braking Systems',
            modelCompatibility: ['Honda City', 'Honda Amaze', 'Honda Jazz'],
            description: 'Genuine Honda rear drum brake shoe set. Formulated with high-friction, low-dust lining material to restore rear braking efficiency and ensure proper parking brake operation.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake-liner.png'
          },
          '25': {
            name: 'Honda Premium Brake Pad Set',
            oemNumber: '45022-T7A-000',
            category: 'Braking Systems',
            modelCompatibility: ['Honda Elevate', 'Honda City', 'Honda WR-V'],
            description: 'Genuine Honda front ceramic brake pad set. Engineered for ultra-quiet operation, minimal rotor wear, and strong stopping power across a wide range of operating temperatures. Includes anti-squeal shims.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake-pads.png'
          },
          '26': {
            name: 'Honda Front Disc Rotor',
            oemNumber: '45251-T7A-000',
            category: 'Braking Systems',
            modelCompatibility: ['Honda Elevate', 'Honda WR-V', 'Honda City'],
            description: 'Genuine Honda ventilated front brake disc rotor. Precision cast and machined to prevent warping and brake pulsation. Provides smooth, vibration-free braking performance.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake-disc.png'
          },
          '27': {
            name: 'BMW Brake Master Cylinder',
            oemNumber: '34316773663',
            category: 'Braking Systems',
            modelCompatibility: ['BMW 3 Series (F30)', 'BMW 5 Series (F10)'],
            description: 'OEM BMW brake master cylinder. Restores factory-fresh brake pedal modulation and consistent hydraulic pressure distribution to the ABS/DSC pump. Crucial for maintaining BMWs legendary stopping performance.',
            stockStatus: 'Available to Order',
            imagePath: '/images/parts-brake-mc.png'
          },
          '28': {
            name: 'BMW Vacuum Brake Booster',
            oemNumber: '34336779679',
            category: 'Braking Systems',
            modelCompatibility: ['BMW 3 Series', 'BMW X5'],
            description: 'OEM BMW brake booster servo. Delivers the precise vacuum assistance required for BMWs dynamic braking system. Restores soft pedal feel and confidence-inspiring brake response.',
            stockStatus: 'Available to Order',
            imagePath: '/images/parts-brake-booster.png'
          },
          '29': {
            name: 'BMW Parking Brake Shoe Set',
            oemNumber: '34416761292',
            category: 'Braking Systems',
            modelCompatibility: ['BMW 3 Series', 'BMW 5 Series'],
            description: 'OEM BMW internal parking brake shoe set. Fits inside the rear brake rotor hat to provide reliable parking brake holding power on steep inclines. Essential for passing safety inspections.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake-liner.png'
          },
          '30': {
            name: 'BMW Performance Brake Pads',
            oemNumber: '34116799166',
            category: 'Braking Systems',
            modelCompatibility: ['BMW 3 Series', 'BMW X5'],
            description: 'OEM BMW high-friction brake pad set. Designed specifically for heavier BMW vehicles to provide exceptional bite and fade resistance during spirited driving. Includes electronic wear sensor cutout.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake-pads.png'
          },
          '31': {
            name: 'BMW Ventilated Disc Rotor',
            oemNumber: '34116792223',
            category: 'Braking Systems',
            modelCompatibility: ['BMW 3 Series', 'BMW 5 Series'],
            description: 'OEM BMW front brake rotor. Features directional cooling vanes to rapidly dissipate heat under heavy load, preventing brake fade and maintaining consistent stopping power.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake-disc.png'
          },
          '32': {
            name: 'Mercedes Brake Master Cylinder',
            oemNumber: 'A0064307701',
            category: 'Braking Systems',
            modelCompatibility: ['Mercedes C-Class (W205)', 'Mercedes E-Class (W213)'],
            description: 'Genuine Mercedes-Benz tandem brake master cylinder. Engineered to integrate perfectly with the PRE-SAFE and Adaptive Brake systems. Ensures maximum safety and response in emergency stopping situations.',
            stockStatus: 'Available to Order',
            imagePath: '/images/parts-brake-mc.png'
          },
          '33': {
            name: 'Mercedes Brake Booster',
            oemNumber: 'A0044302630',
            category: 'Braking Systems',
            modelCompatibility: ['Mercedes E-Class', 'Mercedes GLE'],
            description: 'Genuine Mercedes-Benz active brake booster. Works in conjunction with the vehicles collision avoidance systems to provide split-second automated braking force when required.',
            stockStatus: 'Available to Order',
            imagePath: '/images/parts-brake-booster.png'
          },
          '34': {
            name: 'Mercedes Parking Brake Shoe',
            oemNumber: 'A2044200620',
            category: 'Braking Systems',
            modelCompatibility: ['Mercedes C-Class', 'Mercedes E-Class'],
            description: 'Genuine Mercedes-Benz parking brake liner set. Restores holding capability for the foot-operated or electronic parking brake system. Manufactured for long life and quiet engagement.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake-liner.png'
          },
          '35': {
            name: 'Mercedes Ceramic Brake Pads',
            oemNumber: 'A0004203002',
            category: 'Braking Systems',
            modelCompatibility: ['Mercedes C-Class', 'Mercedes GLE'],
            description: 'Genuine Mercedes-Benz low-dust ceramic brake pads. Provides smooth, progressive braking feel while keeping your luxury alloy wheels clean from unsightly black brake dust.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake-pads.png'
          },
          '36': {
            name: 'Mercedes Front Disc Rotor',
            oemNumber: 'A0004211112',
            category: 'Braking Systems',
            modelCompatibility: ['Mercedes E-Class', 'Mercedes GLE'],
            description: 'Genuine Mercedes-Benz high-carbon brake rotor. Heavy-duty construction resists thermal cracking and dampens harmonic vibrations for a silent, ultra-smooth luxury driving experience.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-brake-disc.png'
          },
          '37': {
            name: 'Honda CVT Drive Belt (Push Belt)',
            oemNumber: 'BANDO HMMF',
            category: 'Transmission',
            modelCompatibility: ['Honda City CVT 2014-2023', 'Honda Jazz CVT 2015-2022', 'Honda Amaze CVT 2018-2024'],
            description: 'Genuine Honda CVT (Continuously Variable Transmission) drive belt / push belt. This precision-engineered metal push belt is the heart of the Honda CVT gearbox, transferring power seamlessly between the drive and driven pulleys. Made from high-grade hardened steel elements and bands, it ensures smooth, stepless acceleration and optimal fuel efficiency. A worn or slipping CVT belt causes shuddering, hesitation, and loss of power. Direct OEM replacement for a factory-smooth driving experience. Recommended replacement with genuine Honda HMMF CVT fluid.',
            stockStatus: 'In Stock',
            imagePath: '/images/parts-cvt-belt.png'
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
               <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest">Spare Part</span>
               <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest italic">{product.stockStatus}</span>
             </div>
             
             <h1 className="text-4xl font-extrabold text-secondary mb-2 italic tracking-tight leading-tight">{product.name}</h1>

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
                  href={`https://wa.me/918779732651?text=${encodeURIComponent(`Hello Beena Auto Accessories. I am interested in ${product.name}. Please share details.`)}`}
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
                   <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">100% Quality</p>
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
