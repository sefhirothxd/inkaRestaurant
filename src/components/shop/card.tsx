import Image from 'next/image';
import Link from 'next/link';

export default function CardPage({ product }: any) {
	return (
		<div className="max-w-[420px] w-full h-[190px] p-3 flex items-center gap-[10px]  bg-white rounded-[10px]">
			<div className="w-1/2">
				<div>
					<h3 className="text-[15px] font-semibold text-[#4c4c4c] mb-[14px] font-fontPrincipal line-clamp-1">
						{product?.name}
					</h3>
					<p className="text-[12px]  text-[#4c4c4c] mb-[14px] leading-4 font-fontSecundario">
						{product?.description}
					</p>
				</div>
				<span className="text-[#2d5d2a] font-semibold text-[17px] font-fontPrincipal">
					${product?.price}
				</span>
			</div>
			<div className="w-1/2 flex flex-col justify-between h-full ">
				<Image
					className="rounded-[10px] max-h-[107px] object-cover w-full "
					src={`/imgs/${product?.image}.webp`}
					alt="imagen de comida"
					width={165}
					height={107}
				/>
				<Link href={`producto/${product?.id}`}>
					<button className="bg-[#2d5d2a] text-xs font-fontPrincipal hover:bg-[#b5dd46]  transition-all hover:text-[#2d5d2a] text-[#b5dd46] font-semibold w-full rounded-lg py-[7px] px-[10px] cursor-pointer">
						Comprar
					</button>
				</Link>
			</div>
		</div>
	);
}
