'use client';

import MyTitle from '../Common/MyTitle/MyTitle';
import Form from './components/Form/Form';
import ContactMap from './components/Map/Map';
import { useLanguage } from '@/context/LanguageContext';
import './Contact.scss';

const Contact = () => {
	const { t } = useLanguage();

	return (
		<section className='contact-section' id='contact'>
			<ContactMap />
			<div className='contact-content'>
				<MyTitle>{t.contact.title}</MyTitle>
				<p>{t.contact.description}</p>
				<Form />
			</div>
		</section>
	);
};
export default Contact;
