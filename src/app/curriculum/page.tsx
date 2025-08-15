import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import MotionDiv from '@/components/ui/MotionDiv';
import { theme } from '@/config/theme';
import { mockData } from '@/data/mockData';

const CurriculumPage = () => {
    return (
        <div className="py-20" style={{ backgroundColor: theme.colors.lightBg }}>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Our Curriculum" subtitle="Our learning approach is designed to be holistic, engaging, and fun, nurturing all aspects of a child's development." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {mockData.curriculumItems.map((item, index) => (
                        <MotionDiv key={item.title} direction={index % 2 === 0 ? 'left' : 'right'} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
                            <div className="inline-block p-5 rounded-full" style={{ backgroundColor: theme.colors.primary + '20' }}>
                                <item.icon className="h-12 w-12" style={{ color: theme.colors.primary }} />
                            </div>
                            <h3 className="mt-6 text-2xl font-bold" style={{ color: theme.colors.heading }}>{item.title}</h3>
                            <p className="mt-3 text-gray-600 flex-grow">{item.text}</p>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CurriculumPage;
