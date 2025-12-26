import { useState, useRef } from 'react';

import Product from '../../assets/Rectangle 1466.png';
import Product1 from '../../assets/gambar-produk/Rectangle 1461.png';
import Product2 from '../../assets/gambar-produk/Rectangle 1462.png';
import Product3 from '../../assets/gambar-produk/Rectangle 1463.png';
import Product4 from '../../assets/gambar-produk/Rectangle 1464.png';

const rolesData = [
  {
    id: 'role1',
    label: 'Latte',
    items: [
      { harga: '$2.5', image: Product, title: 'Chocolate Latte', desc: 'Lorem ipsum dolor sit amet consectetur. \nScelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product1, title: 'Mocha Latte', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product2, title: 'Coffee Latte', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product3, title: 'Hazelnut Latte', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product4, title: 'Robusta 2', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product, title: 'Liberica 2', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
    ]
  },
  {
    id: 'role2',
    label: 'Robusta',
    items: [
      { harga: '$2.5', image: Product, title: 'Robusta1', desc: 'Lorem ipsum dolor sit amet consectetur. \nScelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product1, title: 'Robusta2', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product2, title: 'Robusta3', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product3, title: 'Robusta4', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product4, title: 'Robusta5', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product, title: 'Robusta6', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
    ]
  },
  {
    id: 'role3',
    label: 'Acabica',
    items: [
      { harga: '$2.5', image: Product, title: 'Acabica1', desc: 'Lorem ipsum dolor sit amet consectetur. \nScelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product1, title: 'Acabica2', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product2, title: 'Acabica3', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product3, title: 'Acabica4', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product4, title: 'Acabica5', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
      { harga: '$2.5', image: Product, title: 'Acabica6', desc: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla' },
    ]
  }
];

const ProductPage = ()  => {
  const [activeTab, setActiveTab] = useState('role1');
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef(null);

  const currentRole = rolesData.find((r) => r.id === activeTab);

  const handleScroll = (e) => {
    const { scrollLeft, offsetWidth } = e.target;
    const index = Math.round(scrollLeft / offsetWidth);
    setActiveDot(index);
  };

  return (
    <section className="py-20 gap-6 bg-[#fdfdfd] relative top-[30px]">
    <div className="flex flex-col justify-center items-center relative bottom-[30px]">
      <span className="text-gray-400 text-sm tracking-widest mb-2 uppercase">Our Products</span>
      <span className="text-4xl font-serif text-slate-700">From Top Quality Materials</span>
    </div>
      {/* 1. Tab Navigasi */}
      <div className="flex justify-center">
      <div className="flex items-center bg-gray-300 h-[72px] w-[556px] justify-center rounded-full gap-10 mb-12">
        {rolesData.map((role) => (
          <button
            key={role.id}
            onClick={() => {
              setActiveTab(role.id);
              setActiveDot(0);
              if (scrollRef.current) scrollRef.current.scrollLeft = 0;
            }}
            className={`text-xl pb-2 transition-all ${
              activeTab === role.id 
                ? 'border-b-2 border-[#611200] text-[#611200] font-bold' 
                : 'text-gray-400'
            }`}
          >
            {role.label}
          </button>
        ))}
      </div>
      </div>

      {/* List Card */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-10 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {currentRole.items.map((item, i) => (
          <div key={i} className="min-w-[300px] md:min-w-[350px] snap-center bg-white p-6 shadow-md rounded-[0px_30px_0px_30px] border border-gray-100 flex-shrink-0">
            <img src={item.image} alt={item.title} className="w-full h-44 object-cover rounded-[0px_30px_0px_30px] mb-4" />
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-xl">{item.title}</h3>
              
            </div>
            <div className="flex flex-col">
            <p className="text-gray-500 w-[150px] text-sm">{item.desc}</p>
            <div className="flex items-center justify-between p-3">
            <span className="text-[#611200] font-bold">{item.harga}</span>
            <span className="text-[24px] font-bold text-white p-3 rounded-lg cursor-pointer hover:opacity-90 transition-all uppercase tracking-widest flex items-center bg-[#611200]">+</span>
            </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {currentRole.items.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeDot === i ? 'w-8 bg-[#611200]' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductPage