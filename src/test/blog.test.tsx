import { describe, it, expect, beforeAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";

beforeAll(() => {
  if (!("IntersectionObserver" in window)) {
    class MockIntersectionObserver implements IntersectionObserver {
      readonly root: Element | Document | null = null;
      readonly rootMargin: string = "";
      readonly thresholds: ReadonlyArray<number> = [];
      disconnect() {}
      observe() {}
      takeRecords(): IntersectionObserverEntry[] {
        return [];
      }
      unobserve() {}
    }
    Object.defineProperty(window, "IntersectionObserver", {
      writable: true,
      value: MockIntersectionObserver,
    });
  }
});

describe("Navbar & Blog pages", () => {
  it("renders Blog link in top navigation", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const blogLink = screen.getByRole("link", { name: "Blog" });
    expect(blogLink).toHaveAttribute("href", "/blog");
  });

  it("renders featured post and at most 15 recent blog posts with overview links", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/blog"]}>
        <Blog />
      </MemoryRouter>
    );

    expect(screen.getByText("Featured")).toBeInTheDocument();
    expect(screen.getByText("Recent blog posts")).toBeInTheDocument();

    const recentGrid = container.querySelector(".grid");
    expect(recentGrid).not.toBeNull();
    const recentCards = recentGrid!.querySelectorAll("article");
    expect(recentCards.length).toBe(13);
    expect(recentCards.length).toBeLessThanOrEqual(15);

    const firstPostLink = recentCards[0].querySelector('a[href^="/blog/"]');
    expect(firstPostLink).not.toBeNull();
  });

  it("filters posts by site section and renders editorial BlogDetail overview page", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/blog"]}>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: "Pricing" }));
    const recentGrid = container.querySelector(".grid");
    const pricingCards = recentGrid!.querySelectorAll("article");
    expect(pricingCards.length).toBe(1);

    const detailLink = pricingCards[0].querySelector('a[href^="/blog/"]') as HTMLAnchorElement;
    fireEvent.click(detailLink);

    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Written by")).toBeInTheDocument();
    expect(screen.getByText(/Imagine Two Servers With Different Prices/i)).toBeInTheDocument();
  });
});
