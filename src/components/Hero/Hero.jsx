import MyButton from '../Common/MyButton/MyButton';
import './Hero.scss';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-content'>
				<h1>
					Mas que solo cortes de pelos <br />
					Belleza y estilo
				</h1>
				<h3>Cambia tu look con nuestros talentosos estilistas</h3>
				<MyButton goTo='#contact'>Cambia ya</MyButton>
			</div>
		</div>
	);
};
export default Hero;
