import Image from 'next/image';

export default function CardProductCantPage({
	product,
	deleteProduct,
	handleAddProduct,
	deleteByProduct,
}: any) {
	return (
		<div className="bg-white p-5 rounded-[10px] flex items-center  w-full  shadow-lg mb-4 gap-4">
			<Image
				className="rounded-[10px] max-h-[50px] max-w-[60px] w-full object-cover mr-[1px] "
				src={`/imgs/${product.image}.webp`}
				alt="icono de carrito"
				width={250}
				height={200}
			/>
			<div className=" pl-[1px] w-full">
				<div className="flex items-center gap-2 justify-end">
					<Image
						src={'/tacho.svg'}
						alt="icono de eliminar"
						width={16}
						height={19}
					/>
					<button onClick={() => deleteByProduct(product)} className="text-sm">
						Eliminar
					</button>
				</div>
				<div className="w-[70%] max-w-[250px]">
					<h3 className="text-[14px] font-fontPrincipal mb-[15px] mt-2 font-semibold">
						{product?.name}
					</h3>
					<p className="text-[12px] text-justify my-[10px]">
						{product?.description}
					</p>
				</div>
				<div className="flex items-center justify-between mt-8">
					<p className="text-[#2d5d2a] text-[22px] font-extrabold">
						$ {product?.price * product?.quantity}
					</p>
					<div className="flex items-center gap-4">
						<button
							onClick={() => deleteProduct(product)}
							className="bg-[#d9d9d9] text-secondary text-xl px-2 rounded"
						>
							-
						</button>
						<div className=" text-secondary text-xl "> {product?.quantity}</div>
						<button
							onClick={() => handleAddProduct(product)}
							className="bg-[#d9d9d9] text-secondary text-xl px-2 rounded"
						>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
