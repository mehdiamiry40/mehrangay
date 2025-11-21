import { Component, createSignal, Show, For } from 'solid-js';

interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
}

const photos: Photo[] = [
  { id: 1, src: '/images/photo1.svg', title: 'Mountain View', description: 'Majestic mountain landscape at sunrise' },
  { id: 2, src: '/images/photo2.svg', title: 'Ocean Sunset', description: 'Beautiful sunset over calm ocean waters' },
  { id: 3, src: '/images/photo3.svg', title: 'Forest Path', description: 'A serene path through lush green forest' },
  { id: 4, src: '/images/photo4.svg', title: 'Desert Dunes', description: 'Golden sand dunes in the evening light' },
  { id: 5, src: '/images/photo5.svg', title: 'City Lights', description: 'Urban skyline illuminated at night' },
  { id: 6, src: '/images/photo6.svg', title: 'Autumn Colors', description: 'Vibrant fall foliage in the countryside' },
];

const Gallery: Component = () => {
  const [selectedPhoto, setSelectedPhoto] = createSignal<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center mb-8 text-slate-800">Photo Gallery</h1>
      <p class="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
        Explore our collection of beautiful photographs. Click on any image to view it in full screen.
      </p>

      {/* Photo Grid */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <For each={photos}>
          {(photo) => (
            <div
              class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
              onClick={() => openModal(photo)}
            >
              <div class="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-slate-800 mb-1">{photo.title}</h3>
                <p class="text-sm text-slate-600">{photo.description}</p>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span class="text-white font-semibold">View Full Size</span>
              </div>
            </div>
          )}
        </For>
      </div>

      {/* Modal */}
      <Show when={selectedPhoto()}>
        <div
          class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <button
            class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            onClick={closeModal}
            aria-label="Close modal"
          >
            &times;
          </button>
          <div class="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPhoto()!.src}
              alt={selectedPhoto()!.title}
              class="w-full h-auto rounded-lg shadow-2xl"
            />
            <div class="mt-4 text-center">
              <h2 class="text-2xl font-bold text-white mb-2">{selectedPhoto()!.title}</h2>
              <p class="text-gray-300">{selectedPhoto()!.description}</p>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Gallery;
