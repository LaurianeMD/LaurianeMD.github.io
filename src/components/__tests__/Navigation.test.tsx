import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "../Navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const renderNav = (route = "/") =>
  render(
    <ThemeProvider>
      <LanguageProvider>
        <MemoryRouter initialEntries={[route]}>
          <Navigation />
        </MemoryRouter>
      </LanguageProvider>
    </ThemeProvider>
  );

describe("Navigation header — responsive heights", () => {
  beforeEach(() => cleanup());

  it("renders a fixed primary nav with strict h-16 lg:h-20 height row", () => {
    const { container } = renderNav();
    const nav = container.querySelector('nav[aria-label="Primary"]');
    expect(nav).toBeTruthy();
    expect(nav?.className).toMatch(/fixed/);
    expect(nav?.className).toMatch(/top-0/);

    // Inner row carries the height tokens
    const row = nav?.querySelector("div > div");
    expect(row?.className).toMatch(/\bh-16\b/);
    expect(row?.className).toMatch(/\blg:h-20\b/);
  });

  it("keeps height classes after scroll (no layout shift on scroll state)", () => {
    const { container } = renderNav();
    const rowBefore = container
      .querySelector('nav[aria-label="Primary"] > div > div')!
      .className;

    // Simulate scroll
    Object.defineProperty(window, "scrollY", { value: 200, writable: true });
    fireEvent.scroll(window);

    const rowAfter = container
      .querySelector('nav[aria-label="Primary"] > div > div')!
      .className;

    expect(rowAfter).toMatch(/\bh-16\b/);
    expect(rowAfter).toMatch(/\blg:h-20\b/);
    // Heights must not change between scroll states
    const heightTokensBefore = rowBefore.match(/h-16|lg:h-20/g);
    const heightTokensAfter = rowAfter.match(/h-16|lg:h-20/g);
    expect(heightTokensAfter).toEqual(heightTokensBefore);
  });

  it("exposes burger button on mobile with proper a11y attributes", () => {
    renderNav();
    const burger = screen.getByRole("button", { name: /open menu|close menu/i });
    expect(burger).toHaveAttribute("aria-expanded", "false");
    expect(burger.className).toMatch(/lg:hidden/);
    fireEvent.click(burger);
    expect(burger).toHaveAttribute("aria-expanded", "true");
  });

  it("mobile menu panel is offset to match the header height (top-16 lg:top-20)", () => {
    renderNav();
    const burger = screen.getByRole("button", { name: /open menu/i });
    fireEvent.click(burger);
    const dialog = screen.getByRole("dialog");
    expect(dialog.className).toMatch(/\btop-16\b/);
    expect(dialog.className).toMatch(/\blg:top-20\b/);
  });

  it("renders identical header markup across multiple routes", () => {
    const routes = ["/", "/about", "/projects", "/blog", "/publications", "/contact"];
    const heightSignatures = routes.map((r) => {
      cleanup();
      const { container } = renderNav(r);
      const row = container.querySelector(
        'nav[aria-label="Primary"] > div > div'
      )!;
      return (row.className.match(/h-16|lg:h-20/g) || []).join("|");
    });
    // All routes must yield the same height token signature
    expect(new Set(heightSignatures).size).toBe(1);
    expect(heightSignatures[0]).toBe("h-16|lg:h-20");
  });

  it("Vol. 04 meta is hidden below xl to prevent overlap with nav links", () => {
    renderNav();
    const meta = screen.getByText(/Vol\. 04/);
    expect(meta.className).toMatch(/hidden/);
    expect(meta.className).toMatch(/xl:inline/);
  });
});
