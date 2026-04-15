import Image from 'next/image';
import aboutImg from '../../../public/images/about.webp';
import MyButton from '../Common/MyButton/MyButton';
import MyTitle from '../Common/MyTitle/MyTitle';
import './About.scss';

const About = () => {
	return (
		<section className='about-section' id='about'>
			<div className='about-container'>
				<MyTitle newClass='about-title'>Bienvenidos a mi salon de belleza</MyTitle>
				<div className='about-content'>
					<p>
						Somos profesionales del sector de la belleza, tratamientos por clientes
					</p>
					<MyButton goTo='#contact'>Reserva tu turno</MyButton>
				</div>
				<Image src={aboutImg} alt='about' className='about-image' />
			</div>
		</section>
	);
};
export default About;
