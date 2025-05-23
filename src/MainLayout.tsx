import {
  ContentWrapper,
  PageContainer,
  PageContent,
  PageFooter,
} from "./components/styled/PageStyled.ts";
import Navigations from "./components/common/Navigations.tsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer.tsx";
import { useState, useEffect } from "react";
import { RouteTransition } from "./components/common/RouteTransition.tsx";

// Mobile breakpoint
const MOBILE_BREAKPOINT = 768;

export const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  // Check screen size on mount and window resize
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    minHeight: isMobile ? "auto" : undefined,
  };

  return (
    <PageContent>
      <Navigations />
      <ContentWrapper>
        <PageContainer style={containerStyle as React.CSSProperties}>
          {isMobile ? (
            /* On mobile: no animation */
            <Outlet />
          ) : (
            /* On desktop: slide in out animation */
            <RouteTransition />
          )}
        </PageContainer>
        <PageFooter>
          <Footer />
        </PageFooter>
      </ContentWrapper>
    </PageContent>
  );
};
