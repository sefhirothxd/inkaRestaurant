import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';

export default function CardProducModaltPage({
	product,
	handleAddProduct,
}: any) {
	const [productsSelected, setProductsSelected] = useState(false);

	const selectProduct = (product: any) => {
		// console.log(product);
		setProductsSelected(!productsSelected);
		let newProduct = { ...product };

		if (newProduct.quantity) {
			newProduct.quantity += 1;
		} else {
			newProduct = { ...product, quantity: 1 };
		}

		handleAddProduct(newProduct);
	};

	return (
		<div
			onClick={() => selectProduct(product)}
			className={`py-[10px] border-[#e5e5e5] border-[2px] w-[135px] gap-y-4 rounded-[15px] justify-between flex flex-col items-center`}
		>
			<Image
				className="w-[90px] h-[90px] object-cover rounded-[10px]"
				src={`/imgs/${product?.image}.webp`}
				alt="icono de promocion"
				width={130}
				height={90}
			/>
			<p className="text-[10px]   text-[#2d5d2a] w-[90px] text-center line-clamp-2">
				{product?.name}
			</p>
		</div>
	);
}
