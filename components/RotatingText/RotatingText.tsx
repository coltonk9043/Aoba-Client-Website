'use client'
import React from "react";

export const RotatingText = (props : {features : string[], className : string}) => {
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

    const incrementIndex = () => {
        let newIndex : number = (selectedIndex + 1) % props.features.length;
        setSelectedIndex(newIndex);
    }

    React.useEffect(() => {
        setTimeout(() => incrementIndex(), 3000);
    }, [selectedIndex]);

    return (
        <p key={selectedIndex} className={"text-aoba-purple-dark text-center font-bold " + props.className} style={{animation: "rotateText 3s linear infinite"}}>{props.features[selectedIndex]}</p>
    );
}