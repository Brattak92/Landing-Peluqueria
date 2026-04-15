'use client';

import { useLanguage } from '@/context/LanguageContext';
import './Prices.scss';

const Prices = () => {
	const { t } = useLanguage();

	return (
		<div className='prices-container'>
			<div className='prices-list'>
				<p className='prices-title'>{t.pricing.womenTitle}</p>
				{t.pricing.womenList.map((item, index) => (
					<div className='prices-content' key={index}>
						<p className='prices-style'>{item.style}</p>
						<p className='prices-money'>{item.price}</p>
					</div>
				))}
			</div>
			<div className='prices-list'>
				<p className='prices-title'>{t.pricing.menTitle}</p>
				{t.pricing.menList.map((item, index) => (
					<div className='prices-content' key={index}>
						<p className='prices-style'>{item.style}</p>
						<p className='prices-money'>{item.price}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Prices;
