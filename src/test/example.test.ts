import { describe, it, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App rendering test", () => {
  it("should render App without errors", () => {
    const { container } = render(React.createElement(App));
    expect(container).toBeTruthy();
  });
});
