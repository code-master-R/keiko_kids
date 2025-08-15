// /src/components/ProgramCard.tsx

"use client";

import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Define the types for the component's props
interface ProgramCardProps {
    title: string;
    ageRange: string;
    description: string;
    points: string[];
    imageUrl: string;
    imageAlt?: string;
    buttonText: string;
    buttonLink: string;
    bgColor: string;
}

const ProgramCard = ({
    title,
    ageRange,
    description,
    points,
    imageUrl,
    imageAlt = 'Program illustration',
    buttonText,
    buttonLink,
    bgColor,
}: ProgramCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const initialPointsToShow = 3;
    const canExpand = points.length > initialPointsToShow;
    const displayedPoints = isExpanded ? points : points.slice(0, initialPointsToShow);

    return (
        <div
            className="flex w-full max-w-md flex-col items-center gap-y-3 rounded-2xl p-5 text-center shadow-lg text-[#512D6D]"
            style={{ backgroundColor: bgColor }}
        >
            <h2 className="text-5xl font-bold">{title}</h2>
            <p className="text-2xl">{ageRange}</p>

            {/* FIX: The Image is now inside a container with a fixed size */}
            <div className="relative my-1 h-48 w-48">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    layout="fill"
                    objectFit="cover" // This prevents the image from stretching
                    className="rounded-2xl" // Keeps the corners rounded
                />
            </div>

            <p className="text-lg">{description}</p>

            <ul className="text-left space-y-2 text-lg mt-4">
                {displayedPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>

            {canExpand && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-1 font-bold text-sm mt-2 text-gray-600 hover:text-black"
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
            )}

            <Link
                href={buttonLink}
                className="mt-auto pt-4 inline-block rounded-lg px-10 py-3 text-lg font-bold text-white shadow-md transition-transform hover:scale-105 bg-[#DD8491]"
            >
                {buttonText} &raquo;
            </Link>
        </div>
    );
};

export default ProgramCard;
