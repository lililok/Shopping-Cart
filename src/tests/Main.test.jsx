import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import Main from "../routes/Main.jsx";

describe('Main component', () => {
  it('renders within Router', () => {
    render(
      <Router>
        <Main />
      </Router>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument(); 
  });
});