'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { categories } from '../data/categories';

interface SearchResult {
    type: 'category' | 'service';
    title: string;
    description: string;
    href: string;
    categoryLabel?: string;
}

export default function HeroSlider() {
    const slides = Object.values(categories);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // Search function
    const handleSearch = useCallback((query: string) => {
        setSearchQuery(query);
        if (!query.trim()) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const results: SearchResult[] = [];

        // Search through services only
        Object.values(categories).forEach((category) => {

            // Check services within each category
            category.services.forEach((service) => {
                if (
                    service.title.toLowerCase().includes(lowerQuery) ||
                    service.description.toLowerCase().includes(lowerQuery) ||
                    service.badges?.some(badge => badge.toLowerCase().includes(lowerQuery))
                ) {
                    results.push({
                        type: 'service',
                        title: service.title,
                        description: service.description,
                        href: service.href,
                        categoryLabel: category.label,
                    });
                }
            });
        });

        setSearchResults(results.slice(0, 5)); // Limit to 5 results (no scrollbar)
        setShowResults(results.length > 0);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                nextSlide();
            }, 6000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const handleManualNavigation = (direction: 'next' | 'prev') => {
        setIsAutoPlaying(false); // Pause auto-play on interaction
        if (direction === 'next') nextSlide();
        else prevSlide();
        // Resume auto-play after 10 seconds of inactivity if desired, 
        // or just leave it paused. Let's restart it after a delay.
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const activeSlide = slides[currentSlide];

    return (
        <section className="relative h-[650px] w-full overflow-hidden text-white">
            {/* Background Images with Transitions */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.label}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/* Stronger Dark Overlay for better text visibility */}
                    <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />
                </div>
            ))}

            {/* Content Container - Centered but moved up */}
            <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center pb-32 gap-16">

                {/* Main Content */}
                <div className="max-w-5xl flex flex-col items-center gap-10">
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-2xl !text-white" style={{ color: 'white', whiteSpace: 'nowrap' }}>
                        {activeSlide.headline.split(' ').slice(0, -1).join(' ')} <span className="text-orange-500">{activeSlide.headline.split(' ').slice(-1)}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-lg font-bold">
                        {activeSlide.description}
                    </p>

                    {/* Search Bar - Fixed size with dropdown */}
                    <div
                        ref={searchRef}
                        className="relative"
                        style={{
                            width: '650px',
                            maxWidth: '90vw',
                        }}
                    >
                        <div
                            className="bg-white rounded-full flex items-center shadow-xl transition-all duration-300 hover:shadow-2xl"
                            style={{
                                padding: '6px 6px 6px 24px',
                                border: '3px solid rgba(255, 125, 30, 0.15)',
                            }}
                        >
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                onFocus={() => searchQuery && setShowResults(true)}
                                placeholder="Search courses, certifications, or topics..."
                                className="flex-1 text-gray-600 text-base outline-none placeholder:text-gray-400 bg-transparent font-normal"
                                style={{ minWidth: 0 }}
                            />
                            <button
                                className="bg-[#FF7D1E] hover:bg-[#e06510] text-white font-semibold rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0"
                                style={{
                                    padding: '12px 32px',
                                    fontSize: '15px',
                                }}
                            >
                                Search
                            </button>
                        </div>

                        {/* Search Results Dropdown - Professional UI/UX Design */}
                        {showResults && searchResults.length > 0 && (
                            <div
                                className="absolute top-full left-0 right-0 z-50"
                                style={{
                                    marginTop: '12px',
                                    animation: 'dropdownFadeIn 0.2s ease-out',
                                }}
                            >
                                {/* Dropdown Container */}
                                <div
                                    className="rounded-2xl"
                                    style={{
                                        background: '#ffffff',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                                    }}
                                >
                                    {/* Results List - Scrollable with subtle scrollbar */}
                                    <div
                                        className="py-4 px-4 custom-scrollbar"
                                        style={{
                                            maxHeight: '340px',
                                            overflowY: 'auto',
                                        }}
                                    >
                                        {searchResults.map((result, index) => (
                                            <div key={index}>
                                                <Link
                                                    href={result.href}
                                                    onClick={() => {
                                                        setShowResults(false);
                                                        setSearchQuery('');
                                                    }}
                                                    className="group flex items-center justify-center rounded-lg transition-all duration-200"
                                                    style={{
                                                        minHeight: '52px',
                                                        padding: '14px 16px',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = 'linear-gradient(90deg, #fff7ed 0%, #fffbf7 100%)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = 'transparent';
                                                    }}
                                                >
                                                    {/* Service Title - Bold, Centered */}
                                                    <span className="font-bold text-gray-800 text-base group-hover:text-orange-600 transition-colors">
                                                        {result.title}
                                                    </span>
                                                </Link>
                                                {/* Separator line between items */}
                                                {index < searchResults.length - 1 && (
                                                    <div
                                                        className="mx-4 my-2"
                                                        style={{
                                                            height: '1px',
                                                            background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.08) 80%, transparent 100%)',
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Stats Row - Centered and compact */}
                <div className="w-full max-w-4xl border-t border-white/20 pt-10">
                    <div className="grid grid-cols-3 gap-8 md:gap-16">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 drop-shadow-md">{activeSlide.industriesCount || '500+'}</div>
                            <div className="text-xs text-gray-200 font-semibold uppercase tracking-widest mt-2">Clients Secured</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 drop-shadow-md">100%</div>
                            <div className="text-xs text-gray-200 font-semibold uppercase tracking-widest mt-2">Compliance</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 drop-shadow-md">24/7</div>
                            <div className="text-xs text-gray-200 font-semibold uppercase tracking-widest mt-2">Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows - Larger and better positioned */}
            <button
                onClick={() => handleManualNavigation('prev')}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-orange-600 text-white p-4 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 group hidden md:flex"
                aria-label="Previous Slide"
            >
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
                onClick={() => handleManualNavigation('next')}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-orange-600 text-white p-4 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 group hidden md:flex"
                aria-label="Next Slide"
            >
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsAutoPlaying(false);
                            setCurrentSlide(index);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${index === currentSlide ? 'w-10 bg-orange-500' : 'w-2 bg-white/40 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
