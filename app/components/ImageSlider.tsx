"use client";
import React from "react"; 
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ImageSlider component
export default function ImageSlider({
  imageUrls,
}: {
  imageUrls: string[];
}): JSX.Element {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <>
      <h1 className="font-sans text-center text-3xl font-semibold mt-10">
        Image Slider
      </h1>
      <div className="relative w-1/2 mx-auto mt-4">
        <div
          className="relative h-[460px] mx-12 group "
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={imageUrls[currentIndex]}
            alt={`Slider Image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
          />
        </div>
        <button
          className="absolute left-0 top-1/2 transform h-10 rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-gray-400 group-hover:text-white" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform h-10 rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
          onClick={nextSlide}
        >
          <ChevronRight className="text-gray-400 group-hover:text-white" />
        </button>
      </div>
    </>
  );
}
