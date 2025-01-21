'use client'
import React from "react";
import Image from 'next/image'

type CarouselImage = {
    src: string;
    alt: string;
};

export const Carousel = (props: { images: CarouselImage[], }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === props.images.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? props.images.length - 1 : prevSlide - 1));
    };

    return (
        <>
            <div className="relative" style={{ filter: "drop-shadow(0 0 20px rgba(156, 39, 176, 0.5))" }}>
                <div className="flex absolute top-1/2 left-0 cursor-pointer z-20 rounded-full bg-gradient-to-tl from-aoba-purple to-aoba-purple-dark w-12 h-12" onClick={handlePrevSlide}>
                    <p className="font-bold text-2xl m-auto">&lt;</p>
                </div>

                <div className="h-[50vh] flex overflow-hidden relative mx-5 my-auto">
                    {props.images.map((image, index) => (
                        <div key={image.alt + index} className={`absolute rounded-lg overflow-hidden inset-0 transition-opacity mx-10 duration-500 ease-in-out  ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                            {index === currentSlide &&
                                (
                                    <Image src={image.src}
                                        alt={image.alt}
                                        layout="fill"
                                        objectFit="contain" />
                                )
                            }
                        </div>
                    ))}
                </div>

                <div className="flex absolute top-1/2 right-0 cursor-pointer z-20 rounded-full bg-gradient-to-tl from-aoba-purple to-aoba-purple-dark w-12 h-12" onClick={handleNextSlide}>
                    <p className="font-bold text-2xl m-auto">&gt;</p>
                </div>
            </div>

            <div className="flex justify-center gap-2 my-2">
                {props.images.map((_, index) => (
                    <div key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-4 w-4 rounded-full cursor-pointer ${index === currentSlide ? 'bg-gray-700' : 'bg-gray-300'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </>
    );
}