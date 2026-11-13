import { describe, it, expect, beforeAll, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "@/pages/Contact";
import api from "@/lib/api";

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

describe("Contact page", () => {
  it("renders contact details, form, and map fallback cleanly even if map API fails", async () => {
    const getMapSpy = vi.spyOn(api, "getMapPin").mockRejectedValueOnce(new Error("Network error"));

    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <Contact />
      </MemoryRouter>
    );

    expect(screen.getByText("Open Protocol")).toBeInTheDocument();
    expect(screen.getByText("help@cognivevex.com")).toBeInTheDocument();
    expect(screen.getByText("90 Broad St, New York, NY 10004")).toBeInTheDocument();
    expect(screen.getByLabelText("Entity Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Frequency Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Information Packet")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Initialize Uplink/i })).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTitle("Vexon Audio AI Node Location")).toBeInTheDocument();
    });

    getMapSpy.mockRestore();
  });
});
