'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
	{ name: 'platos', href: 'platos' },
	{ name: 'bebidas', href: 'bebidas' },
	{ name: 'entradas', href: 'entradas' },
	{ name: 'postres', href: 'postres' },
	{ name: 'extras', href: 'extras' },
	{ name: 'anuncio', href: '#' },
	{ name: 'sliders', href: '#' },
	{ name: 'usuarios', href: '#' },
	{ name: 'local', href: '#' },
];

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();

	return (
		<>
			<div className="flex overflow-hidden bg-white">
				<aside
					id="sidebar"
					className="fixed hidden z-20 h-full top-0 left-0  lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
					aria-label="Sidebar"
				>
					<div className="relative flex-1 flex flex-col min-h-0 borderR border-gray-200 bg-white pt-0">
						<div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto mt-[100px]">
							<Image
								className="mx-auto mb-[60px]"
								src={'/inkaflavors.svg'}
								alt="logo"
								width={200}
								height={50}
							/>

							<div className="flex-1 px-3 bg-white divide-y space-y-1">
								<ul className="space-y-2 pb-2">
									{links.map((link) => (
										<li key={link.href}>
											<Link
												href={link.href}
												className={
													pathname.replace('/dashboard/', '') === link.href
														? 'text-base capitalize pl-[50px] text-white font-normal rounded-lg flex items-center p-2 bg-redPrimario'
														: 'text-base capitalize pl-[50px] text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'
												}
											>
												<Image
													src={`/${link.name}.svg`}
													alt="icon"
													width={25}
													height={25}
												/>
												<span className="ml-[24px] font-semibold">
													{link.name}
												</span>
											</Link>
										</li>
									))}
								</ul>
							</div>

							<div className="flex flex-col  justify-center items-center">
								<button className="bg-black flex justify-center items-center gap-[14px] uppercase  p-3 text-center text-white mb-[32px] w-[232px] rounded-lg">
									<Image
										src={'/paper.svg'}
										alt="pedidos"
										width={25}
										height={25}
									/>
									pedidos
								</button>
								<div className="flex items-center justify-start gap-8 pl-[24px]  w-full">
									<Link href="/login">
										<button className="bg-redPrimario p-[15px] rounded-[15px]">
											<Image
												src={'/power.svg'}
												alt="google"
												width={29}
												height={29}
											/>
										</button>
									</Link>
									<Image
										src={'/derechos.png'}
										alt="derechos"
										width={100}
										height={37}
									/>
								</div>
							</div>
						</div>
					</div>
				</aside>
				<div
					className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
					id="sidebarBackdrop"
				></div>
				<div
					id="main-content"
					className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
				>
					<main>
						<div className="">
							<div className="w-full min-h-[calc(100vh-230px)]">
								<div className="bg-white shadow rounded-lg  ">{children}</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
