'use client'
import { useState, useEffect, memo } from "react";

interface RotatingTextProps {
    features: string[];
    className: string;
}

const RotatingTextComponent = ({ features, className }: RotatingTextProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % features.length);
        }, 3000);

        return () => clearTimeout(timer);
    }, [selectedIndex, features.length]);

    return (
        <p
            key={selectedIndex}
            className={`text-aoba-purple-dark text-center font-bold animate-[rotateText_3s_linear_infinite] ${className}`}
        >
            {features[selectedIndex]}
        </p>
    );
};

export const RotatingText = memo(RotatingTextComponent);