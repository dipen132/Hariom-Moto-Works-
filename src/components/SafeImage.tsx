import React, { useState } from 'react';
import { Wrench } from 'lucide-react';

interface SafeImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  fallbackTitle?: string;
}

export function SafeImage({
  src,
  alt,
  fallbackTitle,
  className = '',
  loading = 'lazy',
  ...rest
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#131311] border border-[#2B2B27] text-[#A19E97] p-6 text-center ${className}`}
      >
        <Wrench className="w-6 h-6 mb-3 text-[#D94E2A]" aria-hidden="true" />
        <span className="font-display text-lg uppercase tracking-wider text-[#F3F1EC]">
          {fallbackTitle || 'HARIOM MOTO WORKS'}
        </span>
        <span className="mt-1 text-xs text-[#A19E97] max-w-xs">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}
