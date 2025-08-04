import { Grid, GridItem } from '@chakra-ui/react';
import HeroBanner from '../components/HeroBanner';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CTASection from '../components/CTASection';
import Experience from '../components/Experience';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main" `,
        lg: `"main" `, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      <GridItem area="main">
        <Banner />
        <HeroBanner />
        <FeaturesSection/>
        <PricingSection/>
        <Experience />
        <CTASection />
        <FAQSection />
      </GridItem>
    </Grid>
  );
};

export default HomePage;