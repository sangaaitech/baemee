import Link from 'next/link';
import Layout from 'components/Layout';
import HeroSection from '@components/Sections/HeroSection';
import HighlightSection from '@components/Sections/HighlightSection';
import ImageBubbleSection from '@components/Sections/ImageBubbleSection';
import TeamSection from '@components/Sections/TeamSection';
import StatsSection from '@components/TestComponents/StatsSection';

const IndexPage = () => (
  <Layout title="Baemee | Upcoming events in Manipur">
    <HeroSection />

    <ImageBubbleSection />
    <TeamSection />
    <HighlightSection />
    <StatsSection />
  </Layout>
);

export default IndexPage;
