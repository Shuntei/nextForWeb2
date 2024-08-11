import Image from "next/image";

export function Cover({ children, background }) {
  return (
    <div className="h-screen bg-slate-800 relative min-h-[400px] flex items-center text-white">
      <Image
        alt="Cover"
        src={background}
        fill
        className="mix-blend-soft-light object-cover"
      />
      <dvi className="max-w-5xl z-10">{children}</dvi>
    </div>
  );
}
