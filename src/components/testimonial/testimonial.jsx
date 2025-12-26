import React, { useState, useRef } from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonial = [
  {
    id: '1',
    items: [
      { rating: 5, image: 'https://i.pravatar.cc/150?u=1', name: 'Michael Wong', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.' },
      { rating: 4, image: 'https://i.pravatar.cc/150?u=2', name: 'Avril Song', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.' },
      { rating: 5, image: 'https://i.pravatar.cc/150?u=3', name: 'Jeanne Wood', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.' },
      { rating: 5, image: 'https://i.pravatar.cc/150?u=4', name: 'Michael Wong', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.' },
      { rating: 4, image: 'https://i.pravatar.cc/150?u=5', name: 'Avril Song', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.' },
      { rating: 5, image: 'https://i.pravatar.cc/150?u=6', name: 'Jeanne Wood', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.' },
    ]
  },
];

const TestimonialPage = () => {
  const dataTesti = Testimonial[0].items;
  
  // 1. Tambahkan State untuk memantau dot mana yang aktif
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef(null);

  // Fungsi mendeteksi posisi scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      // Menghitung indeks berdasarkan posisi scroll
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveDot(index);
    }
  };

  return (
    <div className="max-w-6xl w-full h-[683px] mx-auto py-16 px-6 font-sans">
      <div className="text-center mb-16">
        <p className="text-gray-400 text-sm tracking-widest mb-2 uppercase">Testimonial</p>
        <h2 className="text-4xl font-serif text-slate-700">What our buyers say</h2>
      </div>

      {/* ref dan onScroll */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {dataTesti.map((item, index) => (
          <div 
            key={index} 
            className="flex-none w-[85%] md:w-[calc(33.333%-2rem)] snap-center flex flex-col"
          >
            <div className="flex items-center gap-4 mb-5">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-16 h-16 rounded-full object-cover shadow-sm bg-gray-100"
              />
              <div>
                <h4 className="font-bold text-slate-800 text-lg leading-tight">{item.name}</h4>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < item.rating ? "text-yellow-500" : "text-gray-300"} 
                      size={14}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-[15px] leading-relaxed whitespace-pre-line">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {dataTesti.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeDot === i ? 'w-8 bg-[#611200]' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;