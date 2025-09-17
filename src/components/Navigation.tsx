import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/skills", label: t("nav.skills") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/experience", label: t("nav.experience") },
    { to: "/education", label: t("nav.education") },
    { to: "/blog", label: t("nav.blog") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold gradient-text">
            {t("nav.portfolio")}
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link text-sm font-medium transition-colors ${
                    isActive
                      ? "text-tech-blue"
                      : "text-gray-600 dark:text-gray-300 hover:text-tech-blue"
                  }`
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button className="bg-tech-blue hover:bg-tech-purple transition-colors" asChild>
              <Link to="/contact">{t("nav.contactMe")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
