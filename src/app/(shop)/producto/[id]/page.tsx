'use client';
import EventsLoader from '@/components/product/skeletonLoder';
import FranjaNegraPage from '@/components/shop/franjaNegra';
import { useUIStore, useProductsStore, useCartStore } from '@/store';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import ModalProductPage from '@/components/product/ModalProduct';

export default function DescriptionPage() {
	const isModalOpen = useUIStore((state) => state.openModalMenu);
	const { addCart } = useCartStore();
	const { products, loading } = useProductsStore();

	const { id } = useParams();

	const product = products.find((product) => product.id === +id);

	const halndleAddCart = (product: any) => {
		if (!product.quantity) {
			product.quantity = 1;
		}

		addCart(product!);
		isModalOpen();
	};

	return (
		<div className=" ">
			<FranjaNegraPage text="Delivery gratis todos los dias - exclusivo en web" />

			{!loading ? (
				<div className=" py-4 sm:py-16 lg:px-24 px-5 font-fontSecundario">
					<div className="lg:px-[64px] py-3 px-[20px] sm:px-[35px] flex md:justify-between justify-center gap-9 max-w-[1050px] w-full mx-auto rounded-[10px] bg-white flex-wrap-reverse md:flex-nowrap ">
						<Image
							src={`/imgs/${product?.image}.webp`}
							alt="logo"
							width={430}
							height={480}
							className="rounded-[10px] object-cover w-full max-w-[430px] ] h-auto"
						/>
						<div className=" flex flex-col justify-center gap-6 mt-4">
							<div>
								<h3 className="text-[22px] mb-[15px] font-fontPrincipal text-blackFontPrimario">
									{product && `${product.name}:`}{' '}
									{product && `$${product?.price.toFixed(2)}`}
								</h3>
								<p className="text-[17px] text-justify font-normal leading-[25px] my-[10px]">
									{product?.description}
									<br />
									<br />
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Harum aliquid, aperiam iste expedita illo vel cum eum
									distinctio iusto culpa quos aliquam iure quisquam fugit?
									Blanditiis adipisci fugiat officiis veniam.
								</p>
							</div>
							{/* <div className="bg-transparent text-[14px] text-white flex justify-center items-center flex-col w-[165px] h-[90px] text-center rounded-[15px] cursor-pointer"></div> */}
							<div className="w-full flex justify-center py-[25px]">
								<button
									onClick={() => halndleAddCart(product)}
									className="bg-redPrimario text-white text-[18px] h-[40px] max-w-[220px] w-full rounded-[15px]"
								>
									Agregar
								</button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="h-[460px] flex justify-center items-center">
					<Image
						src="/loaders/spinning-circles.svg"
						alt="skeleton"
						width={50}
						height={50}
						className="mx-auto w-20 h-20 "
					/>
				</div>
			)}

			<ModalProductPage />
		</div>
	);
}
