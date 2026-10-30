import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-paleBg texture-vertical-glass text-center px-4 space-y-6 text-[#172B3A]">
      <div className="w-16 h-16 rounded-2xl bg-white border border-[#55C7F2]/40 text-[#FF3D9A] flex items-center justify-center shadow-lg shadow-[#55C7F2]/15">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-[#FF3D9A] text-xs font-mono uppercase tracking-widest font-bold">
          404 ERROR // SILHOUETTE NOT FOUND
        </span>
        <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-[#172B3A]">
          OUT OF ROTATION
        </h1>
        <p className="text-xs sm:text-sm font-sans text-[#4A667A] max-w-md mx-auto">
          The requested shoe, collection, or archive vault could not be located in our active drops.
        </p>
      </div>

      <Link
        href="/shop"
        className="btn-hot-pink inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider shadow-xl shadow-[#FF3D9A]/20"
      >
        <span>EXPLORE OFFICIAL CATALOGUE</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
