import Image from 'next/image';

const PHOTOS = [
  { id: 1, src: 'https://picsum.photos/seed/1/800/1000', alt: 'Photo 1', aspect: 'aspect-[4/5]' },
  { id: 2, src: 'https://picsum.photos/seed/2/800/600', alt: 'Photo 2', aspect: 'aspect-[4/3]' },
  { id: 3, src: 'https://picsum.photos/seed/3/800/1000', alt: 'Photo 3', aspect: 'aspect-[4/5]' },
  { id: 4, src: 'https://picsum.photos/seed/4/800/800', alt: 'Photo 4', aspect: 'aspect-square' },
  { id: 5, src: 'https://picsum.photos/seed/5/800/1000', alt: 'Photo 5', aspect: 'aspect-[4/5]' },
  { id: 6, src: 'https://picsum.photos/seed/6/800/600', alt: 'Photo 6', aspect: 'aspect-[4/3]' },
  { id: 7, src: 'https://picsum.photos/seed/7/800/800', alt: 'Photo 7', aspect: 'aspect-square' },
  { id: 8, src: 'https://picsum.photos/seed/8/800/1000', alt: 'Photo 8', aspect: 'aspect-[4/5]' },
  { id: 9, src: 'https://picsum.photos/seed/9/800/600', alt: 'Photo 9', aspect: 'aspect-[4/3]' },
];

export default function PhotoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PHOTOS.map((photo) => (
        <div key={photo.id} className="group relative overflow-hidden bg-gray-100 dark:bg-neutral-900">
          <div className={`${photo.aspect} relative w-full`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}

