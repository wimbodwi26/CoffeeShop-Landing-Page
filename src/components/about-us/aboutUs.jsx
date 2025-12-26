import gambar1 from '../../assets/Frame 1.png'
import gambar2 from '../../assets/Frame 2.png'
import panah from '../../assets/panah.png';


const AboutPage = ()  => {
	return(
	<div className="w-full h-[691px] flex flex-col justify-between p-5">
	<div className="flex flex-col justify-center items-center relative top-[100px] bottom-[0px]">
      <span className="text-gray-400 text-sm tracking-widest mb-2 uppercase">About Us</span>
      <span className="text-4xl font-serif text-slate-700">Why we are the best</span>
    </div>
     <div className=" w-full flex justify-between">
     	{/* Paragraf */}
     	<div className="flex flex-col gap-2 ">
     		<p>Lorem ipsum dolor sit amet consectetur. <br/>Scelerisque urna vel sit dolor fringilla volutpat lectus amet. <br/>Integer sed pretium odio lectus at malesuada sed eget nunc. <br/>Viverra malesuada viverra id vel tortor dui adipiscing.</p>
     		<p>Lorem ipsum dolor sit amet consectetur. <br/>Scelerisque urna vel sit dolor fringilla volutpat lectus amet. <br/>Integer sed pretium odio lectus at malesuada sed eget nunc.</p>
     		<p>Lorem ipsum dolor sit amet consectetur. <br/>Scelerisque urna vel sit dolor fringilla volutpat lectus amet.</p>
     	    <button className="bg-[#611200] relative top-[20px] text-white px-8 py-3 flex items-center gap-4 rounded-[30px_0px_30px_0px] w-[216px] hover:opacity-90 transition-all uppercase tracking-widest font-serif">
          Read More
        <img src={panah} className="w-5 h-5" alt="icon" />
        </button>
     	</div>
     {/*gambar*/}
     <div className="flex justify-center gap-2 items-center"> 
     	<img src={gambar2} alt="" />
     	<img src={gambar1} alt=""  className="relative bottom-6" />
     </div>
     </div>
     </div>
		)
}

export default AboutPage