import { PRICES_MEN, PRICES_WOMEN } from '@/constants/prices';
import './Prices.scss';

const Prices = () => {
	return (
		<div className='prices-container'>
			<div className='prices-list'>
				<p className='prices-title'>Señoritas</p>
				{PRICES_WOMEN.map((item, index) => (
					<div className='prices-content' key={index}>
						<p className='prices-style'>{item.style}</p>
						<p className='prices-money'>{item.price}</p>
					</div>
				))}
			</div>
			<div className='prices-list'>
				<p className='prices-title'>Hombres</p>
				{PRICES_MEN.map((item, index) => (
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
