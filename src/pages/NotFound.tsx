import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const isFr = language === "fr";

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 sm:px-10 lg:px-16 py-24">
      <div className="container-width w-full grid lg:grid-cols-12 gap-x-8 gap-y-12 items-end">
        {/* Sidebar — section meta */}
        <div className="lg:col-span-4 space-y-2">
          <p className="meta-label text-muted-foreground">§ 404</p>
          <p className="meta-label text-muted-foreground">
            {isFr ? "Page introuvable" : "Page not found"}
          </p>
          <div className="h-px w-12 bg-border mt-4" />
        </div>

        {/* Main content */}
        <div className="lg:col-span-8 space-y-10">
          <h1 className="font-display font-medium text-foreground tracking-tight leading-[0.85] text-[7rem] sm:text-[10rem] lg:text-[14rem]">
            <span className="italic font-light">4</span>0
            <span className="italic font-light">4</span>
          </h1>

          <p className="font-display text-2xl sm:text-3xl text-foreground italic max-w-xl leading-snug">
            {isFr
              ? "Cette page n’existe pas — ou n’a jamais existé."
              : "This page does not exist — or never did."}
          </p>

          <div className="flex items-center gap-3 meta-label text-muted-foreground">
            <span>{isFr ? "Chemin demandé" : "Requested path"}</span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>
          <p className="font-mono text-sm text-foreground/80 break-all border border-border bg-muted/30 px-4 py-3">
            {location.pathname}
          </p>

          {/* Action buttons — design-system tokens only */}
          <div className="flex flex-col sm:flex-row gap-px bg-border border border-border max-w-2xl">
            <Link
              to="/"
              className="group flex-1 flex items-center justify-between bg-background hover:bg-foreground hover:text-background px-6 py-5 transition-colors focus-visible:bg-foreground focus-visible:text-background"
            >
              <span className="flex items-center gap-3">
                <Home className="w-4 h-4" />
                <span className="font-display text-xl">
                  {isFr ? "Retour à l’accueil" : "Return home"}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="group flex-1 flex items-center justify-between bg-background hover:bg-foreground hover:text-background px-6 py-5 transition-colors focus-visible:bg-foreground focus-visible:text-background"
            >
              <span className="flex items-center gap-3">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="font-display text-xl">
                  {isFr ? "Page précédente" : "Go back"}
                </span>
              </span>
              <span aria-hidden="true">↩</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
