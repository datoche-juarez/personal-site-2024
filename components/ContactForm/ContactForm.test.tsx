process.env.NEXT_PUBLIC_API_URL = "https://mock.api/contact";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// ✅ Mock global fetch
global.fetch = jest.fn();

describe("ContactForm", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("submits the form and shows success message", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    // ✅ Dynamically require after env var is set
    const { default: ContactForm } = require("./ContactForm");

    render(<ContactForm />);

    await userEvent.type(screen.getByLabelText(/First Name/i), "Daniel");
    await userEvent.type(screen.getByLabelText(/Last Name/i), "Juarez");
    await userEvent.type(screen.getByLabelText(/Email/i), "dan@example.com");
    await userEvent.type(screen.getByLabelText(/Phone/i), "3135555555");
    await userEvent.type(screen.getByLabelText(/Message/i), "This is a test.");

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() =>
      expect(screen.getByText(/message sent!/i)).toBeInTheDocument()
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("http"), // ✅ URL now properly injected
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: expect.any(String),
      })
    );
  });
});
