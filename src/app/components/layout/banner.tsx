import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const images = [
  '/Images/banner3.jpg',
  '/Images/banner5.jpg',
  '/Images/baneer1.jpg',
 
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 200); 
  };

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[400px] gap-6 p-6">
      
      
      <div className="relative w-full lg:w-[70%] rounded-2xl overflow-hidden shadow-lg">
        <img
          src={images[currentImage]}
          alt="carousel"
          className={clsx(
            'w-full h-[400px] object-cover transition-opacity duration-500',
            fade ? 'opacity-100' : 'opacity-0'
          )}
        />
        
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent px-5 py-4 flex justify-between items-end">
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
            Shop Now
          </button>
          <div className="flex gap-3">
            <button
              onClick={prevImage}
              className="bg-white/80 hover:bg-white text-black px-3 py-1 rounded shadow"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="bg-white/80 hover:bg-white text-black px-3 py-1 rounded shadow"
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      
      <div className="w-full lg:w-[30%] rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/Images/banner7.jpg"
          alt="BannerImage"
          className="w-full h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
