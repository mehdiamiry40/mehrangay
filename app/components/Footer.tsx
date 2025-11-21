export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-100 dark:border-neutral-800 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}

