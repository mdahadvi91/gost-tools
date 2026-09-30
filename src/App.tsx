import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* Contexts */
import { ThemeProvider } from "@contexts/ThemeContext";
import { LanguageProvider } from "@contexts/LanguageContext";
import { SoundProvider } from "@contexts/SoundContext";
import { ToolProvider } from "@contexts/ToolContext";
import { ToastProvider } from "@components/common/Toast";

/* Layout */
import { MainLayout } from "@components/layout/MainLayout";

/* Error / Loading */
import { ErrorBoundary } from "@components/common/ErrorBoundary";
import { PageLoader } from "@components/common/PageLoader";

/* Pages (lazy loaded for performance) */
const HomePage = lazy(() => import("@pages/HomePage"));
const ToolsIndexPage = lazy(() => import("@pages/ToolsIndexPage"));
const CategoryPage = lazy(() => import("@pages/CategoryPage"));
const AboutPage = lazy(() => import("@pages/AboutPage"));
const ContactPage = lazy(() => import("@pages/ContactPage"));
const PrivacyPage = lazy(() => import("@pages/PrivacyPage"));
const TermsPage = lazy(() => import("@pages/TermsPage"));
const DisclaimerPage = lazy(() => import("@pages/DisclaimerPage"));
const AccessibilityPage = lazy(() => import("@pages/AccessibilityPage"));
const CookiePolicyPage = lazy(() => import("@pages/CookiePolicyPage"));
const NotFoundPage = lazy(() => import("@pages/NotFoundPage"));

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tools" element={<ToolsIndexPage />} />
        <Route path="categories/:slug" element={<CategoryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="disclaimer" element={<DisclaimerPage />} />
        <Route path="accessibility" element={<AccessibilityPage />} />
        <Route path="cookie-policy" element={<CookiePolicyPage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <ErrorBoundary variant="global">
      <ThemeProvider>
        <LanguageProvider>
          <SoundProvider>
            <ToolProvider>
              <ToastProvider>
                <BrowserRouter>
                  <Suspense fallback={<PageLoader />}>
                    <AppRoutes />
                  </Suspense>
                </BrowserRouter>
              </ToastProvider>
            </ToolProvider>
          </SoundProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}