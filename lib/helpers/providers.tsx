"use client";

// Store
import { Provider } from "react-redux";

// Styles
import { ThemeProvider } from "@/components/ThemeProvider";

// Helpers
import { reduxStore } from "@/lib/store";
import { SITE_CONFIG } from "@/config/site";

export function Providers(props: Readonly<React.PropsWithChildren>) {
  return (
    <Provider store={reduxStore}>
      <ThemeProvider
        attribute="class"
        defaultTheme={SITE_CONFIG.defaultTheme}
        enableSystem
        disableTransitionOnChange
      >
        {props.children}
      </ThemeProvider>
    </Provider>
  );
}

export default Providers;
