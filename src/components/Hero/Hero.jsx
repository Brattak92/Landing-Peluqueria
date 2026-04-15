'use client';

import MyButton from '../Common/MyButton/MyButton';
import { useLanguage } from '@/context/LanguageContext';
import './Hero.scss';

const Hero = () => {
	const { t } = useLanguage();

	return (
		<div className='hero'>
			<div className='hero-content'>
				<h1>
					{t.hero.titleLine1} <br />
					{t.hero.titleLine2}
				</h1>
				<h3>{t.hero.subtitle}</h3>
				<MyButton goTo='#contact'>{t.hero.cta}</MyButton>
			</div>
		</div>
	);
};
export default Hero;
