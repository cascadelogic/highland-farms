"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  className?: string;
  aspectRatio?: "video" | "photo" | "wide";
}

const aspectClasses = {
  video: "aspect-video",
  photo: "aspect-[4/3]",
  wide: "aspect-[21/9]",
};

export function ImageCarousel({ images, className, aspectRatio = "video" }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={cn("relative group", className)}>
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%]">
              <div className={cn("relative", aspectClasses[aspectRatio])}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 text-charcoal" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 text-charcoal" />
          </button>
        </>
      )}
    </div>
  );
}
