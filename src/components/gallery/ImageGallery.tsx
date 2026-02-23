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
          className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gradient-to-br from-cream to-cream-dark"
        >
          <div className="absolute inset-0 flex items-center justify-center text-xs text-muted font-sans p-2 text-center">
            {image.alt}
          </div>
        </div>
      ))}
    </div>
  );
}
