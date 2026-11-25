import React, { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  beforeLabel = 'BEFORE — ARRIVAL',
  afterLabel = 'AFTER — RESTORED',
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);

  return (
    <div className="space-y-4">
      <div
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#131311] border border-[#2B2B27] select-none touch-pan-y"
        data-testid="before-after-slider"
      >
        {/* After Image */}
        <SafeImage
          src={afterImage}
          alt={afterAlt}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Before Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <SafeImage
            src={beforeImage}
            alt={beforeAlt}
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Bottom contrast scrim */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
        />

        {/* Divider & Mechanical Red-Orange Drag Handle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-[2px] bg-[#F3F1EC]/90"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-[#0B0B0A]/95 border border-[#D94E2A] text-[#F3F1EC] flex items-center justify-center shadow-lg">
            <MoveHorizontal className="w-4 h-4 text-[#D94E2A]" />
          </div>
        </div>

        {/* Editorial Corner Labels */}
        <div className="pointer-events-none absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#F3F1EC]">
            {beforeLabel}
          </span>
        </div>
        <div className="pointer-events-none absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 text-right">
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#F3F1EC]">
            {afterLabel}
          </span>
        </div>

        {/* Touch & Keyboard Range Overlay */}
        <input
          type="range"
          min={5}
          max={95}
          value={position}
          aria-label="Compare before and after motorcycle restoration"
          aria-valuetext={`${position}% before restoration visible`}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="comparison-range absolute inset-0 w-full h-full z-20 opacity-0 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-[#D94E2A]"
        />
      </div>

      {/* Tactile Quick-Jump Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#A19E97]">
        <p className="font-mono tracking-wide">
          Slide to compare restoration ·{' '}
          <span className="tabular-nums text-[#F3F1EC]">
            {position}% / {100 - position}%
          </span>
        </p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setPosition(88)}
            className="underline-offset-4 hover:underline hover:text-[#F3F1EC] transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1.5"
          >
            Focus Before
          </button>
          <span aria-hidden="true">·</span>
          <button
            type="button"
            onClick={() => setPosition(50)}
            className="underline-offset-4 hover:underline hover:text-[#F3F1EC] transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1.5"
          >
            Split 50/50
          </button>
          <span aria-hidden="true">·</span>
          <button
            type="button"
            onClick={() => setPosition(12)}
            className="underline-offset-4 hover:underline hover:text-[#D94E2A] transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1.5"
          >
            Focus After
          </button>
        </div>
      </div>
    </div>
  );
}
