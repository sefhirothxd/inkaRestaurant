import FooterPage from '@/components/shop/footer';
import HeaderPage from '@/components/shop/header';

export default function ShopLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="min-h-screen bg-slate-100">
			<HeaderPage />
			{children}
			<FooterPage />
		</main>
	);
}
