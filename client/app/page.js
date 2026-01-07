'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProfileCard from '../components/ProfileCard';
import { mockProfiles } from '../lib/mockData';

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfiles() {
      try {
        // Try to fetch from API
        const res = await fetch('http://localhost:5000/api/profiles');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setProfiles(data);
      } catch (err) {
        console.warn('API fetch failed, using mock data:', err);
        setProfiles(mockProfiles);
      } finally {
        setLoading(false);
      }
    }

    fetchProfiles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto">
        {/* Header / Hero */}
        <header className="mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 tracking-tight leading-tight mb-2">InternPedia</h1>
            <p className="text-gray-500 font-medium text-lg">Find your next career opportunity</p>
          </div>

          <div className="relative h-16 w-48 transition-transform hover:scale-105 duration-300">
            <Image
              src="/aacsb-logo.png"
              alt="AACSB Accredited"
              fill
              className="object-contain"
            />
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <ProfileCard key={profile._id} profile={profile} />
          ))}
        </div>
      </div>
    </main>
  );
}
