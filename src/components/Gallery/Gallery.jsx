'use client';

import { GALLERY } from '@/constants/galleryImages';
import Image from 'next/image';
import MyTitle from '../Common/MyTitle/MyTitle';
import { useLanguage } from '@/context/LanguageContext';
import './Gallery.scss';

const Gallery = () => {
	const { t } = useLanguage();

	return (
		<section className='gallery-section' id='gallery'>
			<div className='gallery-container'>
				<MyTitle>{t.gallery.title}</MyTitle>
				<div className='gallery-content'>
					{GALLERY.map((image, index) => {
						return (
							<div className='image-container' key={index}>
								<Image
									className='gallery-image'
									src={image}
									alt='gallery-img'
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default Gallery;
