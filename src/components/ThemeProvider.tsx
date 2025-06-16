"use client";

import { useState, useEffect } from "react";
import { ThemeProvider as Provider } from "next-themes";

type Props = {
  children: React.JSX.Element | React.JSX.Element[] | React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <Provider enableSystem={true} attribute="class">
      {children}
    </Provider>
  );
};

export default ThemeProvider;
