import { useState, type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { cn } from "@lib/cn";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LeftSidebar } from "./LeftSidebar";
import { MobileMenu } from "./MobileMenu";
import { RightUtilityPanel } from "./RightUtilityPanel";
import { ShaderBackground } from "./ShaderBackground";
import { PageTransition } from "./PageTransition";
import { ScrollProgress } from "@components/common/ScrollProgress";
import { SkipLink } from "@components/common/SkipLink";
import { AhaBuddy } from "@components/decorative/AhaBuddy";

interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <ShaderBackground intensity={0.9} />

      <div className="relative min-h-screen flex flex-col">
        <Header
          onMenuClick={() => setMobileMenuOpen(true)}
          onRightPanelClick={() => setRightPanelOpen(true)}
        />

        {/* Spacer for fixed header */}
        <div className="h-16 lg:h-[72px]" aria-hidden="true" />

        <div className="flex flex-1 w-full mx-auto max-w-[1400px]">
          <LeftSidebar />

          <main
            id="main-content"
            className={cn(
              "flex-1 min-w-0",
              "px-4 sm:px-6 lg:px-8",
              "py-6 lg:py-8"
            )}
          >
            <PageTransition>
              {children ?? <Outlet />}
            </PageTransition>
          </main>
        </div>

        <Footer />
      </div>

      {/* Drawers */}
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <RightUtilityPanel
        open={rightPanelOpen}
        onClose={() => setRightPanelOpen(false)}
      />

      {/* Companion */}
      <AhaBuddy />
    </>
  );
}