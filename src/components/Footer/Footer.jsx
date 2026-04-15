'use client';

import Image from 'next/image';
import logo from '../../../public/images/logo.webp';
import ContactInfo from '../Common/ContactInfo/ContactInfo';
import SocialMedia from '../Common/SocialMedia/SocialMedia';
import { useLanguage } from '@/context/LanguageContext';
import './Footer.scss';

const Footer = () => {
	const { t } = useLanguage();

	return (
		<footer className='footer-container'>
			<div className='footer-logo'>
				<Image src={logo} alt='logo' />
				<a href='/'>
					<h3>Peluquería Casa Nova</h3>
				</a>
			</div>
			<ContactInfo />
			<hr className='footer-linea' />
			<div className='footer-contact'>
				<SocialMedia />
				<p className='footer-copyrights'>
					&copy; {t.footer.copyright}
				</p>
				<p className='footer-horarios'>{t.footer.hours}</p>
			</div>
		</footer>
	);
};
export default Footer;
