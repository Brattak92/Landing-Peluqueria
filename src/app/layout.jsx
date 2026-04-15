import { GREAT_VIBES, MARTEL, POPPINS } from '@/constants/fonts';
import './globals.scss';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata = {
	title: 'Peluqueria Casa Nova',
	description:
		'Esta es una landing page para la Peluquería Casa Nova, donde ofrecen una amplia gama de servicios de belleza capilar.',
	keywords: ['Next.js', 'React', 'JavaScript'],
	authors: [{ name: 'Abel Acuña', url: 'https://ronin-webdesign.vercel.app/' }],
};

const RootLayout = ({ children }) => {
	return (
		<html
			lang='es'
			className={`${GREAT_VIBES.variable} ${MARTEL.variable} ${POPPINS.variable}`}>
			<body suppressHydrationWarning={true}>
				<LanguageProvider>
					<Navbar />
					{children}
					<Footer />
				</LanguageProvider>
			</body>
		</html>
	);
};

export default RootLayout;
