import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
};

type ProjectGalleryProps = {
  images: GalleryImage[];
};

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 ${
            index === 0 ? "lg:col-span-2" : ""
          }`}
        >
          <div className="relative aspect-[16/10]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover object-top transition-transform duration-500 hover:scale-[1.02] ${
                image.className ?? ""
              }`}
              sizes={
                index === 0
                  ? "(max-width: 1024px) 100vw, 1200px"
                  : "(max-width: 1024px) 100vw, 600px"
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}