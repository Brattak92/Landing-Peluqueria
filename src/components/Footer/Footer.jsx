import Image from 'next/image';
import logo from '../../../public/images/logo.webp';
import ContactInfo from '../Common/ContactInfo/ContactInfo';
import SocialMedia from '../Common/SocialMedia/SocialMedia';
import './Footer.scss';

const Footer = () => {
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
					&copy; Peluquería Casa Nova. Todos los derechos reservados.
				</p>
				<p className='footer-horarios'>
					De Lunes a Sabado <br /> 10:00 - 14:00 <br /> 16:00 - 20:00
				</p>
			</div>
		</footer>
	);
};
export default Footer;
