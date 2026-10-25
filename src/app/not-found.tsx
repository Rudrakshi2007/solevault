import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-obsidian text-center px-4 space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-charcoal border border-charcoal-border text-lime flex items-center justify-center">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-lime text-xs font-mono uppercase tracking-widest font-bold">
          404 ERROR // SILHOUETTE NOT FOUND
        </span>
        <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-ivory">
          OUT OF ROTATION
        </h1>
        <p className="text-xs sm:text-sm font-mono text-mutedGrey max-w-md mx-auto">
          The requested shoe, collection, or archive vault could not be located in our active drops.
        </p>
      </div>

      <Link
        href="/shop"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-lime text-obsidian text-xs font-mono font-bold uppercase tracking-wider hover:bg-lime-hover transition-colors shadow-lg shadow-lime/20"
      >
        <span>EXPLORE OFFICIAL CATALOGUE</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
