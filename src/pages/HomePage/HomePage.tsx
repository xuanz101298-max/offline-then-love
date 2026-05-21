import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ConceptSection from './ConceptSection';
import SetupSection from './SetupSection';
import ScenesSection from './ScenesSection';
import MechanismSection from './MechanismSection';
import HighlightsSection from './HighlightsSection';
import PartnershipSection from './PartnershipSection';
import DistributionSection from './DistributionSection';
import EndingSection from './EndingSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ConceptSection />
        <SetupSection />
        <ScenesSection />
        <MechanismSection />
        <HighlightsSection />
        <PartnershipSection />
        <DistributionSection />
        <EndingSection />
      </main>
    </div>
  );
}
