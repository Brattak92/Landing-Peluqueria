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

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const businessHours = 'De Lunes a Sabado:\n10:00 - 14:00\n16:00 - 20:00';

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
								{item.title}
							</a>
						))}
					</div>
					<SocialMedia />
					<div className='menu-icon' onClick={handleMenu}>
						{!openMenu ? <GiComb /> : <RiScissorsLine />}
					</div>
				</div>
				<div className={openMenu ? 'navbar-mobile active' : 'navbar-mobile'}>
					{navLinks.map((item) => (
						<a href={item.path} key={item.path} onClick={handleMenu}>
							{item.title}
						</a>
					))}
				</div>
			</nav>
		</>
	);
};
export default Navbar;
