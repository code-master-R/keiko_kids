import ProgramCard from '@/components/ui/ProgramCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { mockData } from '@/data/mockData';
import Image from 'next/image';


const ProgramsPage = () => {

    return (
        <div className="py-20 pt-40 relative overflow-hidden"
        >
            {/* Background Image and Overlay */}
            <div className="absolute inset-0 z-[-1]">
                <Image
                    src="/images/programs.png"
                    alt="Pastel colored abstract background"
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                />
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 250, 205, 0.8)' }}></div>
            </div>
            <div className="relative z-10 w-full mx-auto px-12 sm:px-20 lg:px-30">
                <SectionHeader title="Our Programs" subtitle="At Keiko Kids, we offer age-appropriate programs that support your child’s growth at every stage — blending learning with care, creativity, and fun." />
                <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {mockData.programs.map((p, index) => (
                        <ProgramCard
                            key={index}
                            title={p.name}
                            ageRange={p.age}
                            points={p.points}
                            imageUrl={p.img}
                            imageAlt={p.name}
                            buttonText="Enroll Now"
                            buttonLink="/contact"
                            bgColor={p.bgColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramsPage;
