import MotionDiv from '@/components/ui/MotionDiv';
import SectionHeader from '@/components/ui/SectionHeader';
import { theme } from '@/config/theme';
import { mockData } from '@/data/mockData';

const GalleryPage = () => {
    return (
        <div className="py-20" style={{ backgroundColor: theme.colors.lightBg }}>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="A Peek Into Our World" subtitle="Explore the smiles, laughter, and learning that fill our days." />
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                    {mockData.galleryImages.map((src, index) => (
                        <MotionDiv key={src + index} className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
