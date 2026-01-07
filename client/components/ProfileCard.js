import Link from 'next/link';
import Image from 'next/image';

export default function ProfileCard({ profile }) {
    return (
        <Link href={`/profile/${profile._id}`} className="block group h-full">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                {/* Gradient Header */}
                <div className="h-28 bg-gradient-to-r from-orange-500 to-red-600 relative">
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white shadow-md">
                            <Image
                                src={profile.avatarUrl}
                                alt={profile.name}
                                width={96}
                                height={96}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="pt-16 pb-8 px-6 text-center flex-grow flex flex-col items-center">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">{profile.name}</h3>
                    <p className="text-sm font-medium text-orange-500 mb-3">{profile.title}</p>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-gray-400 text-xs mb-4">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span>{profile.location}</span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-3 mb-6 leading-relaxed">{profile.bio}</p>

                    {/* Skills Tags */}
                    <div className="mt-auto flex flex-wrap justify-center gap-2 mb-6">
                        {profile.skills?.slice(0, 3).map((skill, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] font-semibold uppercase tracking-wider rounded-md border border-gray-200">
                                {skill}
                            </span>
                        ))}
                        {profile.skills?.length > 3 && (
                            <span className="px-2 py-1 text-gray-400 text-[10px] font-semibold">+ {profile.skills.length - 3}</span>
                        )}
                    </div>

                    <div className="w-full">
                        <span className="block w-full py-2 bg-orange-50 text-orange-600 text-sm font-bold rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-all">
                            View Profile
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
