import Image from 'next/image';

const PHOTOS = [
  { id: 1, src: '/IMG_1481.jpg', alt: 'Portfolio Photo 1', aspect: 'aspect-[4/5]' },
  { id: 2, src: '/IMG_1355.PNG', alt: 'Portfolio Photo 2', aspect: 'aspect-[4/5]' },
];

export default function PhotoGrid() {
  return (
    <div className="w-full grid grid-cols-1 gap-6">
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
