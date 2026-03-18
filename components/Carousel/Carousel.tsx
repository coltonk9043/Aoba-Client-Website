'use client'
import React, { useState, useCallback, memo } from "react";
import Image from 'next/image'

interface CarouselImage {
    src: string;
    alt: string;
}

interface CarouselProps {
    images: CarouselImage[];
}

const CarouselComponent = ({ images }: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, [images.length]);

    const handlePrevSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    }, [images.length]);

    const handleDotClick = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    return (
        <>
            <div className="relative drop-shadow-[0_0_20px_rgba(156,39,176,0.5)]">
                <button
                    onClick={handlePrevSlide}
                    className="flex absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer z-20 rounded-full bg-gradient-to-tl from-aoba-purple to-aoba-purple-dark w-12 h-12 items-center justify-center"
                    aria-label="Previous slide"
                >
                    <span className="font-bold text-2xl">&lt;</span>
                </button>

                <div className="relative aspect-video mx-5 my-auto">
                    {images.map((image, index) => (
                        <div
                            key={`${image.alt}-${index}`}
                            className={`absolute inset-0 rounded-lg overflow-hidden transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 90vw, 50vw"
                                style={{ objectFit: 'contain' }}
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNextSlide}
                    className="flex absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer z-20 rounded-full bg-gradient-to-tl from-aoba-purple to-aoba-purple-dark w-12 h-12 items-center justify-center"
                    aria-label="Next slide"
                >
                    <span className="font-bold text-2xl">&gt;</span>
                </button>
            </div>

            <div className="flex justify-center gap-2 my-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-4 w-4 rounded-full cursor-pointer transition-colors ${index === currentSlide ? 'bg-gray-700' : 'bg-gray-300'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </>
    );
};

export const Carousel = memo(CarouselComponent);