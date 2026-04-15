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
						Expertos en peluquería, tintes y maquillaje profesional bajo una estética única. 
						En nuestro salón, elevamos tu estilo con la precisión que buscas a través de técnicas de coloración avanzadas y un cuidado minucioso en el diseño de uñas. 
						Creemos en la belleza auténtica, ofreciendo servicios de estética personalizados que resaltan tu esencia y garantizan un acabado impecable en cada detalle.
					</p>
				</div>
				<Image src={aboutImg} alt='about' className='about-image' />
			</div>
		</section>
	);
};
export default About;
