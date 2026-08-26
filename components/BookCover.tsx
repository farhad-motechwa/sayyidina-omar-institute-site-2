import React, { useState } from 'react';
import { BookItem } from '../data/booksData';

interface BookCoverProps {
  book: BookItem | {
    title: string;
    subtitle: string;
    badge?: string;
    author?: string;
    bookNumber?: number;
    coverColor?: string;
    coverWrapUrl?: string;
    coverUrl?: string;
    altText?: string;
  };
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showHoverEffect?: boolean;
  useImageWrap?: boolean;
  aspectRatio?: string;
}

export const BookCover: React.FC<BookCoverProps> = ({
  book,
  size = 'md',
  className = '',
  showHoverEffect = true,
  useImageWrap = true,
  aspectRatio
}) => {
  const [imageError, setImageError] = useState(false);
  const coverWrapUrl = 'coverWrapUrl' in book ? book.coverWrapUrl : undefined;
  const coverUrl = 'coverUrl' in book ? book.coverUrl : undefined;
  const altText = ('altText' in book && book.altText)
    ? book.altText
    : `${book.title} by ${'author' in book && book.author ? book.author : 'Farhad Omar'} — book cover`;

  const getBadgeText = () => {
    if ('badge' in book && book.badge) return book.badge;
    if ('bookNumber' in book && book.bookNumber) return `BOOK ${book.bookNumber}`;
    return 'ESSENTIAL READ';
  };

  const badgeText = getBadgeText();
  const authorText = 'author' in book && book.author ? book.author : 'FARHAD OMAR';

  // Determine aspect ratio:
  // For A4 single cover image (e.g. Reclaiming Education), aspect ratio is 210/297 (1:1.414)
  // For standard series books (HYSY30), aspect ratio is 5/8
  const isA4 = 'format' in book && typeof book.format === 'string' && book.format.includes('A4');
  const defaultRatio = isA4 ? '210 / 297' : '5 / 8';
  const currentAspectRatio = aspectRatio || defaultRatio;

  // Size configurations adjusting width
  const sizeClasses = {
    sm: 'w-28 sm:w-36 md:w-40',
    md: 'w-48 sm:w-56 md:w-64',
    lg: 'w-64 sm:w-80 md:w-96',
  }[size];

  // 1. Direct single cover image (front cover)
  if (coverUrl && !imageError) {
    return (
      <div
        className={`relative group rounded-xl overflow-hidden shadow-2xl border border-amber-500/30 transition-all duration-300 bg-slate-950 ${
          showHoverEffect ? 'hover:-translate-y-2 hover:shadow-amber-500/20 hover:border-amber-400/60' : ''
        } ${sizeClasses} ${className}`}
        style={{
          boxShadow: '0 12px 32px -8px rgba(0,0,0,0.8), 0 4px 12px -2px rgba(217, 119, 6, 0.15)',
          aspectRatio: currentAspectRatio
        }}
      >
        <img
          src={coverUrl}
          alt={altText}
          loading="lazy"
          onError={() => setImageError(true)}
          className="w-full h-full block"
        />
        {/* Subtle shine lighting overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-amber-400/5 pointer-events-none z-10"></div>
      </div>
    );
  }

  // 2. Wrap image (5:8 front cover cropped from print wrap)
  if (useImageWrap && coverWrapUrl && !imageError) {
    return (
      <div
        className={`relative group rounded-xl overflow-hidden shadow-2xl border border-amber-500/30 transition-all duration-300 bg-slate-950 ${
          showHoverEffect ? 'hover:-translate-y-2 hover:shadow-amber-500/20 hover:border-amber-400/60' : ''
        } ${sizeClasses} ${className}`}
        style={{
          boxShadow: '0 12px 32px -8px rgba(0,0,0,0.8), 0 4px 12px -2px rgba(217, 119, 6, 0.15)',
          aspectRatio: currentAspectRatio
        }}
      >
        {/* Render right face of the 5:8 wrap image (front cover) */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={coverWrapUrl}
            alt={`${book.title} - Book Cover`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-[200%] max-w-none h-full object-cover object-right"
          />
        </div>

        {/* Book Spine Overlay & Lighting */}
        <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-2.5 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-amber-400/5 pointer-events-none z-10"></div>
      </div>
    );
  }

  return (
    <div
      className={`relative group rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 flex flex-col justify-between p-4 sm:p-6 transition-all duration-300 ${
        showHoverEffect ? 'hover:-translate-y-2 hover:shadow-amber-500/10 hover:border-amber-400/60' : ''
      } ${sizeClasses} ${className}`}
      style={{
        boxShadow: '0 12px 32px -8px rgba(0,0,0,0.8), 0 4px 12px -2px rgba(217, 119, 6, 0.15)',
        aspectRatio: '5 / 8'
      }}
    >
      {/* Book Spine Simulation & Gold Accent Bar */}
      <div className="absolute left-0 top-0 bottom-0 w-2.5 sm:w-3 bg-gradient-to-r from-amber-600/40 via-amber-400/20 to-transparent border-r border-amber-500/30 z-20"></div>

      {/* Subtle Inner Frame Ornament */}
      <div className="absolute inset-2 sm:inset-3 border border-amber-400/20 rounded-lg pointer-events-none z-10"></div>
      <div className="absolute inset-3 sm:inset-4 border border-amber-400/10 rounded-md pointer-events-none z-10"></div>

      {/* Top Section: Institute Header & Book Number Badge */}
      <div className="relative z-20 pl-2 sm:pl-3 space-y-1 sm:space-y-2">
        <div className="text-[9px] sm:text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-amber-400/90 leading-tight">
          SAYYIDINA OMAR INSTITUTE
        </div>
        <div className="inline-block px-2 py-0.5 rounded bg-amber-400/15 border border-amber-400/30 text-[8px] sm:text-[9px] font-bold tracking-widest uppercase text-amber-300">
          {badgeText}
        </div>
      </div>

      {/* Center Section: Main Title & Subtitle */}
      <div className="relative z-20 pl-2 sm:pl-3 my-auto space-y-2 sm:space-y-3">
        <h3 className="font-serif font-extrabold text-white text-base sm:text-xl md:text-2xl leading-tight tracking-tight drop-shadow-md">
          {book.title}
        </h3>
        <p className="font-sans text-[10px] sm:text-xs text-slate-300 font-light leading-snug line-clamp-3">
          {book.subtitle}
        </p>
      </div>

      {/* Bottom Section: Author Name & Decorative Emblem */}
      <div className="relative z-20 pl-2 sm:pl-3 pt-2 border-t border-amber-500/20 flex items-center justify-between">
        <span className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-amber-400">
          {authorText}
        </span>
        <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]"></div>
      </div>

      {/* Subtle Background Lighting Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-amber-400/5 pointer-events-none"></div>
    </div>
  );
};

export default BookCover;
