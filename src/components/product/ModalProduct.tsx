'use client';
import clsx from 'clsx';
import Image from 'next/image';
import CardProductCantPage from '@/components/product/CardProductCant';
import { useRouter } from 'next/navigation';
import { useUIStore, useProductsStore, useCartStore } from '@/store';
import CardListModalPage from './CardsListModal';
import { useEffect, useState } from 'react';
import ComponentStepOnePage from './ComponentStepOne';

interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	categoryId: number;
	quantity?: number;
}

export default function ModalProductPage() {
	const { product, products } = useProductsStore();
	const { cart, minusQuantity, plusQuantity, removeCart } = useCartStore();
	const [componentNumber, setComponentNumber] = useState(0 as number);
	const isStateModal = useUIStore((state) => state.isSideMenuOpen);
	const isModalClose = useUIStore((state) => state.closeModalMenu);

	const router = useRouter();

	const handleAddCart = () => {
		isModalClose();
		router.push('/carrito');
	};

	const handleNextStep = () => {
		if (componentNumber === 3) {
			return;
		}
		setComponentNumber(componentNumber + 1);
	};

	const handleBeforeStep = () => {
		if (componentNumber === 0) {
			setComponentNumber(0);
			return isModalClose();
		}
		setComponentNumber(componentNumber - 1);
	};

	useEffect(() => {
		const listContainer = document.querySelector('#listContainer');
		if (listContainer) {
			listContainer.scrollTo({
				top: listContainer.scrollHeight,
				behavior: 'smooth',
			});
		}
	}, []);

	return (
		<div
			className={clsx(
				`absolute bg-black bg-opacity-75 min-h-full min-w-full top-0 left-0 flex justify-center items-center `,
				{
					hidden: !isStateModal,
					flex: isStateModal,
				}
			)}
		>
			<div className="overflow-hidden lg:max-w-[85%] w-[90%] bg-white  gap-[64px] rounded-[15px] font-fontPrincipal flex-wrap-reverse md:flex-nowrap flex justify-between  pt-[32px] px-[12px]  md:px-[24px] xl:px-[48px] pb-[16px] ">
				<div className="lg:w-[70%] md:w-[60%] w-full">
					<div className="border-b-[12px] border-[#d9d9d9] w-full flex justify-between items-center ">
						<div
							className={clsx(
								' rounded-full  text-xl flex justify-center items-center max-w-[44px] w-full h-[44px]',
								{
									'bg-redPrimario text-white': componentNumber === 0,
									'bg-[#d9d9d9] text-white': componentNumber !== 0,
								}
							)}
						>
							1
						</div>
						<div
							className={clsx(
								' rounded-full  text-xl flex justify-center items-center max-w-[44px] w-full h-[44px]',
								{
									'bg-redPrimario text-white': componentNumber === 1,
									'bg-[#d9d9d9] text-white': componentNumber !== 1,
								}
							)}
						>
							2
						</div>
						<div
							className={clsx(
								' rounded-full   text-xl flex justify-center items-center max-w-[44px] w-full h-[44px]',
								{
									'bg-redPrimario text-white': componentNumber === 2,
									'bg-[#d9d9d9] text-white': componentNumber !== 2,
								}
							)}
						>
							3
						</div>
						<div
							className={clsx(
								'rounded-full  text-xl flex justify-center items-center max-w-[44px] w-full h-[44px]',
								{
									'bg-redPrimario text-white': componentNumber === 3,
									'bg-[#d9d9d9] text-white': componentNumber !== 3,
								}
							)}
						>
							4
						</div>
					</div>
					<div className=" font-fontSecundario">
						<button
							onClick={() => handleBeforeStep()}
							className="flex items-center mt-[48px] mb-[30px]"
						>
							<div className=" flex justify-center items-center  text-white rounded-full bg-[#FF0000] w-[24px] h-[24px] mr-2">
								<Image
									className="mr-[2px]"
									src={'/flechaIzquierda.svg'}
									alt="flecha izquierda"
									width={8}
									height={8}
								/>
							</div>
							<p className="text-[20px]">Volver</p>
						</button>
					</div>
					{componentNumber === 0 && (
						<ComponentStepOnePage
							products={products}
							// handleAddProduct={handleAddProduct}
							category={1}
							title="Platos principales"
						/>
					)}

					{componentNumber === 1 && (
						<ComponentStepOnePage
							products={products}
							// handleAddProduct={handleAddProduct}
							category={2}
							title="Entradas"
						/>
					)}
					{componentNumber === 2 && (
						<ComponentStepOnePage
							products={products}
							// handleAddProduct={handleAddProduct}
							category={4}
							title="Bebidas"
						/>
					)}
					{componentNumber === 3 && (
						<ComponentStepOnePage
							products={products}
							// handleAddProduct={handleAddProduct}
							category={3}
							title="Postres"
						/>
					)}
				</div>
				<div className="relative lg:w-[31%] md:w-[40%] w-full flex justify-between flex-col items-start ">
					<button
						className="absolute text-[14px] font-fontPrincipal2 -top-4 -right-2 sm:-right-3 lg:-right-5 bg-[#EF4444] text-white w-8 h-8 rounded-full"
						onClick={() => isModalClose()}
					>
						X
					</button>
					<div className="h-full w-full">
						<h3 className="text-[#4c4c4c] md:text-[22px] text-[18px] mb-[16px]">
							Productos seleccionados
						</h3>
						<div
							className="overflow-y-scroll h-[300px]  md:max-h-[510px] mb-5 w-full md:min-h-[510px]"
							id="listContainer"
						>
							{cart.map((product) => (
								<CardProductCantPage
									key={product.id}
									product={product}
									minusQuantity={minusQuantity}
									plusQuantity={plusQuantity}
									removeCart={removeCart}
								/>
							))}
						</div>

						<div className="">
							{componentNumber === 3 ? (
								<button
									disabled={cart.length === 0}
									onClick={() => handleAddCart()}
									className={clsx(
										'bg-[#FF0000] text-white text-[18px] w-full rounded-[10px] py-[6px] mb-5',
										{
											'bg-[#d9d9d9] text-white cursor-not-allowed':
												cart.length === 0,
										}
									)}
								>
									agregar al carrito $
									{cart.reduce(
										(acc, item) => acc + item.quantity! * item.price,
										0
									)}
								</button>
							) : (
								<button
									onClick={() => handleNextStep()}
									className="bg-redPrimario text-white text-[18px] w-full rounded-[10px] py-[6px]"
								>
									siguiente
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
