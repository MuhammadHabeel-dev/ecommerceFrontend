'use client';
import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaMobileAlt,
  FaHeadphones,
  FaTv,
  FaCamera,
  FaWatchmanMonitoring,
  FaPlug,
} from 'react-icons/fa';

const categories = [
  { icon: <FaMobileAlt />, label: 'Mobile' },
  { icon: <FaPlug />, label: 'Accessories' },
  { icon: <FaTv />, label: 'LCDs' },
  { icon: <FaCamera />, label: 'Cameras' },
  { icon: <FaHeadphones />, label: 'Headphones' },
  { icon: <FaWatchmanMonitoring />, label: 'Smartwatch' },
];

export default function BrowseByCategory() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 5,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 3.5, spacing: 12 },
      },
      '(max-width: 640px)': {
        slides: { perView: 2.2, spacing: 10 },
      },
    },
  });

  const scrollLeft = () => instanceRef.current?.prev();
  const scrollRight = () => instanceRef.current?.next();

  return (
    <div className="relative py-8 w-[90%] mx-auto">
        <div className='flex justify-between'>
            
      <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
      <div>

        <button
          onClick={scrollLeft}
          className="bg-white shadow-md rounded-full p-2 hover:scale-110 transition-transform duration-300"
          >
          <FaChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className="bg-white shadow-md rounded-full p-2 hover:scale-110 transition-transform duration-300"
          >
          <FaChevronRight />
        </button>
            </div>
        </div>

      
      
      
      <div ref={sliderRef} className="keen-slider">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="keen-slider__slide bg-[var(--color-silver)] rounded-lg px-5 py-6 text-center shadow cursor-pointer transition-transform duration-300 hover:scale-95 hover:bg-white border-black border-1"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl mb-2 text-blue-500">{cat.icon}</div>
              <div className="text-sm font-medium truncate">{cat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
