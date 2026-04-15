import About from '@/components/About/About';
import Banner from '@/components/Banner/Banner';
import Contact from '@/components/Contact/Contact';
import Gallery from '@/components/Gallery/Gallery';
import Hero from '@/components/Hero/Hero';
import OurServices from '@/components/OurServices/OurServices';
import Pricing from '@/components/Pricing/Pricing';
import WhatsAppButton from '@/components/Common/WhatsAppButton/WhatsAppButton';

const Home = () => {
	return (
		<main>
			
			<Hero />
			<About />
			<OurServices />
			<Gallery />
			<Pricing />
			<Banner />
			<Contact />
			<WhatsAppButton />
		</main>
	);
};

export default Home;
