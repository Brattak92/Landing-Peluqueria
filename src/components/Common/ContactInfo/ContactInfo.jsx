import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import './ContactInfo.scss';

const ContactInfo = () => {
	return (
		<div className='info-contact'>
			<div>
				<MdLocationOn />
				<p>Benidorm</p>
			</div>
			<div>
				<MdPhone />
				<p>+34 604218793</p>
			</div>
			<div>
				<MdEmail />
				<p>simodelmoes@gmail.com</p>
			</div>
		</div>
	);
};
export default ContactInfo; 