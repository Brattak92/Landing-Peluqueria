'use client';

import MyButton from '@/components/Common/MyButton/MyButton';
import { useForm } from '@/hooks/useForm';

const Form = () => {
	// Hook useForm
	const {
		name,
		email,
		tel,
		option,
		date,
		timeRange,
		formState,
		onInputChange,
		onResetForm,
	} = useForm({
		name: '',
		email: '',
		tel: '',
		option: '',
		date: '',
		timeRange: '',
	});

	// Handle submit
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formState);
		alert(JSON.stringify(formState));
		onResetForm();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Nombre'
				name='name'
				id='name'
				value={name}
				onChange={onInputChange}
				required
				autoComplete='off'
			/>
			<input
				type='email'
				placeholder='Email'
				name='email'
				id='email'
				value={email}
				onChange={onInputChange}
				required
				autoComplete='off'
			/>
			<input
				type='tel'
				placeholder='Teléfono'
				name='tel'
				id='tel'
				value={tel}
				onChange={onInputChange}
				required
				autoComplete='off'
			/>
			<select
				name='option'
				id='option'
				value={option}
				onChange={onInputChange}
				required
				autoComplete='off'>
				<option defaultValue={true} disabled={true}>
					Haircut
				</option>
				<option value={'styling'}>Peinado</option>
				<option value={'stylingColor'}>Peinado + Color</option>
				<option value={'stylingTint'}>Peinado + Tinte</option>
				<option value={'semiPermanent'}>Ondas Semi-Permanentes</option>
				<option value={'cut'}>Corte</option>
				<option value={'shave'}>Afeitado</option>
				<option value={'beardTrim'}>Recorte de Barba</option>
				<option value={'cutBearTrim'}>Corte + Recorte de Barba</option>
				<option value={'cutShave'}>Corte + Afeitado</option>
				<option value={'cleanUp'}>Limpieza</option>
			</select>
			<input
				type='date'
				name='date'
				id='date'
				value={date}
				onChange={onInputChange}
				required
				autoComplete='off'
			/>
			<select
				name='timeRange'
				id='timeRange'
				value={timeRange}
				onChange={onInputChange}
				required
				autoComplete='off'>
				<option value='' disabled={true}>
					Franja horaria
				</option>
				<option value='manana'>Mañana</option>
				<option value='tarde'>Tarde</option>
			</select>
			<MyButton newClass='contact-btn'>Solicita tu cita VIP</MyButton>
		</form>
	);
};
export default Form;
