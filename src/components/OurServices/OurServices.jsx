import { SERVICES } from '@/constants/cardServices';
import Image from 'next/image';
import MyButton from '../Common/MyButton/MyButton';
import MyTitle from '../Common/MyTitle/MyTitle';
import './OurServices.scss';

const OurServices = () => {
	return (
		<section className='services-section' id='services'>
			<MyTitle>Nuestros Servicios</MyTitle>
			<div className='services-content'>
				{SERVICES.map((card, index) => {
					return (
						<div className='card' key={index}>
							<Image src={card.image} alt='card-img' />
							<div className='card-content'>
								<h6>{card.title}</h6>
								<MyButton goTo='#contact'>Reservar experiencia</MyButton>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default OurServices;
