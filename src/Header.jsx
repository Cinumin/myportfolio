import "tailwindcss";
export function Header() {
  return (
    <header 
      className="w-full h-64 relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://cdn.openart.ai/stable_diffusion/848d7f02b60a65aee436379648660e715a640e8f_2000x2000.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Title text */}
      <h1 className="relative z-10 text-5xl font-bold text-white text-center px-4 drop-shadow-lg">
        Blooming Moments
      </h1>
    </header>
  );
}