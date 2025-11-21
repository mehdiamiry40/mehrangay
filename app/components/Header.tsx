import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity uppercase">
          MEHRAN IS GAY
        </Link>
        
        <nav className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
        </nav>
      </div>
    </header>
  );
}

