import Image from 'next/image';

const PHOTOS = [
  { id: 1, src: '/c51142e3-7251-48ff-919a-d11ababc4159.jpg', alt: 'Portfolio Photo 1', aspect: 'aspect-[4/5]' },
  { id: 2, src: '/IMG_1355.PNG', alt: 'Portfolio Photo 2', aspect: 'aspect-[4/5]' },
  { id: 3, src: '/IMG_1480.PNG', alt: 'Portfolio Photo 3', aspect: 'aspect-[4/5]' },
  { id: 4, src: '/IMG_1481.jpg', alt: 'Portfolio Photo 4', aspect: 'aspect-[4/5]' },
  { id: 5, src: '/IMG_1508.PNG', alt: 'Portfolio Photo 5', aspect: 'aspect-[4/5]' },
  { id: 6, src: '/IMG_1590.PNG', alt: 'Portfolio Photo 6', aspect: 'aspect-[4/5]' },
  { id: 7, src: '/IMG_1744.PNG', alt: 'Portfolio Photo 7', aspect: 'aspect-[4/5]' },
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
