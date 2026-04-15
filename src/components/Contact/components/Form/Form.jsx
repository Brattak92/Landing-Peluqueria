'use client';

import MyButton from '@/components/Common/MyButton/MyButton';
import { useLanguage } from '@/context/LanguageContext';
import { useForm } from '@/hooks/useForm';

const Form = () => {
	const { t } = useLanguage();

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
				placeholder={t.form.name}
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
				placeholder={t.form.phone}
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
					{t.form.servicePlaceholder}
				</option>
				{t.form.serviceOptions.map((serviceOption) => (
					<option key={serviceOption.value} value={serviceOption.value}>
						{serviceOption.label}
					</option>
				))}
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
					{t.form.timePlaceholder}
				</option>
				<option value='manana'>{t.form.morning}</option>
				<option value='tarde'>{t.form.afternoon}</option>
			</select>
			<MyButton newClass='contact-btn'>{t.form.submit}</MyButton>
		</form>
	);
};
export default Form;
