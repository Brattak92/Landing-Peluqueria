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
					¿Tienes una idea en mente? Cuéntanos qué necesitas y nuestro equipo se pondrá en contacto contigo para diseñar tu próxima cita. Estamos a solo un mensaje de crear tu nuevo look.
				</p>
				<Form />
			</div>
		</section>
	);
};
export default Contact;
