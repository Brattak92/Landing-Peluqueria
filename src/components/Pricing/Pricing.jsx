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
					Desde tintes vibrantes hasta el cuidado minucioso de tus uñas, nuestras tarifas reflejan la exclusividad de los productos y la precisión de nuestra mano de obra. Encuentra el servicio que tu cabello y manos merecen.

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
