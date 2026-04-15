'use client';

import { SERVICES } from '@/constants/cardServices';
import Image from 'next/image';
import MyButton from '../Common/MyButton/MyButton';
import MyTitle from '../Common/MyTitle/MyTitle';
import { useLanguage } from '@/context/LanguageContext';
import './OurServices.scss';

const OurServices = () => {
	const { t } = useLanguage();

	return (
		<section className='services-section' id='services'>
			<MyTitle>{t.services.title}</MyTitle>
			<div className='services-content'>
				{SERVICES.map((card, index) => {
					return (
						<div className='card' key={index}>
							<Image src={card.image} alt='card-img' />
							<div className='card-content'>
								<h6>{t.services.items[index]}</h6>
								<MyButton goTo='#contact'>{t.services.cta}</MyButton>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default OurServices;
