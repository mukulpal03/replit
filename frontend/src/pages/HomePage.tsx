import { LandingNavbar } from "../components/organisms/LandingNavbar";
import { LandingHero } from "../components/organisms/LandingHero";
import { LandingFeatures } from "../components/organisms/LandingFeatures";
import { LandingHowItWorks } from "../components/organisms/LandingHowItWorks";
import { LandingTestimonials } from "../components/organisms/LandingTestimonials";
import { LandingPricing } from "../components/organisms/LandingPricing";
import { LandingBottomCta } from "../components/organisms/LandingBottomCta";
import { LandingFooter } from "../components/organisms/LandingFooter";

export const HomePage = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "#0A0A0B",
      color: "#F0EEE8",
      fontFamily: "Geist, system-ui, sans-serif",
    }}
  >
    <LandingNavbar />
    <main>
      <LandingHero />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingTestimonials />
      <LandingPricing />
      <LandingBottomCta />
    </main>
    <LandingFooter />
  </div>
);
