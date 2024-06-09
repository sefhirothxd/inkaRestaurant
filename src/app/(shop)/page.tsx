import BannerPage from '@/components/shop/banner';
import CardPage from '@/components/shop/card';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="bg-[#F5F5F5]">
			<BannerPage />
			<main className="mt-8 max-w-[1400px] mx-auto">
				<div className="flex items-center justify-center flex-col">
					<h2 className="text-[24px]  text-[#4c4c4c] font-fontPrincipal ">
						Los mejores platos estan en Inka Flavors
					</h2>
					<p className="text-lg  text-[#848484] font-fontSecundario">
						Disfruta de los sabores inigualables de nuestros platillos hechas
						con los mejores ingredientes.
					</p>
				</div>
				<div className=" mt-[10px] p-2 pb-[28px]">
					<div className="flex items-center gap-2">
						<Image
							src={'promociones.svg'}
							alt="icono de promocion"
							width={34}
							height={23}
						/>
						<h2 className="text-2xl  font-semibold text-[#4c4c4c] font-fontPrincipal">
							Promociones de comida
						</h2>
					</div>
					<p className="text-lg mt-[10px]  font-medium text-[#848484] font-fontSecundario">
						Una promocion se disfruta mejor en familia y amigos
					</p>
				</div>
				<div className="w-full flex justify-between gap-5 items-center relative">
					<CardPage />
					<CardPage />
					<CardPage />
				</div>
				<div className="my-[64px]">
					<Image
						src={'/bannerPromo.webp'}
						className="w-full rounded-[10px] "
						alt="icono de promocion"
						width={1400}
						height={180}
					/>
				</div>
				<div className=" pb-[52px]">
					<div className="mb-7">
						<div className="flex items-center gap-2">
							<Image
								src={'promociones.svg'}
								alt="icono de promocion"
								width={34}
								height={23}
							/>
							<h2 className="text-2xl  font-semibold text-[#4c4c4c] font-fontPrincipal">
								Mas platos
							</h2>
						</div>
						<p className="text-lg mt-[10px]  font-medium text-[#848484] font-fontSecundario">
							Revisa los diversos platillos que tenemos para ti
						</p>
					</div>
					<div className="gap-x-9 gap-y-6 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-content-center ">
						<CardPage />
						<CardPage />
						<CardPage />
						<CardPage />
						<CardPage />
						<CardPage />
						<CardPage />
						<CardPage />
						<CardPage />
					</div>
				</div>
				<div className=" pb-[83px]">
					<div className="mb-7">
						<div className="flex items-center gap-2">
							<Image
								src={'promociones.svg'}
								alt="icono de promocion"
								width={34}
								height={23}
							/>
							<h2 className="text-2xl  font-semibold text-[#4c4c4c] font-fontPrincipal">
								Bebidas
							</h2>
						</div>
						<p className="text-lg mt-[10px]  font-medium text-[#848484] font-fontSecundario">
							Revisa los diversos babidas que tenemos para ti
						</p>
					</div>
					<div className="gap-x-9 gap-y-6 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-content-center  ">
						<CardPage />
						<CardPage />
						<CardPage />
						<CardPage />
						<CardPage />
						<CardPage />
					</div>
				</div>
			</main>
		</div>
	);
}
