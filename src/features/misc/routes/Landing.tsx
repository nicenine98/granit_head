import { Carousel, FeaturesHome, FeaturesBlock, Delivery, Map, Footer } from '../../../components/Landing';
import { Navbar } from '../../../components/Landing'

export const Landing = () => {

  return (
    <>
      <Navbar />
      <Carousel />
      <FeaturesHome />
      <FeaturesBlock />
      <Delivery />
      <Map />
      <Footer />
    </>
  );
};
