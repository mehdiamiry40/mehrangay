import PhotoGrid from "./components/PhotoGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col items-center justify-center py-16 md:py-24 text-center space-y-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase select-none">
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
