import { createSignal, For } from "solid-js";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const photos: Photo[] = [
  { id: 1, src: "/photos/photo-1.svg", alt: "Mountain Landscape", title: "Mountain Landscape" },
  { id: 2, src: "/photos/photo-2.svg", alt: "Ocean View", title: "Ocean View" },
  { id: 3, src: "/photos/photo-3.svg", alt: "Forest Path", title: "Forest Path" },
  { id: 4, src: "/photos/photo-4.svg", alt: "Abstract Art", title: "Abstract Art" },
  { id: 5, src: "/photos/photo-5.svg", alt: "City Skyline", title: "City Skyline" },
  { id: 6, src: "/photos/photo-6.svg", alt: "Desert Sunset", title: "Desert Sunset" },
  { id: 7, src: "/photos/photo-7.jpg", alt: "Tau Dil Ka Kya Hua", title: "Tau Dil Ka Kya Hua" },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = createSignal<Photo | null>(null);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const current = selectedPhoto();
    if (current) {
      const currentIndex = photos.findIndex(p => p.id === current.id);
      const nextIndex = (currentIndex + 1) % photos.length;
      setSelectedPhoto(photos[nextIndex]);
    }
  };

  const prevPhoto = () => {
    const current = selectedPhoto();
    if (current) {
      const currentIndex = photos.findIndex(p => p.id === current.id);
      const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
      setSelectedPhoto(photos[prevIndex]);
    }
  };

  return (
    <div class="py-8">
      <section class="mb-8">
        <h2 class="text-3xl font-light text-slate-700 mb-4">Photo Gallery</h2>
        <p class="text-slate-600 mb-6">
          A collection of beautiful moments captured through the lens
        </p>
      </section>

      {/* Photo Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <For each={photos}>
          {(photo) => (
            <div
              class="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => openLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.title}
                </span>
              </div>
            </div>
          )}
        </For>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto() && (
        <div
          class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-60"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <button
            class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-60 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
          >
            &#8249;
          </button>

          <button
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-60 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
          >
            &#8250;
          </button>

          <div
            class="max-w-4xl max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto()!.src}
              alt={selectedPhoto()!.alt}
              class="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p class="text-white text-center mt-4 text-xl">
              {selectedPhoto()!.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
