import CardProductCartCantPage from '@/components/shop/cardProductCant';
import Image from 'next/image';
import Link from 'next/link';

export default function CarritoPage() {
	return (
		<div className="bg-[#F5F5F5] max-w-[1400px] w-full mx-auto">
			<div className="">
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
				<div>
					<div>
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
					<div></div>
				</div>
				<div></div>
			</div>
		</div>
	);
}
