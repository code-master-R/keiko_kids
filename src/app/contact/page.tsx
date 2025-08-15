"use client"; // This component now uses state and client-side logic

import MotionDiv from '@/components/ui/MotionDiv';
import SectionHeader from '@/components/ui/SectionHeader';
import { theme } from '@/config/theme';
import { Mail, MapPin, PhoneCall } from 'lucide-react';
import React, { useState } from 'react';

const ContactPage = () => {
    // State to manage form submission status
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Something went wrong.');
            }

            setStatus('success');
            (event.target as HTMLFormElement).reset(); // Reset form on success
        } catch (error: unknown) { // FIX: Changed type from 'any' to 'unknown'
            setStatus('error');
            // FIX: Check if the error is an instance of Error before accessing .message
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage('An unexpected error occurred.');
            }
        }
    };

    return (
        <div className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Let's Connect!" subtitle="We're excited to hear from you. Reach out with any questions." />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <MotionDiv className="bg-gradient-to-br from-teal-50 to-orange-50 p-8 rounded-3xl shadow-xl">
                        <h3 className="text-3xl font-bold text-center mb-6" style={{ color: theme.colors.heading }}>Enquiry Form</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="parentName" className="sr-only">Parent&apos;s Name</label>
                                <input id="parentName" type="text" name="parentName" placeholder="Parent's Name" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-400 outline-none" required />
                            </div>
                            <div>
                                <label htmlFor="mobile" className="sr-only">Mobile Number</label>
                                <input id="mobile" type="number" name="mobile" placeholder="Mobile Number" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-400 outline-none" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email Address</label>
                                <input id="email" type="email" name="email" placeholder="Email Address" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-400 outline-none" required />
                            </div>
                            <div>
                                <label htmlFor="childAge" className="sr-only">Child&apos;s Age</label>
                                <select id="childAge" name="childAge" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-400 outline-none bg-white" required>
                                    <option value="1 year" disabled selected>Select Child&apos;s Age</option>
                                    <option value="6 months - 1 year">6 months - 1 year</option>
                                    <option value="1 - 2 years">1 - 2 years</option>
                                    <option value="2 - 3 years">2 - 3 years</option>
                                    <option value="3 - 4 years">3 - 4 years</option>
                                    <option value="4 - 5 years">4 - 5 years</option>
                                    <option value="5 - 6 years">5 - 6 years</option>
                                    <option value="6 - 10 years">6 - 10 years</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="enquiry" className="sr-only">Your Enquiry</label>
                                <textarea id="enquiry" name="enquiry" rows={4} placeholder="Your Enquiry" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-400 outline-none" required></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-4 text-white font-bold text-lg rounded-xl shadow-lg transition-all transform hover:scale-105 disabled:bg-gray-400 disabled:scale-100"
                                style={{ backgroundColor: theme.colors.primary }}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
                            </button>

                            {/* Status Messages */}
                            {status === 'success' && <p className="text-center text-green-600 font-bold mt-4">Thank you! Your enquiry has been sent.</p>}
                            {status === 'error' && <p className="text-center text-red-600 font-bold mt-4">Error: {errorMessage}</p>}
                        </form>
                    </MotionDiv>
                    <MotionDiv direction="right" className="space-y-8">
                        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl"><MapPin className="h-10 w-10 mt-1 flex-shrink-0" style={{ color: theme.colors.primary }} /><div><h4 className="text-2xl font-bold" style={{ color: theme.colors.heading }}>Visit Us</h4><p className="text-lg text-gray-600">Keiko Kids, ShivKamal  Bungalow, vishal nagar , dp road , pune</p></div></div>
                        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl"><PhoneCall className="h-10 w-10 mt-1 flex-shrink-0" style={{ color: theme.colors.primary }} /><div><h4 className="text-2xl font-bold" style={{ color: theme.colors.heading }}>Call Us</h4><p className="text-lg text-gray-600">+91 90216 97977, +91 77000 55694</p></div></div>
                        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl"><Mail className="h-10 w-10 mt-1 flex-shrink-0" style={{ color: theme.colors.primary }} /><div><h4 className="text-2xl font-bold" style={{ color: theme.colors.heading }}>Email Us</h4><p className="text-lg text-gray-600">keikokidspune@gmail.com</p></div></div>
                        <div className="mt-8 h-64 bg-gray-200 rounded-2xl shadow-md overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.7173043616417!2d73.77838347496463!3d18.586779482519674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90e572100db%3A0xe0bc9fecf964d9a1!2sShivKamal%20Bungalow!5e0!3m2!1sen!2sin!4v1753765842372!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Google Map of Pune"
                            ></iframe>
                        </div>
                    </MotionDiv>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
