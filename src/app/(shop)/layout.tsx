import FooterPage from '@/components/shop/footer';
import HeaderPage from '@/components/shop/header';
import Image from 'next/image';
export default function ShopLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="min-h-screen bg-slate-100 relative">
			<HeaderPage />
			{children}
			<FooterPage />
			<div className="fixed bottom-8 right-8 border-black border-[1px] rounded-[52px]">
				<a href="https://wa.me/51977832615">
					<div className="">
						<Image
							src={'/whatsApp.svg'}
							alt="whatsapp"
							width={131}
							height={41}
						/>
					</div>
				</a>
			</div>
		</main>
	);
}
