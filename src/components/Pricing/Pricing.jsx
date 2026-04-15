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
					test de prueba
				</p>
				<Prices />
				<MyButton newClass='price-btn' goTo='#contact'>
					Reserva tu turno
				</MyButton>
			</div>
		</section>
	);
};
export default Pricing;
