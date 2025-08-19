import { theme } from '@/config/theme';
import { mockData } from "@/data/mockData";
import { Mail, MapPin, Phone } from 'lucide-react';
import localFont from 'next/font/local';
import Link from 'next/link';


const hiddenCocktails = localFont({
    src: '../fonts/HiddencocktailsItalic-nRXdY.ttf', // Adjust path if your font file is named differently
});

const Footer = () => {
    return (
        <footer style={{ backgroundColor: theme.colors.heading }} className="text-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className={`text-5xl font-bold ${hiddenCocktails.className}`} style={{ color: theme.colors.primary }}>KEIKO KIDS</h3>
                        <p className="mt-4 text-gray-300">A warm and caring place where children grow through fun learning, creative play, and gentle support. We offer a safe and happy space that helps every child learn, explore, and be themselves.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/about" className="hover:text-orange-400">About Us</Link></li>
                            <li><Link href="/programs" className="hover:text-orange-400">Programs</Link></li>
                            {/* <li><Link href="/admissions" className="hover:text-orange-400">Admissions</Link></li> */}
                            <li><Link href="/contact" className="hover:text-orange-400">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start"><MapPin className="h-5 w-5 mt-1 mr-2 flex-shrink-0 text-orange-400" /><span>Keiko Kids, ShivKamal  Bungalow, Vishal nagar , DP road , Pune</span></li>
                            <li className="flex items-start"><Mail className="h-5 w-5 mt-1 mr-2 flex-shrink-0 text-orange-400" /><span>keikokidspune@gmail.com</span></li>
                            <li className="flex items-start"><Phone className="h-5 w-5 mt-1 mr-2 flex-shrink-0 text-orange-400" /><span>+91 9021697977, +91 7700055694</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200 tracking-wider uppercase">Follow Us</h3>
                        {/* You can add social media links here */}
                        <div className="flex gap-4">
                            {mockData.socialMedia.map((media, index) => (
                                <a key={index} href={media.link}>
                                    <img
                                        src={media.icon}
                                        alt={media.alt}
                                        className="w-13 h-13 hover:scale-110"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Keiko Kids. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
