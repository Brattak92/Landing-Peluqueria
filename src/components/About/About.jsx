'use client';

import Image from 'next/image';
import aboutImg from '../../../public/images/about.webp';
import MyTitle from '../Common/MyTitle/MyTitle';
import { useLanguage } from '@/context/LanguageContext';
import './About.scss';

const About = () => {
	const { t } = useLanguage();

	return (
		<section className='about-section' id='about'>
			<div className='about-container'>
				<MyTitle newClass='about-title'>{t.about.title}</MyTitle>
				<div className='about-content'>
					<p>{t.about.description}</p>
				</div>
				<Image src={aboutImg} alt='about' className='about-image' />
			</div>
		</section>
	);
};
export default About;
