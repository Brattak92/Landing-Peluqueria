import Image from 'next/image';
import imgPricing from '../../../public/images/gallery2.webp';
import imgBackground from '../../../public/images/prices.webp';
import MyButton from '../Common/MyButton/MyButton';
import MyTitle from '../Common/MyTitle/MyTitle';
import Prices from './components/Prices/Prices';
import './Pricing.scss';

const Pricing = () => {
	return (
		<section className='pricing-section' id='prices'>
			<div className='img-container'>
				<Image src={imgPricing} alt='img' className='img-prices' />
				<Image src={imgBackground} alt='img' className='img-background' />
			</div>
			<div className='content'>
				<MyTitle>Servicios y precios:</MyTitle>
				<p>
					¿Tienes una idea en mente? Cuéntanos qué necesitas y nuestro equipo se pondrá en contacto contigo para diseñar tu próxima cita. Estamos a solo un mensaje de crear tu nuevo look.

				</p>
				<Prices />
				<MyButton newClass='price-btn' goTo='#contact'>
					Define tu estilo
				</MyButton>
			</div>
		</section>
	);
};
export default Pricing;
