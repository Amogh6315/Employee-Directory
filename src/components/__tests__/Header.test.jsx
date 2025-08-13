import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import Header from "../Header";

describe("Header Search Bar", () => {
  test("calls onSearch when typing in the search bar", () => {
    const mockOnSearch = vi.fn();
    const mockToggleDarkMode = vi.fn();

    render(<Header onSearch={mockOnSearch} toggleDarkMode={mockToggleDarkMode} />);

    const input = screen.getByPlaceholderText(/search employees/i);
    fireEvent.change(input, { target: { value: "John" } });

    expect(mockOnSearch).toHaveBeenCalledWith("John");
  });
});
