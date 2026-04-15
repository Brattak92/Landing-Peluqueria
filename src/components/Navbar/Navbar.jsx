'use client';

import { navLinks } from '@/constants/navlinks';
import Image from 'next/image';
import logo from '../../../public/images/logo.webp';
import ContactInfo from '../Common/ContactInfo/ContactInfo';
import SocialMedia from '../Common/SocialMedia/SocialMedia';
import './Navbar.scss';
import { GiComb } from 'react-icons/gi';
import { RiScissorsLine } from 'react-icons/ri';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const { lang, t, toggleLanguage } = useLanguage();
	const businessHours = t.header.hours;
	const flagImage = lang === 'es' ? '/images/lang-en.svg' : '/images/lang-es.svg';
	const flagAlt = lang === 'es' ? 'Switch to English' : 'Cambiar a Espanol';

	const handleMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<>
			<div className='sub-navbar' id='home'>
				<div className='sub-navbar-container'>
					<div className='sub-navbar-logo'>
						<Image src={logo} alt='logo' />
						<a href='/'>
							<h3>Peluquería Casa Nova</h3>
						</a>
					</div>
					<p className='sub-navbar-hours'>{businessHours}</p>
					<ContactInfo />
				</div>
			</div>
			<nav className='navbar'>
				<div className='navbar-container'>
					<div className='navbar-links'>
						{navLinks.map((item) => (
							<a href={item.path} key={item.path}>
								{t.nav[item.key]}
							</a>
						))}
					</div>
					<div className='navbar-right'>
						<SocialMedia />
						<button
							type='button'
							className='language-toggle'
							onClick={toggleLanguage}
							aria-label={t.language.switchLabel}>
							<Image src={flagImage} alt={flagAlt} width={42} height={28} />
						</button>
					</div>
					<div className='menu-icon' onClick={handleMenu}>
						{!openMenu ? <GiComb /> : <RiScissorsLine />}
					</div>
				</div>
				<div className={openMenu ? 'navbar-mobile active' : 'navbar-mobile'}>
					{navLinks.map((item) => (
						<a href={item.path} key={item.path} onClick={handleMenu}>
							{t.nav[item.key]}
						</a>
					))}
				</div>
			</nav>
		</>
	);
};
export default Navbar;
