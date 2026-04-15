'use client';

import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaWhatsapp,
} from 'react-icons/fa';
import './SocialMedia.scss';

const SocialMedia = () => {
	return (
		<div className='social'>
			<a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
				<FaFacebookF />
			</a>
			<a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
				<FaInstagram />
			</a>
			<a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
				<FaTwitter />
			</a>
		</div>
	);
};
export default SocialMedia;
