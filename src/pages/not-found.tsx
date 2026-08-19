import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cream px-4">
      <div className="w-full max-w-md bg-white border border-gray-100 p-8 md:p-10 shadow-sm text-center">
        
        <div className="w-14 h-14 bg-red-50 border border-red-100 flex items-center justify-center text-accent rounded-full mx-auto mb-6">
          <AlertCircle className="w-7 h-7" />
        </div>

        <h1 className="text-2xl md:text-3xl font-serif font-black uppercase text-primary mb-2">
          404 Page Not Found
        </h1>
        
        <p className="mt-4 text-sm text-gray-500 font-light leading-relaxed mb-8">
          The page you are looking for does not exist, or has been relocated to another address.
        </p>

        <Link href="/">
          <button className="px-8 py-3.5 bg-primary hover:bg-accent text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer">
            GO BACK HOME
          </button>
        </Link>

      </div>
    </div>
  );
}
