import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

  return (
    <div class="min-h-screen bg-slate-50">
      <nav class="bg-slate-800 text-white px-4 shadow-lg">
        <ul class="flex items-center max-w-6xl mx-auto">
          <li class="py-4 px-4">
            <A href="/" class="no-underline hover:text-slate-300 font-medium text-lg">
              📷 Photo Gallery
            </A>
          </li>
          <li class="py-4 px-4 ml-auto">
            <A href="/gallery" class="no-underline hover:text-slate-300">
              Gallery
            </A>
          </li>
          <li class="py-4 px-4">
            <A href="/about" class="no-underline hover:text-slate-300">
              About
            </A>
          </li>
        </ul>
      </nav>

      <main class="max-w-6xl mx-auto px-4 py-12">
        <Suspense>{props.children}</Suspense>
      </main>

      <footer class="bg-slate-800 text-white text-center py-6 mt-12">
        <p class="text-sm text-slate-400">
          © 2024 Personal Photo Gallery. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
