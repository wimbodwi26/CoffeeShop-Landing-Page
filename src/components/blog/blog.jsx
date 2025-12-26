import React, { useState, useRef } from 'react';
import { GoPersonFill } from "react-icons/go";
import { FaCalendar } from "react-icons/fa";
import blog1 from '../../assets/gambar-blog/Rectangle 1461.png';
import blog2 from '../../assets/gambar-blog/Rectangle 1462.png';
import blog3 from '../../assets/gambar-blog/Rectangle 1463.png';
import { GrFormNext } from "react-icons/gr";
import panah from '../../assets/panah.png';



const Blog = [
  {
    id: '1',
    items: [
     { nama: "Jhon Doe", image: blog1, title: "Lorem ipsum dolor sit amet consectetur. Est tempor morbi pellentesque.", tanggal: "Feb 23, 2024" },
     { nama: "Jhon Doe", image: blog2, title: "Lorem ipsum dolor sit amet consectetur. Est tempor morbi pellentesque.", tanggal: "Feb 23, 2024" },
     { nama: "Jhon Doe", image: blog3, title: "Lorem ipsum dolor sit amet consectetur. Est tempor morbi pellentesque.", tanggal: "Feb 23, 2024" },
     { nama: "Jhon Doe", image: blog1, title: "Lorem ipsum dolor sit amet consectetur. Est tempor morbi pellentesque.", tanggal: "Feb 23, 2024" },
     { nama: "Jhon Doe", image: blog2, title: "Lorem ipsum dolor sit amet consectetur. Est tempor morbi pellentesque.", tanggal: "Feb 23, 2024" },
     { nama: "Jhon Doe", image: blog3, title: "Lorem ipsum dolor sit amet consectetur. Est tempor morbi pellentesque.", tanggal: "Feb 23, 2024" },
    ]
  },
];

const BlogPage = () => {
	const datablog = Blog[0].items;


  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef(null);

  // Fungsi mendeteksi posisi scroll
 const handleScroll = () => {
  if (scrollRef.current) {
    const { scrollLeft } = scrollRef.current;
    const itemWidth = scrollRef.current.firstChild.offsetWidth + 28; // 28 adalah nilai gap-7 (7 * 4px)
    
    
    const index = Math.round(scrollLeft / itemWidth);
    setActiveDot(index);
  }
};
	return(
       <div className="py-20 w-full h-[683px] mx-auto py-16 px-6 font-sans">
       	<div className="text-center mb-16">
        <p className="text-gray-400 text-sm tracking-widest mb-2 uppercase">Blog</p>
        <h2 className="text-4xl font-serif text-slate-700">Read our articles</h2>
      </div>

     {/* ref dan scroll */}
     
     	<div
     	ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-7 px-10 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
     	>
     		{datablog.map((item, index) => (
     			<div
                key={index}
                className="min-w-[300px] md:min-w-[350px] snap-center bg-white p-6 shadow-md rounded-[0px_30px_0px_30px] border border-gray-100 flex-shrink-0"
     			>
     			<div className="w-full">
     				<img
     				src={item.image}
     				alt={item.nama}
     				className="w-full h-44 object-cover rounded-[0px_30px_0px_30px] mb-4"
     				/>
     				<div className="flex justify-between p-2">
     				<div className="flex gap-2 items-center">
     				<GoPersonFill className="text-gray-500" />
     					<span className="text-gray-500">{item.nama}</span>
     				</div>

     				<div className="flex gap-2 items-center">
     					<FaCalendar className="text-gray-500" />
     					<span className="text-gray-500">{item.tanggal}</span>
     				</div>
     				</div>

     				<div className="w-[150px]">
     					<span>{item.title}</span>
     				</div>

     				<div className="flex justify-end items-center text-blue-700">
     				<a href="/" className="group flex items-center gap-1 text-blue-600 font-medium">
     					<span>View details</span>
     					<GrFormNext className="transition-transform duration-300 transform group-hover:translate-x-1" />
     					</a>
     				</div>
                </div>
     			</div>
     			))}
     	</div>

     	<div className="flex justify-center p-3">
              <button className="bg-[#611200] text-white px-8 py-3 flex items-center justify-between justify-center gap-4 rounded-[30px_0px_30px_0px] w-[216px] hover:bg-[#4a0d00] transition-all uppercase tracking-widest font-serif text-sm">
          <span>Read More</span>
          <img src={panah} className="w-5 h-5 invert" alt="icon" />
        </button>  	
         </div>
       

     	</div>

		)
}

export default BlogPage