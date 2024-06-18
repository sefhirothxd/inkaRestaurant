import Image from 'next/image';

export default function CardProductCartCantPage({ product }: any) {
	return (
		<div className="bg-white p-5 rounded-[10px] flex items-center  w-full max-w-[930px] shadow-lg">
			<Image
				className="rounded-[10px] max-h-[200px] max-w-[250px] w-full object-cover mr-[60px] "
				src={`/imgs/${product.image}.webp`}
				alt="icono de carrito"
				width={250}
				height={200}
			/>
			<div className="border-l-2 border-r-sky-200 pl-[60px] w-full">
				<div className="flex items-center gap-2 justify-end">
					<Image
						src={'/tacho.svg'}
						alt="icono de eliminar"
						width={16}
						height={19}
					/>
					<p>Eliminar</p>
				</div>
				<div className="w-[70%] max-w-[250px]">
					<h3 className="text-[18px] font-fontPrincipal mb-[15px] mt-2 font-semibold">
						{product?.name}
					</h3>
					<p className="text-[14px] text-justify  leading-[25px] my-[10px]">
						{product?.description}
					</p>
				</div>
				<div className="flex items-center justify-between mt-8">
					<p className="text-[#2d5d2a] text-[22px] font-extrabold">
						$ {product?.price}
					</p>
					<div className="flex items-center gap-4">
						<div className="bg-[#d9d9d9] text-secondary text-xl px-2 rounded">
							-
						</div>
						<div className=" text-secondary text-xl ">1</div>
						<div className="bg-[#d9d9d9] text-secondary text-xl px-2 rounded">
							+
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
