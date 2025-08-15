"use client"; // This component uses hooks

import React, { useEffect, useRef, useState } from 'react';

interface MotionDivProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    direction?: 'left' | 'right';
}

const MotionDiv = ({ children, className, style, direction = 'left' }: MotionDivProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const initialX = direction === 'left' ? '-30px' : '30px';

    const animationStyle: React.CSSProperties = {
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : `translateX(${initialX})`,
    };

    return (
        <div ref={ref} style={{ ...style, ...animationStyle }} className={className}>
            {children}
        </div>
    );
};

export default MotionDiv;
