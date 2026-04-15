import MyTitle from '../Common/MyTitle/MyTitle';
import Form from './components/Form/Form';
import ContactMap from './components/Map/Map';
import './Contact.scss';

const Contact = () => {
	return (
		<section className='contact-section' id='contact'>
			<ContactMap />
			<div className='contact-content'>
				<MyTitle>Coge una cita ya!</MyTitle>
				<p>
					Contacta con nosotros. <br />
					Inserta tus datos y tus preferencias y contacteremos contigo para confirmar
					la cita y comunicarte el horario disponible.
				</p>
				<Form />
			</div>
		</section>
	);
};
export default Contact;
