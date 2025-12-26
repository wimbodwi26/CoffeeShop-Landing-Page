import React from 'react';
import logo from '../../assets/logo-89.svg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterPage = () => {
  const navigation = {
    quickLinks: [
      { name: "Services", href: "/" },
      { name: "Portfolio", href: "/" },
      { name: "About us", href: "/" },
      { name: "Testimonial", href: "/" },
    ],
    resources: [
      { name: "Support", href: "/" },
      { name: "Privacy Policy", href: "/" },
      { name: "Terms & Conditions", href: "/" },
    ],
    socials: [
      { Icon: FaFacebookF, href: "/" },
      { Icon: FaTwitter, href: "/" },
      { Icon: FaInstagram, href: "/" },
      { Icon: FaLinkedinIn, href: "/" },
      { Icon: FaYoutube, href: "/" },
    ]
  };

  return (
    <footer className="w-full bg-[#1e212b] py-20 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex gap-2 items-center">
              <img src={logo} alt="Ngopi Logo" className="w-10 h-10" />
              <h1 className="text-white text-3xl font-serif font-bold italic tracking-tight">Ngopi</h1>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Discover tranquility at Ngopi, a sanctuary for unwinding, where your evenings are perfected with relaxation and rich flavors.
            </p>
            <div className="text-gray-400 space-y-1">
              <p className="hover:text-white transition-colors cursor-pointer">hello@ngopi.com</p>
              <p>Phone : +01 23456789</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h2 className="text-white text-xl font-serif">Quick Links</h2>
            <ul className="space-y-3">
              {navigation.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-6">
            <h2 className="text-white text-xl font-serif">Resources</h2>
            <ul className="space-y-3">
              {navigation.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6">
            <h2 className="text-white text-xl font-serif">Social Media</h2>
            <div className="flex gap-3">
              {navigation.socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="w-10 h-10 bg-gray-800/50 flex items-center justify-center rounded text-gray-400 hover:bg-[#611200] hover:text-white transition-all duration-300"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-10 flex flex-col items-end border-t border-gray-800">
          <h2 className="text-white text-xl font-serif mb-6">Subscribe</h2>
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="relative max-w-2xl group"
          >
            <div className="flex items-center bg-white/5 rounded-lg p-1.5 border border-gray-700 transition-all duration-300 focus-within:border-gray-500 focus-within:bg-white/10">
              <MdEmail className="text-gray-500 ml-3" size={24} />
              <input 
                type="email" 
                placeholder="name@domain.com" 
                className="bg-transparent w-full px-4 py-2 text-white outline-none placeholder:text-gray-500 text-base"
              />
              <button 
                type="submit"
                className="bg-white text-black px-8 py-2.5 rounded-md font-semibold hover:bg-[#611200] hover:text-white transition-all duration-300 active:scale-95"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;