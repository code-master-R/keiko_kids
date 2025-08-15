"use client"; // This page uses hooks (useState, useEffect)

import MotionDiv from "@/components/ui/MotionDiv";
import { theme } from "@/config/theme"; // We will use the new vibrant theme from config
import { mockData } from "@/data/mockData";
import { ChevronsRight, Sparkles } from "lucide-react";
import Link from "next/link";

// A new, more enthusiastic Section Header for the lively page
const LivelySectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <MotionDiv className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: theme.colors.heading }}>{title}</h2>
    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    <Sparkles className="mt-4 mx-auto h-8 w-8" style={{ color: theme.colors.accent }} />
  </MotionDiv>
);


const HomePage = () => {


  return (
    <div className="bg-white">

      <section
        className="relative flex h-screen items-end justify-start overflow-hidden bg-cover bg-center p-8 sm:p-12 lg:p-16"
        style={{
          backgroundImage: "url('images/hero-banner.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content container positioned relative to the section */}
        <div className="relative z-10">
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Link
              href="/programs"
              className="inline-block w-full rounded-xl px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition-transform transform hover:scale-105 sm:w-auto"
              style={{ backgroundColor: theme.colors.primary }}
            >
              Our Programs
            </Link>
            <Link
              href="/contact"
              className="inline-block w-full rounded-xl px-8 py-4 text-center text-lg font-bold shadow-lg transition-transform transform hover:scale-105 sm:w-auto"
              style={{ backgroundColor: theme.colors.secondary, color: 'white' }}
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24" style={{ backgroundColor: '#FFF9E6' /* Light Yellow */ }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <LivelySectionHeader title="Why You'll Love Keiko Kids!" subtitle="We create magical moments and meaningful learning experiences every day." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.whyChooseUsItems.map((item, index) => (
              <MotionDiv key={item.title} direction={index % 2 === 0 ? 'left' : 'right'} className="bg-white p-6 text-center rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="inline-block p-5 rounded-full" style={{ backgroundColor: theme.colors.primary + '20' }}>
                  <item.icon className="h-12 w-12" style={{ color: theme.colors.primary }} />
                </div>
                <h3 className="mt-4 text-xl font-bold" style={{ color: theme.colors.heading }}>{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.text}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <LivelySectionHeader title="Our Awesome Curriculum" subtitle="Exploring the world through play, creativity, and curiosity." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.curriculumItems.map((item, index) => (
              <MotionDiv key={item.title} direction={index === 1 ? 'right' : 'left'} className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center" style={{ backgroundColor: ['#FFE4E1', '#E0FFFF', '#F0FFF0'][index] }}>
                <div className="inline-block p-5 rounded-full bg-white">
                  <item.icon className="h-12 w-12" style={{ color: ['#FF6347', '#40E0D0', '#32CD32'][index] }} />
                </div>
                <h3 className="mt-5 text-2xl font-bold" style={{ color: theme.colors.heading }}>{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.text}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24" style={{ backgroundColor: '#F0F8FF' /* Alice Blue */ }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <LivelySectionHeader title="Adventures for Every Age" subtitle="Our programs are tailor-made for each stage of your child's early years." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.programs.map((p, index) => (
              <MotionDiv key={p.name} direction={index % 2 === 0 ? 'left' : 'right'} className="rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col bg-white transform hover:-rotate-1">
                <div className="p-6 flex-grow" style={{ borderTop: `8px solid ${['#FF69B4', '#1E90FF', '#FFD700', '#ADFF2F'][index % 4]}` }}>
                  <h3 className="text-2xl font-bold" style={{ color: theme.colors.secondary }}>{p.name}</h3>
                  <p className="font-semibold mt-1" style={{ color: theme.colors.primary }}>{p.age}</p>
                  <p className="mt-3 text-gray-600">{p.desc}</p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <a href="/programs" className="font-bold text-lg group-hover:text-orange-500 transition-colors" style={{ color: theme.colors.primary }}>Explore <ChevronsRight className="inline h-6 w-6" /></a>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <LivelySectionHeader title="Happy Parent Buzz" subtitle="Straight from the hearts of our amazing Keiko Kids family!" />
          <MotionDiv className="relative max-w-3xl mx-auto bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-2xl shadow-lg text-center min-h-[150px]">
            <div className="absolute -top-5 -left-5 h-16 w-16 text-white bg-pink-400 rounded-full flex items-center justify-center text-4xl font-serif transform -rotate-12">"</div>
            <div className="absolute -bottom-5 -right-5 h-16 w-16 text-white bg-blue-400 rounded-full flex items-center justify-center text-4xl font-serif transform rotate-12">"</div>
            {isMounted && (
              <>
                <p className="text-xl italic text-gray-700">"{mockData.testimonials[currentTestimonial].text}"</p>
                <p className="mt-6 font-bold text-lg" style={{ color: theme.colors.heading }}>- {mockData.testimonials[currentTestimonial].name}</p>
              </>
            )}
            <div className="flex justify-center space-x-2 mt-6">
              {mockData.testimonials.map((_, index) => (
                <button key={index} onClick={() => setCurrentTestimonial(index)} className={`h-3 w-3 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'w-8 bg-orange-500' : 'bg-gray-300'}`}></button>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
