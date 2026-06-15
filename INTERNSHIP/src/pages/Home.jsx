import Hero from '../components/Hero/Hero';
import FeaturedDishes from '../components/FeaturedDishes/FeaturedDishes';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../components/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}