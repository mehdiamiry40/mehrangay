import { A } from '@solidjs/router';

export default function Home() {
  return (
    <section class="max-w-4xl mx-auto py-16 text-center">
      <h1 class="text-5xl font-bold text-slate-800 mb-6">Welcome to Our Photo Gallery</h1>
      <p class="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
        Discover a curated collection of stunning photographs capturing moments of beauty,
        nature, and life from around the world.
      </p>

      <A
        href="/gallery"
        class="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        View Gallery
      </A>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-3xl mb-3">📸</div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Beautiful Photos</h3>
          <p class="text-slate-600">Explore a diverse collection of high-quality photographs</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-3xl mb-3">🔍</div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Full Screen View</h3>
          <p class="text-slate-600">Click any photo to view it in stunning detail</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-3xl mb-3">🎨</div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Responsive Design</h3>
          <p class="text-slate-600">Enjoy the gallery on any device, anywhere</p>
        </div>
      </div>
    </section>
  );
}
