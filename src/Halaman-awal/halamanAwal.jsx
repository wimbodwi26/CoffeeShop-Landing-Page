import Header from '../components/navbar/Header';
import Nomor from '../components/pernomoran/nomor';
import ProductPage from '../components/products/products';
import AboutPage from '../components/about-us/aboutUs';
import TestimonialPage from '../components/testimonial/testimonial';
import BlogPage from '../components/blog/blog';
import FooterPage from '../components/footer/footer'
import png1 from '../assets/Rectangle 1464.png';
import png2 from '../assets/Rectangle 1463.png';
import png3 from '../assets/Rectangle 1462.png';
import png4 from '../assets/Rectangle 1465.png';
import png5 from '../assets/Rectangle 1466.png';
import panah from '../assets/panah.png';

const HalamanAwal = () => {
  return (
    <div className="bg-white min-h-screen"> 
      <Header />
      <div>
    {/* hallaman awal */}
    <section>
        <div className="flex flex-col justify-center w-full h-[864px] items-center">
          <h1 className="text-[56px] font-serif text-[#611200]">Enjoy Your Favorite</h1>
          <h1 className="text-[56px] font-serif text-[#611200]">Coffee with Ngopi</h1>
          <p>Discover tranquility at Ngopi a sanctuary for unwinding,</p>
          <p>where your evenings are perfected with relaxation and rich flavors.</p>
          <button className="bg-[#611200] relative top-[20px] text-white px-8 py-3 flex items-center gap-4 rounded-[40px_0px_40px_0px] hover:opacity-90 transition-all uppercase tracking-widest font-serif">
          Explore Product
        <img src={panah} className="w-5 h-5" alt="icon" />
        </button>
        <div className="flex relative gap-3 top-[40px]">
         <img src={png1} alt='' />
         <img src={png2} alt='' />
         <img src={png3} alt='' />
         <img src={png4} alt='' />
         <img src={png5} alt='' />
       </div>
        </div>
        </section>
      {/* hallaman awal end */}

    {/* halaman ke dua*/}
     <section>
       <Nomor />
     </section>   
     {/* halaman ke dua end*/}    


   {/* halaman ke tiga*/}
   <section id="produk" className="">
     <ProductPage />
   </section>
 {/* halaman ke tiga end*/}
 
 {/* halaman ke 4*/}
 <section id="about">
   <AboutPage />
 </section>
{/* halaman ke 4 end*/}

 {/* halaman ke 5*/}
 <section id="testimonial">
   <TestimonialPage />
 </section>
{/* halaman ke 5 end*/}

{/* halaman ke 6*/}
 <section>
   <BlogPage />
 </section>
{/* halaman ke 6 end*/}

{/* halaman ke 7*/}
 <section id="contact">
   <FooterPage />
 </section>
{/* halaman ke 7 end*/}
      </div>
    </div>
  )
}

export default HalamanAwal