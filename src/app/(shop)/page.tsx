'use client';
import BannerPage from '@/components/shop/banner';
import CardPage from '@/components/shop/card';
import Image from 'next/image';
import { useProductsStore } from '@/store';
import { useEffect } from 'react';
import CardsList from '@/components/product/CardsList';

export default function Home() {
	const { products, loading, error, fetchProducts } = useProductsStore();

	useEffect(() => {
		fetchProducts();
	}, []);

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
				<CardsList products={products} category={3} />
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
					<CardsList products={products} category={1} />
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
					<CardsList products={products} category={4} />
				</div>
			</main>
		</div>
	);
}
