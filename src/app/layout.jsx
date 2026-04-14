import { GREAT_VIBES, MARTEL, POPPINS } from '@/constants/fonts';
import './globals.scss';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
	title: 'Prueba 1',
	description:
		'Esta es una landing page para un Salón de Peluquería, donde ofrecen una amplia gama de servicios de belleza capilar.',
	keywords: ['Next.js', 'React', 'JavaScript'],
	authors: [{ name: 'Abel Acuña', url: 'https://ronin-webdesign.vercel.app/' }],
};

const RootLayout = ({ children }) => {
	return (
		<html
			lang='es'
			className={`${GREAT_VIBES.variable} ${MARTEL.variable} ${POPPINS.variable}`}>
			<body suppressHydrationWarning={true}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
