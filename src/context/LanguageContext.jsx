'use client';

import { translations } from '@/constants/i18n';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState('es');

	useEffect(() => {
		const storedLang = window.localStorage.getItem('site-lang');
		if (storedLang === 'es' || storedLang === 'en') {
			setLang(storedLang);
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem('site-lang', lang);
	}, [lang]);

	const toggleLanguage = () => {
		setLang((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
	};

	const value = useMemo(
		() => ({
			lang,
			toggleLanguage,
			t: translations[lang],
		}),
		[lang],
	);

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within LanguageProvider');
	}

	return context;
};