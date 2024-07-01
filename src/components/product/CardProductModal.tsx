import Image from 'next/image';
import clsx from 'clsx';
import { useCartStore } from '@/store';

export default function CardProducModaltPage({ product }: any) {
	const { addCart, cart } = useCartStore();

	const selectProduct = (product: any) => {
		let newProduct = { ...product };

		if (newProduct.quantity) {
			newProduct.quantity += 1;
		} else {
			newProduct = { ...product, quantity: 1 };
		}
		addCart(newProduct);
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
			<p className="text-[10px]   text-blackPrimario w-[90px] text-center line-clamp-2">
				{product?.name}
			</p>
		</div>
	);
}
