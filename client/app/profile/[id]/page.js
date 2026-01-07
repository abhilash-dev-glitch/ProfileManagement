'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mockProfiles } from '@/lib/mockData';

export default function ProfileDetails({ params }) {
    // Unwrap params using React.use()
    const { id } = use(params);

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
                const res = await fetch(`${apiUrl}/api/profiles/${id}`);
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setProfile(data);
            } catch (err) {
                console.warn('API fetch failed, using mock data:', err);
                const mock = mockProfiles.find(p => p._id === id);
                setProfile(mock);
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            fetchProfile();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile Not Found</h1>
                <Link href="/" className="text-primary hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            <div className="relative z-10">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 h-60 relative shadow-lg">
                    <div className="absolute top-6 left-6 text-white z-20">
                        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                            <span className="text-lg">←</span>
                            <span className="font-semibold text-sm">Back to InternPedia</span>
                        </Link>
                    </div>

                    {/* Avatar */}
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-2xl relative z-10">
                            <Image
                                src={profile.avatarUrl}
                                alt={profile.name}
                                width={160}
                                height={160}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Profile Info */}
                <div className="pt-20 pb-10 px-4 max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 mb-2">{profile.name}</h1>
                    <p className="text-xl text-orange-600 font-medium">{profile.title}</p>

                    {/* Location Badge */}
                    <div className="inline-flex items-center justify-center gap-1 mt-4 px-3 py-1 bg-white rounded-full shadow-sm border border-gray-100 text-gray-500 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span>{profile.location}</span>
                    </div>

                    <div className="mt-8">
                        <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md">
                            Watch My Resume
                        </button>
                    </div>

                    {/* Bio */}
                    <div className="mt-8 text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                        <span className="absolute top-4 left-4 text-6xl text-orange-100 font-serif -z-10">“</span>
                        <p>{profile.bio}</p>
                    </div>

                    {/* Skills */}
                    <div className="mt-10">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                            <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
                            Skills & Tools
                            <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {profile.skills && profile.skills.map((skill, index) => (
                                <span key={index} className="bg-orange-50 text-orange-700 px-5 py-2 rounded-xl font-semibold text-sm border border-orange-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="mt-12 text-left">
                        <div className="flex justify-between items-center mb-6 px-2">
                            <h3 className="text-2xl font-bold text-gray-800">Case Insights & Key Projects</h3>
                            <Link href="#" className="text-orange-600 font-semibold hover:underline text-sm">View All Projects →</Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {profile.projects && profile.projects.map((project, index) => (
                                <div key={index} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                                        {project.imageUrl && (
                                            <Image
                                                src={project.imageUrl}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-600 transition-colors">{project.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Resume / Video */}
                    <div className="mt-12 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Visual Resume</h3>
                        <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative shadow-2xl ring-4 ring-gray-100 ring-offset-2">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black/10 rounded-full blur-3xl"></div>

                        <h2 className="text-3xl font-bold mb-6 relative z-10">Connect with {profile.name}</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg">
                                Download Resume
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                                Schedule Interview
                            </button>
                        </div>
                        <div className="mt-8 flex flex-col md:flex-row justify-center gap-8 text-sm opacity-90 relative z-10 font-medium">
                            {profile.email && <span className="flex items-center gap-2 justify-center"><span className="bg-white/20 p-1 rounded">✉</span> {profile.email}</span>}
                            {profile.phone && <span className="flex items-center gap-2 justify-center"><span className="bg-white/20 p-1 rounded">📞</span> {profile.phone}</span>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
