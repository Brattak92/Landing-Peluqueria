import Image from 'next/image';
import imgBanner from '../../../public/images/banner.webp';
import './Banner.scss';

const Banner = () => {
	return (
		<section className='banner-section'>
			<Image src={imgBanner} alt='banner' />
			<div className='banner-content'>
				<p className='banner-title'>Más que solo un corte de pelo</p>
				<p className='banner-subtitle'>
					Cambia tu look con nuestros estilistas
				</p>
			</div>
		</section>
	);
};
export default Banner;
