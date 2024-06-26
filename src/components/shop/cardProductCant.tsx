import Image from 'next/image';

interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	categoryId: number;
	quantity?: number;
}

export default function CardProductCartCantPage({
	cart,
	removeCart,
	minusQuantity,
	plusQuantity,
}: any) {
	return (
		<div className="overflow-x-auto sm:h-[700px] h-[300px] mb-0 lg:mb-0">
			{cart.length > 0 ? (
				cart.map((product: Product) => (
					<div
						key={product.id}
						className="bg-white p-2 sm:p-5 rounded-[10px] flex items-center  w-full max-w-[930px] shadow-lg mb-2"
					>
						<Image
							className="rounded-[10px] max-h-[200px] min-w-[150px] max-w-[250px] w-full object-cover  mr-[20px] lg:mr-[60px] "
							src={`/imgs/${product?.image}.webp`}
							alt="icono de carrito"
							width={250}
							height={200}
						/>
						<div className="border-l-2 border-r-sky-200 pl-[20px]  lg:pl-[60px] w-full">
							<div className="flex items-center gap-2 justify-end">
								<Image
									src={'/tacho.svg'}
									alt="icono de eliminar"
									width={16}
									height={19}
								/>
								<button
									onClick={() => removeCart(product?.id)}
									className="text-sm"
								>
									Eliminar
								</button>
							</div>
							<div className="lg:w-[70%] w-full max-w-[250px]">
								<h3 className="text-[18px] font-fontPrincipal mb-[15px] mt-2 font-semibold">
									{product?.name}
								</h3>
								<p className="text-[14px] text-justify  leading-[25px] my-[10px]">
									{product?.description}
								</p>
							</div>
							<div className="flex items-center justify-between mt-8 flex-wrap sm:flex-nowrap">
								<p className="text-redPrimario text-[22px] font-extrabold mb-2 sm:mb-0">
									$ {(product?.price * product?.quantity!).toFixed(2)}
								</p>
								<div className="flex items-center gap-4">
									<button
										onClick={() => minusQuantity(product?.id)}
										className="bg-[#d9d9d9] text-secondary text-xl px-2 rounded"
									>
										-
									</button>
									<div className=" text-secondary text-xl ">
										{product?.quantity}
									</div>
									<button
										onClick={() => plusQuantity(product?.id)}
										className="bg-[#d9d9d9] text-secondary text-xl px-2 rounded"
									>
										+
									</button>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<p>No hay productos en el carrito </p>
			)}
		</div>
	);
}
