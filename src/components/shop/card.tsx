import Image from 'next/image';
import Link from 'next/link';

export default function CardPage() {
	return (
		<div className="max-w-[453px] h-[190px] p-3 flex items-center gap-[10px]  bg-white rounded-[10px]">
			<div className="w-1/2">
				<div>
					<h3 className="text-[15px] font-semibold text-[#4c4c4c] mb-[14px] font-fontPrincipal">
						Papadia Champiñones & Queso
					</h3>
					<p className="text-[12px]  text-[#4c4c4c] mb-[14px] leading-4 font-fontSecundario">
						Mitad Sandwich, mitad pizza: Champiñones, Pimientos Verdes,
						Cebolla...
					</p>
				</div>
				<span className="text-[#2d5d2a] font-semibold text-[17px] font-fontPrincipal">
					$17.90
				</span>
			</div>
			<div className="w-1/2 flex flex-col justify-between h-full ">
				<Image
					className="rounded-[10px] w-full"
					src="https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/p/r/productos_papadias_champqueso_400x253.webp"
					alt="imagen de comida"
					width={165}
					height={107}
				/>
				<Link href={'producto/1'}>
					<button className="bg-[#2d5d2a] text-xs font-fontPrincipal hover:bg-[#b5dd46]  transition-all hover:text-[#2d5d2a] text-[#b5dd46] font-semibold w-full rounded-lg py-[7px] px-[10px] cursor-pointer">
						Comprar
					</button>
				</Link>
			</div>
		</div>
	);
}
