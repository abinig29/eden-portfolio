'use client'
import { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isImageHovered, setIsImageHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
            setIsImageHovered(false);
        };

        const handleMouseOverElement = (e: any) => {
            const isImage = e.target.tagName.toLowerCase() === 'img';
            setIsImageHovered(isImage);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handleMouseOverElement);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleMouseOverElement);
        };
    }, []);

    return (
        <>
            <div
                className={`cursor ${isHovered ? 'cursor-hovered' : ''} ${isImageHovered ? 'cursor-image-hovered' : ''
                    }`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            ></div>
        </>
    );
};

export default Cursor;
