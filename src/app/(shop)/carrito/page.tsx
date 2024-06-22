import CardProductCartCantPage from '@/components/shop/cardProductCant';
import Image from 'next/image';
import Link from 'next/link';

export default function CarritoPage() {
	return (
		<div className="bg-[#F5F5F5] max-w-[1400px] w-full mx-auto">
			<div className="w-full">
				<div className=" font-fontSecundario">
					<Link href={'/'}>
						<button className="flex items-center mt-[48px] mb-[30px]">
							<div className=" flex justify-center items-center  text-white rounded-full bg-[#FF0000] w-[24px] h-[24px] mr-2">
								{'<'}
							</div>
							<p className="text-[20px]">Volver</p>
						</button>
					</Link>
				</div>
				<div className="flex gap-4 items-center w-full ">
					<div className="w-full max-w-[930px]">
						<div className="flex items-center gap-2 mb-4">
							<Image
								src={'/carrito.svg'}
								alt="icono de carrito"
								width={34}
								height={23}
							/>
							<h2 className="text-[30px]  font-semibold text-primary font-fontPrincipal">
								Carrito
							</h2>
						</div>
						<CardProductCartCantPage />
					</div>
					<div className="w-full max-w-[30%]">
						<h2 className="mb-4 text-[30px]  font-semibold text-primary font-fontPrincipal">
							Resumen
						</h2>
						<div className="p-5 min-h-[240px] w-full bg-white"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
