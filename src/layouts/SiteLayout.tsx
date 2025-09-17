import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SiteLayout() {
  return (
    <>
      <Navigation />
      <main className="min-h-[60vh]">
        <Outlet /> {/* Ici s'affiche le contenu de chaque page */}
      </main>
      <Footer />
    </>
  );
}
