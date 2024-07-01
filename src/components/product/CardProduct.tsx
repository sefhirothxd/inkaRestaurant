import Image from 'next/image';

export default function CardProductPage() {
	return (
		<div className=" py-[10px] border-[#e5e5e5]  border-[2px] w-[135px] gap-y-4 rounded-[15px] justify-between flex flex-col items-center ">
			<Image
				className="w-[90px] h-[90px]"
				src={'/pizza.webp'}
				alt="icono de promocion"
				width={130}
				height={90}
			/>
			<p className="text-[10px]   text-redPrimario w-[90px] text-center">
				Pizza Americana Grande
			</p>
		</div>
	);
}
