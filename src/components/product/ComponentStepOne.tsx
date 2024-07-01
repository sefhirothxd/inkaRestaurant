import CardListModalPage from './CardsListModal';

export default function ComponentStepOnePage({ category, title }: any) {
	return (
		<div className="border-t-2 border-[#d9d9d9] pt-[25px] md:h-[510px] h-[300px]  overflow-y-scroll pr-4 ">
			<div className="flex justify-between items-center">
				<h3 className="text-blackPrimario text-[22px]">{title}</h3>

				{/* <p className="p-2 bg-red-500 text-white text-[12px]">
								Obligatorio
							</p> */}
			</div>
			<div className="mb-8 mt-[5px]">
				<div className="flex gap-10 items-center mb-5">
					<h3 className="text-blackPrimario text-[16px]">
						platillos principales
					</h3>

					<p className=" text-[#4c4c4c] text-[12px] font-fontSecundario sm:block hidden">
						Agrega mas platillos a tu pedido
					</p>
				</div>
				<CardListModalPage category={category} />
			</div>
		</div>
	);
}
