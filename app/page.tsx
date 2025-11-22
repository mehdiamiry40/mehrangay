import PhotoGrid from "./components/PhotoGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col items-center justify-center py-12 md:py-20 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
          MEHRAN IS GAY
        </h1>
      </section>
      
      <div className="flex justify-center px-6">
        <div className="w-full max-w-6xl">
          <PhotoGrid />
        </div>
      </div>
    </div>
  );
}
