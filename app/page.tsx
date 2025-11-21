import PhotoGrid from "./components/PhotoGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col items-center justify-center py-12 md:py-20 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Capturing Moments
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
          A collection of visual stories told through the lens of minimalism and light.
        </p>
      </section>
      
      <PhotoGrid />
    </div>
  );
}
