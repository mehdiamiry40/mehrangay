import { A } from "@solidjs/router";

export default function Home() {
  return (
    <section class="text-center">
      <div class="bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 p-12 rounded-lg shadow-lg">
        <h2 class="text-4xl font-light mb-4">Welcome to My Photo Gallery</h2>
        <p class="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Explore a curated collection of stunning photographs capturing beautiful moments,
          landscapes, and artistic visions from around the world.
        </p>

        <A
          href="/gallery"
          class="inline-block bg-slate-700 hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 no-underline"
        >
          View Gallery
        </A>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-3xl mb-3">📸</div>
          <h3 class="text-xl font-medium text-slate-700 mb-2">High Quality</h3>
          <p class="text-slate-600">
            Every photo is carefully selected and presented in stunning quality.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-3xl mb-3">🎨</div>
          <h3 class="text-xl font-medium text-slate-700 mb-2">Curated Collection</h3>
          <p class="text-slate-600">
            A thoughtfully assembled gallery showcasing diverse styles and subjects.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-3xl mb-3">✨</div>
          <h3 class="text-xl font-medium text-slate-700 mb-2">Beautiful Display</h3>
          <p class="text-slate-600">
            Experience photos in an elegant, full-screen lightbox viewer.
          </p>
        </div>
      </div>
    </section>
  );
}
