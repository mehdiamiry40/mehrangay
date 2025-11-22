import Image from 'next/image';

const PHOTOS = [
  { id: 1, src: '/IMG_1481.jpg', alt: 'Portfolio Photo 1', aspect: 'aspect-[4/5]' },
  { id: 2, src: '/IMG_1355.PNG', alt: 'Portfolio Photo 2', aspect: 'aspect-[4/5]' },
];

export default function PhotoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {PHOTOS.map((photo, index) => (
        <div 
          key={photo.id} 
          className="group relative overflow-hidden bg-gray-100 dark:bg-neutral-900 animate-fade-in-up"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className={`${photo.aspect} relative w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
      ))}
    </div>
  );
}
