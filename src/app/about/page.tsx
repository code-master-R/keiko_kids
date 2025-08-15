import { BrainCircuit, Heart, ToyBrick, Users } from 'lucide-react';

const AboutPage = () => {
    return (
        <main className="bg-[#fef6e7] text-[#333] font-lato">
            <div className="w-full overflow-hidden">

                <section className="relative w-full py-20 lg:py-24">
                    <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-200 rounded-full opacity-30 blur-2xl -translate-x-1/4"></div>
                    <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-8">
                        <div className="text-center lg:text-left">
                            <h1 className="font-nunito text-4xl md:text-5xl font-extrabold text-[#015D52] leading-tight mb-4">
                                🌱 Keiko Kids –
                            </h1>
                            <h1 className="font-nunito text-4xl md:text-5xl font-extrabold text-[#015D52] leading-tight mb-4">
                                Every Child Deserves the Best Start
                            </h1>
                            <p className="font-lato font-bold text-lg text-gray-600 mb-8 pl-4 border-l-4 border-[#FFD54F] inline-block">
                                Caring for Your Child, Every Step of the Way
                            </p>
                            <p className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                At Keiko Kids, we believe that early childhood is not just preparation for life — it is life. Our preschool is built on the foundation of love, trust, and curiosity, providing a nurturing environment where every child is encouraged to grow, explore, and thrive.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src="images/about_us1.png"
                                alt="A child happily engaged in a learning activity"
                                className=" w-full h-auto max-w-md"
                            />
                        </div>
                    </div>
                </section>

                <section className="relative w-full py-20 lg:py-24 bg-[#fff8d9]">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-200 rounded-full opacity-20 blur-3xl -translate-y-1/4"></div>
                    <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-8">
                        <div className="flex justify-center items-center lg:order-first order-last">
                            <img
                                src="images/about_us2.png"
                                alt="Children playing together with educational toys"
                                className=" w-full h-auto max-w-md"
                            />
                        </div>
                        <div className="text-center lg:text-left">
                            <h2 className="font-nunito text-4xl md:text-5xl font-extrabold text-[#015D52] leading-tight mb-6">
                                A World of Learning & Play
                            </h2>
                            <p className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                                With a blend of play-based learning and structured activities, our programs are thoughtfully designed to support holistic development.
                            </p>
                            <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-3 bg-teal-100 rounded-full"><BrainCircuit className="w-6 h-6 text-[#015D52]" /></div>
                                    <div>
                                        <h4 className="font-nunito font-bold text-xl text-gray-800">Intellectual Growth</h4>
                                        <p className="text-gray-600 mt-1">Fostering curiosity through hands-on, structured activities.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-3 bg-orange-100 rounded-full"><Users className="w-6 h-6 text-orange-600" /></div>
                                    <div>
                                        <h4 className="font-nunito font-bold text-xl text-gray-800">Social Development</h4>
                                        <p className="text-gray-600 mt-1">Helping children build kindness, empathy, and strong friendships.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-3 bg-yellow-100 rounded-full"><Heart className="w-6 h-6 text-yellow-600" /></div>
                                    <div>
                                        <h4 className="font-nunito font-bold text-xl text-gray-800">Emotional Support</h4>
                                        <p className="text-gray-600 mt-1">Creating a safe, loving space where every child feels valued.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-3 bg-green-100 rounded-full"><ToyBrick className="w-6 h-6 text-green-600" /></div>
                                    <div>
                                        <h4 className="font-nunito font-bold text-xl text-gray-800">Physical Activity</h4>
                                        <p className="text-gray-600 mt-1">Encouraging movement and coordination through joyful play.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative w-full py-20 lg:py-24">
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#015D52] leading-tight mb-6">
                                Unique Care for Every Child
                            </h2>
                            <p className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                                We understand that each child is unique. That’s why we work closely with families, ensuring personalized care, transparent communication, and a smooth transition into the world of learning.
                            </p>
                            <blockquote className="border-l-4 border-[#FFD54F] pl-6 py-2 text-lg italic text-gray-700 font-semibold max-w-xl mx-auto lg:mx-0">
                                At Keiko Kids, your child is not just learning — they’re building the confidence, compassion, and curiosity that will shape their future.
                            </blockquote>


                        </div>
                        <div className="flex justify-center items-center pl-16">

                            <div className="bg-[#1A4B55] text-white max-w-3xl mx-auto p-8 md:p-12 rounded-3xl text-center">
                                <h3 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-x-3">
                                    Let&apos;s Build Their Future Together
                                    <span className="text-orange-400 text-4xl">♥</span>
                                </h3>
                                <p className="mt-4 text-lg max-w-xl mx-auto">
                                    Join Keiko Kids and watch your child bloom into their brightest self.
                                </p>

                            </div>
                            {/* <img
                                src="https://placehold.co/500x500/C1E1C1/4A4A4A?text=Personalized+Care"
                                alt="A teacher giving personalized attention to a child"
                                className=" w-full h-auto max-w-md rounded-lg"
                            /> */}
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
};

export default AboutPage;
