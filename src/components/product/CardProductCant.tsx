import Image from 'next/image';

export default function CardProductCantPage({
	product,
	removeCart,
	plusQuantity,
	minusQuantity,
}: any) {
	return (
		<div className="bg-white p-5 rounded-[10px] flex items-center  w-full  shadow-lg mb-4 gap-4">
			<Image
				className="rounded-[10px] max-w-[150px] h-auto md:max-h-[50px] md:max-w-[60px] w-full object-cover mr-[1px] hidden min-[420px]:block "
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
					<button onClick={() => removeCart(product.id)} className="text-sm">
						Eliminar
					</button>
				</div>
				<div className="w-full max-w-[250px]">
					<h3 className="text-[14px] font-fontPrincipal mb-[15px] mt-2 font-semibold">
						{product?.name}
					</h3>
					<p className="text-[12px] text-justify my-[10px]">
						{product?.description}
					</p>
				</div>
				<div className="flex items-center justify-between mt-8 flex-wrap">
					<p className="text-redPrimario text-[22px] font-extrabold">
						$ {product?.price * product?.quantity}
					</p>
					<div className="flex items-center gap-4">
						<button
							onClick={() => minusQuantity(product.id)}
							className="bg-[#d9d9d9] text-secondary text-xl px-2 rounded"
						>
							-
						</button>
						<div className=" text-secondary text-xl "> {product?.quantity}</div>
						<button
							onClick={() => plusQuantity(product.id)}
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
