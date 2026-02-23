import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ImageGallery({ images, columns = 3, className }: ImageGalleryProps) {
  const colClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-4", colClasses[columns], className)}>
      {images.map((image, i) => (
        <div
          key={i}
          className="relative aspect-[4/3] overflow-hidden rounded-sm"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${Math.round(100 / columns)}vw`}
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
