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

        setSearchResults(results.slice(0, 5)); // Limit to 5 results
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
        setIsAutoPlaying(false);
        if (direction === 'next') nextSlide();
        else prevSlide();
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
                    {/* Lightened Overlays for better image visibility */}
                    <div className="absolute inset-0 bg-black/25 bg-gradient-to-b from-black/50 via-black/10 to-black/50" />
                </div>
            ))}

            {/* Content Container - Centered but moved up */}
            <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center pb-32 gap-16">

                {/* Main Content */}
                <div className="max-w-5xl flex flex-col items-center gap-4">
                    <h1 className="font-extrabold leading-tight tracking-tight drop-shadow-2xl" style={{ color: '#FFFFFF', fontSize: '56px', maxWidth: '800px' }}>
                        {activeSlide.headline.split(' ').slice(0, -1).join(' ')} <span style={{ color: '#ff6b00' }}>{activeSlide.headline.split(' ').slice(-1)}</span>
                    </h1>

                    <p className="text-gray-100 leading-relaxed max-w-2xl drop-shadow-lg font-bold" style={{ fontSize: '21.6px' }}>
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
                                placeholder="Search security services, assessments, or compliance..."
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

                        {/* Search Results Dropdown */}
                        {showResults && searchResults.length > 0 && (
                            <div
                                className="absolute top-full left-0 right-0 z-50 text-left"
                                style={{
                                    marginTop: '12px',
                                    animation: 'dropdownFadeIn 0.2s ease-out',
                                }}
                            >
                                <div
                                    className="rounded-2xl"
                                    style={{
                                        background: '#ffffff',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                                    }}
                                >
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
                                                    <span className="font-bold text-gray-800 text-base group-hover:text-orange-600 transition-colors">
                                                        {result.title}
                                                    </span>
                                                </Link>
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

                    {/* Explore Tags Section - Exact Zoomed-In Image Match UI */}
                    <div className="flex items-center gap-3 mt-6 flex-wrap justify-center">
                        <span className="text-white/70 text-sm font-medium">Explore:</span>
                        <div className="flex gap-2 flex-wrap justify-center">
                            {[
                                "Web App Security",
                                "API Security",
                                "GDPR Consulting",
                                "PCI DSS Compliance",
                                "Malware Analysis"
                            ].map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => handleSearch(tag)}
                                    className="rounded-full border-2 border-[#FF6B00] text-[15px] font-semibold text-white transition-all hover:scale-105 active:scale-95"
                                    style={{
                                        padding: '4px 14px',
                                        background: 'rgba(255, 107, 0, 0.25)',
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)',
                                        boxShadow: '0 4px 12px rgba(255, 107, 0, 0.2)',
                                        textShadow: '0 1px 3px rgba(0,0,0,0.4)',
                                        letterSpacing: '0.02em'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#FF6B00';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 107, 0, 0.25)';
                                    }}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>





                </div>
            </div>

            {/* Navigation Arrows */}
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
        </section>
    );
}
