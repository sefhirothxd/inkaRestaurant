'use client';
import EventsLoader from '@/components/product/skeletonLoder';
import FranjaNegraPage from '@/components/shop/franjaNegra';
import { useUIStore, useProductsStore } from '@/store';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import ModalProductPage from '@/components/product/ModalProduct';

export default function DescriptionPage() {
	const isModalOpen = useUIStore((state) => state.openModalMenu);
	const { loading, error, product, fetchProduct, fetchProducts } =
		useProductsStore();

	const { id } = useParams();

	useEffect(() => {
		fetchProduct(id);
		fetchProducts();
	}, []);

	return (
		<div className=" relative">
			<FranjaNegraPage text="Delivery gratis todos los dias - exclusivo en web" />
			<div className="py-8 px-24 font-fontSecundario">
				<div className="px-[72px] flex justify-between gap-9 max-w-[1050px] w-full mx-auto rounded-[10px] bg-white">
					<Image
						src={
							!loading
								? `/imgs/${product?.image}.webp`
								: '/imgs/starman_750x750.png'
						}
						alt="logo"
						width={430}
						height={480}
						className="rounded-[10px] object-cover "
					/>
					<div className=" flex flex-col justify-center gap-6 mt-4">
						<div>
							<h3 className="text-[22px] mb-[15px] font-semibold">
								{/* {loading ? (
									//skeletonLoder
									<EventsLoader />
								) : (
									`${product?.name}: $${product?.price}`
								)} */}
								{product && `${product.name}:`}{' '}
								{product && `$${product?.price}`}
							</h3>
							<p className="text-[17px] text-justify font-semibold leading-[25px] my-[10px]">
								{product?.description}
								<br />
								<br />
								Combo Signature: 1 pizza grande clásica + 1 gaseosa de 1 LT a S/
								29.90
								<br />
								<br />
								¡Aprovecha nuestro delivery gratis de Lunes a Jueves!
							</p>
							<p className="text-[#00795b] text-[19px] font-extrabold">
								Selecciona el tamaño de tu preferencia
							</p>
						</div>
						<div className="bg-[#DA2308] text-[14px] text-white flex justify-center items-center flex-col w-[165px] h-[90px] text-center rounded-[15px] cursor-pointer">
							<h4>Combo Mejor Pide Papa Johns</h4>
							<div>
								<p className="line-through">$ 36.80</p>
								<p>$ 29.90</p>
							</div>
						</div>
						<div className="w-full flex justify-center py-[25px]">
							<button
								onClick={isModalOpen}
								className="bg-[#00795b] text-white text-[18px] h-[40px] max-w-[220px] w-full rounded-[15px]"
							>
								Siguiente
							</button>
						</div>
					</div>
				</div>
			</div>
			<ModalProductPage />
		</div>
	);
}
