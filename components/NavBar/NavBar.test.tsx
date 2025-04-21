import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("renders navigation links", () => {
    render(<NavBar />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/Resume/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});
