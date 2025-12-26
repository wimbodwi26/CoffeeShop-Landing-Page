import React, { useState } from 'react';
import logopng from '../../assets/logo-89.png';
import logoSerch from '../../assets/Icon Search.png';
import logoShop from '../../assets/ShoppingBagOpen.png';


const Header = () => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);

   const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  
   return(
    <div  className="w-full z-50 fixed flex items-center  justify-between p-3 bg-white">
    	<a href="/"><img src={logopng}  alt='' className="w-[40px] h-[40px]" /></a>
      
      <nav className="flex ">
      	<ul className="flex gap-3">
      		<li><a href="#produk">Products</a></li>
      		<li><a href="#about">About Us</a></li>
      		<li><a href="#testimonial">Testimonial</a></li>
      		<li><a href="#contact">Contact</a></li>
      	</ul>
      </nav>

      <div className="flex items-center gap-3">
  {/* Bagian Input Text (Hanya muncul jika isSearchOpen = true) */}
  {isSearchOpen && (
    <input
      type="text"
      placeholder="Search coffee..."
      className="border-b border-[#611200] outline-none px-2 py-1 text-sm transition-all duration-300 animate-fade-in"
      autoFocus
    />
  )}

  {/* Ikon Search dengan Fungsi Klik */}
  <img 
    src={logoSerch} 
    alt='search' 
    className="w-[24px] h-[24px] cursor-pointer hover:opacity-70" 
    onClick={toggleSearch} // Fungsi saat diklik
  />

  {/* Ikon Shop */}
  <img 
    src={logoShop} 
    alt='shop' 
    className="w-[24px] h-[24px] cursor-pointer" 
  />
</div>
    </div>
   	)
}

export default Header