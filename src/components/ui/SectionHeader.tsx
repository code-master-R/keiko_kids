import { theme } from '@/config/theme';
import MotionDiv from './MotionDiv';

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
    <MotionDiv className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: theme.colors.heading }}>
            {title}
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
        </p>
        <div className="mt-4 mx-auto h-1.5 w-24 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
    </MotionDiv>
);

export default SectionHeader;
