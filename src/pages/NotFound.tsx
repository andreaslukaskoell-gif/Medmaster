import { Link } from "react-router-dom";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4 hero-orbs">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-6xl font-extrabold text-gray-200 dark:text-gray-700 mb-4">404</p>
        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Seite nicht gefunden</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-[var(--accent)] hover:bg-[var(--accent)] text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
