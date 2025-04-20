import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
	title: 'Savory - Fine Dining Restaurant',
	description:
		'Experience exquisite cuisine in an elegant atmosphere at Savory Restaurant',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
