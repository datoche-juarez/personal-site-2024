import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";

describe("NavBar", () => {
  beforeEach(() => {
    // Ensure window size is considered "desktop" unless testing mobile behavior
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024, // Desktop width
    });
  });

  it("renders navigation links", () => {
    render(<NavBar />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/Resume/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it("renders correct href attributes", () => {
    render(<NavBar />);
    expect(screen.getByText(/About/i).closest("a")).toHaveAttribute(
      "href",
      "#about"
    );
    expect(screen.getByText(/Skills/i).closest("a")).toHaveAttribute(
      "href",
      "#skills"
    );
    expect(screen.getByText(/Portfolio/i).closest("a")).toHaveAttribute(
      "href",
      "#portfolio"
    );
    expect(screen.getByText(/Resume/i).closest("a")).toHaveAttribute(
      "href",
      "#resume"
    );
    expect(screen.getByText(/Contact/i).closest("a")).toHaveAttribute(
      "href",
      "#contact"
    );
  });

  it("renders the logo SVG", () => {
    render(<NavBar />);
    expect(document.querySelector("svg")).toBeInTheDocument();
  });

  it("opens the mobile menu when hamburger icon is clicked", async () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 375,
    });
    window.dispatchEvent(new Event("resize"));

    render(<NavBar />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });

    await userEvent.click(menuButton);
    expect(screen.getByText(/Skills/i)).toBeInTheDocument();
  });
});
