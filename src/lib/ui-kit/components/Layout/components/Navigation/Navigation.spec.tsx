import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Navigation } from "./Navigation.component";
import { RouterProvider } from "lib/utils";
import { theme } from "lib/ui-kit";

describe("Navigation", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <RouterProvider>
          <Navigation />
        </RouterProvider>
      </ThemeProvider>
    );

    expect(baseElement).toBeInTheDocument();
  });
});
