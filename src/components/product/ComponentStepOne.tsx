import CardListModalPage from './CardsListModal';

export default function ComponentStepOnePage({
	handleAddProduct,
	category,
	title,
}: any) {
	return (
		<div className="border-t-2 border-[#d9d9d9] pt-[25px] h-[510px]  overflow-y-scroll pr-4 ">
			<div className="flex justify-between items-center">
				<h3 className="text-[#4c4c4c] text-[22px]">{title}</h3>

				{/* <p className="p-2 bg-red-500 text-white text-[12px]">
								Obligatorio
							</p> */}
			</div>
			<div className="mb-8 mt-[5px]">
				<div className="flex gap-10 items-center mb-5">
					<h3 className="text-[#2d5d2a] text-[16px]">platillos principales</h3>

					<p className=" text-[#4c4c4c] text-[12px] font-fontSecundario">
						Agrega mas platillos a tu pedido
					</p>
				</div>
				<CardListModalPage
					category={category}
					handleAddProduct={handleAddProduct}
				/>
			</div>
		</div>
	);
}
