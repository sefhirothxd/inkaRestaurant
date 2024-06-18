'use client';
import clsx from 'clsx';
import Image from 'next/image';
import CardProductCantPage from '@/components/product/CardProductCant';

import { useUIStore, useProductsStore } from '@/store';
import CardListModalPage from './CardsListModal';
import { use, useEffect, useState } from 'react';

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
	const [productsSelected, setProductsSelected] = useState([] as Product[]);

	const isStateModal = useUIStore((state) => state.isSideMenuOpen);
	const isModalClose = useUIStore((state) => state.closeModalMenu);

	const handleAddProduct = (product: any) => {
		const productExist = productsSelected.find(
			(item) => item.id === product.id
		);

		if (productExist) {
			const newProducts = productsSelected.map((item) =>
				item.id === product.id
					? { ...item, quantity: item.quantity! + 1 }
					: item
			);
			return setProductsSelected(newProducts);
		}

		setProductsSelected([...productsSelected, product]);
	};

	const deleteProduct = (product: any) => {
		const productExist = productsSelected.find(
			(item) => item.id === product.id
		);

		if (productExist && productExist.quantity! > 1) {
			const newProducts = productsSelected.map((item) =>
				item.id === product.id
					? { ...item, quantity: item.quantity! - 1 }
					: item
			);
			return setProductsSelected(newProducts);
		} else {
			const newProducts = productsSelected.filter(
				(item) => item.id !== product.id
			);
			return setProductsSelected(newProducts);
		}
		// console.log(productsSelected);
	};

	const deleteByProduct = (product: any) => {
		const newProducts = productsSelected.filter(
			(item) => item.id !== product.id
		);
		return setProductsSelected(newProducts);
	};

	useEffect(() => {
		const listContainer = document.querySelector('#listContainer');
		if (listContainer) {
			listContainer.scrollTo({
				top: listContainer.scrollHeight,
				behavior: 'smooth',
			});
		}
	}, [productsSelected]);

	return (
		<div
			className={clsx(
				`absolute bg-black bg-opacity-75 min-h-screen min-w-full -top-[70px] left-0 flex justify-center items-center `,
				{
					hidden: !isStateModal,
					flex: isStateModal,
				}
			)}
		>
			<div className="overflow-hidden max-w-[85%] w-full bg-white  gap-[64px] rounded-[15px] font-fontPrincipal flex justify-between  pt-[32px]  px-[24px] md:px-[48px] pb-[16px] ">
				<div className="w-[70%]">
					<div className="border-b-[12px] border-[#d9d9d9] w-full flex justify-between items-center ">
						<div className="bg-[#b5dd46] rounded-full text-[#2d5d2a]  text-xl flex justify-center items-center max-w-[44px] w-full h-[44px]">
							1
						</div>
						<div className="bg-[#d9d9d9] rounded-full text-white  text-xl flex justify-center items-center max-w-[44px] w-full h-[44px]">
							2
						</div>
						<div className="bg-[#d9d9d9] rounded-full text-white  text-xl flex justify-center items-center max-w-[44px] w-full h-[44px]">
							3
						</div>
						<div className="bg-[#d9d9d9] rounded-full text-white  text-xl flex justify-center items-center max-w-[44px] w-full h-[44px]">
							4
						</div>
					</div>
					<div className=" font-fontSecundario">
						<button
							onClick={() => isModalClose()}
							className="flex items-center mt-[48px] mb-[30px]"
						>
							<div className=" flex justify-center items-center  text-white rounded-full bg-[#FF0000] w-[24px] h-[24px] mr-2">
								{'<'}
							</div>
							<p className="text-[20px]">Volver</p>
						</button>
					</div>
					<div className="border-t-2 border-[#d9d9d9] pt-[25px] h-[510px]  overflow-y-scroll pr-4 ">
						<div className="flex justify-between items-center">
							<h3 className="text-[#4c4c4c] text-[22px]">Platos adicionales</h3>

							{/* <p className="p-2 bg-red-500 text-white text-[12px]">
								Obligatorio
							</p> */}
						</div>
						<div className="mb-8 mt-[5px]">
							<div className="flex gap-10 items-center mb-5">
								<h3 className="text-[#2d5d2a] text-[16px]">
									platillos principales
								</h3>

								<p className=" text-[#4c4c4c] text-[12px] font-fontSecundario">
									Agrega mas platillos a tu pedido
								</p>
							</div>
							<CardListModalPage
								products={products}
								category={1}
								handleAddProduct={handleAddProduct}
							/>
						</div>
						{/* <div className="mb-8">
							<div className="flex gap-10 items-center mb-5">
								<h3 className="text-[#2d5d2a] text-[16px]">Especialidad</h3>

								<p className=" text-[#4c4c4c] text-[12px] font-fontSecundario">
									Las de siempre
								</p>
							</div>
							<div className="grid grid-cols-1 place-items-center sm:place-items-stretch gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
								<CardProductPage />
								<CardProductPage />
								<CardProductPage />
								<CardProductPage />
							</div>
						</div>
						<div className="mb-8">
							<div className="flex gap-10 items-center mb-5">
								<h3 className="text-[#2d5d2a] text-[16px]">Signature</h3>

								<p className=" text-[#4c4c4c] text-[12px] font-fontSecundario">
									Exclusivas de Papa Johns
								</p>
							</div>
							<div className="grid grid-cols-1 place-items-center sm:place-items-stretch gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
								<CardProductPage />
								<CardProductPage />
								<CardProductPage />
								<CardProductPage />
								<CardProductPage />
								<CardProductPage />
								<CardProductPage />
							</div>
						</div> */}
					</div>
				</div>
				<div className="relative w-[31%] flex justify-between flex-col items-start ">
					<button
						className="absolute text-[14px] font-fontPrincipal2 -top-4 -right-8 bg-[#EF4444] text-white w-8 h-8 rounded-full"
						onClick={() => isModalClose()}
					>
						X
					</button>
					<div className="h-full w-full">
						<h3 className="text-[#4c4c4c] text-[22px] mb-[16px]">
							Productos seleccionados
						</h3>
						<div
							className="overflow-y-scroll max-h-[510px] mb-5 w-full min-h-[510px]"
							id="listContainer"
						>
							{productsSelected.map((product) => (
								<CardProductCantPage
									key={product.id}
									product={product}
									deleteProduct={deleteProduct}
									handleAddProduct={handleAddProduct}
									deleteByProduct={deleteByProduct}
								/>
							))}
						</div>

						<div className="">
							<button className="bg-[#2d5d2a] text-[#b5dd46] text-[18px] w-full rounded-[10px] py-[6px]">
								siguiente
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
