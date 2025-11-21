import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-12 md:py-20 space-y-12">
      <div className="relative w-full aspect-[3/2] md:aspect-[2/1] bg-gray-100 dark:bg-neutral-900 overflow-hidden rounded-sm">
        <Image
          src="https://picsum.photos/seed/photographer/1200/800"
          alt="Photographer"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">About Me</h1>
        <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            Hello, I'm a photographer based in [City]. My work focuses on capturing the subtle beauty in everyday moments.
            I believe in the power of minimalism to tell compelling stories, stripping away the unnecessary to reveal the essence of the subject.
          </p>
          <p>
            With over 5 years of experience behind the lens, I've had the privilege of documenting weddings, events, and landscapes across the globe.
            My style is natural, candid, and light-driven.
          </p>
        </div>
      </div>

      <div className="pt-12 border-t border-gray-100 dark:border-neutral-800">
        <h2 className="text-2xl font-bold tracking-tighter mb-6">Get in Touch</h2>
        <div className="space-y-2 text-gray-600 dark:text-gray-400">
          <p>Email: hello@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Instagram: @portfolio</p>
        </div>
      </div>
    </div>
  );
}

