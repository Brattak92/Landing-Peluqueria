'use client';

import Image from 'next/image';
import imgBanner from '../../../public/images/banner.webp';
import { useLanguage } from '@/context/LanguageContext';
import './Banner.scss';

const Banner = () => {
	const { t } = useLanguage();

	return (
		<section className='banner-section'>
			<Image src={imgBanner} alt='banner' />
			<div className='banner-content'>
				<p className='banner-title'>{t.banner.title}</p>
				<p className='banner-subtitle'>{t.banner.subtitle}</p>
			</div>
		</section>
	);
};
export default Banner;
