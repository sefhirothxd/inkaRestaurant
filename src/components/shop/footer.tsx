import Image from 'next/image';
import Link from 'next/link';

export default function FooterPage() {
	return (
		<div className="bg-blackFontPrimario ">
			<div className="max-w-[1440px] mx-auto">
				<div className="text-white grid md:grid-cols-4 grid-cols-2 w-full font-fontSecundario mb-5 md:mb-0 ">
					<div className="pt-[40px] pl-[30px] pb-[10px] pr-[10px]">
						<Link href={'/'}>
							<Image
								src={'/inkaflavorsBlanco.svg'}
								alt="logo"
								width={110}
								height={50}
							/>
						</Link>
						<div className="mt-4">
							<h3 className="md:text-lg text-base font-bold mb-[15px] ">
								¿Quieres ser el primero en enterarte de nuestras promos? ¡Claro
								que las quieres!
							</h3>
							<p className="text-[10px] leading-[14px]">
								Al registrarme, acepto que me manden comunicaciones
								publicitarias de Inka flavors por correo electrónico o mensaje
								de texto SMS
							</p>
						</div>
					</div>
					<div className="pt-[40px] pl-[20px] pr-[30px] pb-[50px]">
						<h3 className="text-[17px] text-white font-semibold mb-[10px]">
							Contáctanos
						</h3>
						<ul>
							<li className="flex items-center gap-2  mb-[10px]">
								<Image
									src="/chat.svg"
									alt="icono de chat"
									width={16}
									height={15}
								/>
								<p className="text-[14px]">Chatea con nosotros</p>
							</li>
							<li className="flex items-center gap-2">
								<Image
									src="/audifono.svg"
									alt="icono de audifono"
									width={16}
									height={15}
								/>
								<p className="text-[16px]">Llámanos al (01-606-0000)</p>
							</li>
						</ul>
					</div>
					<div className="py-[40px] px-[20px] hidden md:block">
						<div className="mb-[10px]">
							<h3 className="text-[17px] font-semibold mb-[10px]">
								Sobre Nosotros
							</h3>
							<div className="text-[16px] font-normal">
								<p>Nosotros</p>
								<p>Nuestros locales</p>
							</div>
						</div>
						<div>
							<h3 className="text-[17px] font-semibold mb-[10px]">
								Servicio al Cliente
							</h3>
							<div className="text-[16px] font-normal">
								<p>Comprobante electrónico</p>
								<p>Derechos Arco</p>
							</div>
						</div>
					</div>
					<div className="pt-[40px] pb-[50px] pr-[25px]  md:pr-[50px] pl-[30px] hidden md:block">
						<p className="text-[14px] font-semibold">
							Ofertas válidas por tiempo limitado en todos los Inka
							flavors&apos;s de la cadena. Aplican restricciones por
							disponibilidad de insumos. Los precios pueden variar. Promociones
							no válidas con otros cupones o descuentos. Algunas ofertas pueden
							estar disponibles únicamente en línea. Ingredientes adicionales
							limitados para asegurar calidad de horneado. Área de entrega
							limitada para delivery.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-blackFontPrimario h-[60px] py-2 mx-auto flex justify-center">
				<div className="flex items-center gap-5 mr-4">
					<p className="text-[13px] text-white font-bold">Síguenos en:</p>
					<Image src="/fb.svg" alt="fb" width={25} height={25} />
					<Image src="/youtube.svg" alt="youtube" width={25} height={25} />
					<Image src="/x.svg" alt="x" width={25} height={25} />
					<Image src="/instagram.svg" alt="instagram" width={25} height={25} />
				</div>
				<div className="border border-white py-2 px-6  items-center gap-4 rounded-[10px] mr-12 hidden md:flex">
					<p className="text-[13px] text-white">Medios de pago</p>
					<Image
						className="bg-white rounded-[5px] px-[10px] h-[25px]"
						src="/visa.svg"
						alt="visa"
						width={45}
						height={25}
					/>
					<Image
						className="bg-white rounded-[5px] px-[10px] h-[25px]"
						src="/masterCard.svg"
						alt="master card"
						width={45}
						height={25}
					/>
					<Image
						className="bg-white rounded-[5px] px-[10px] h-[25px]"
						src="/american.svg"
						alt="american express"
						width={45}
						height={25}
					/>
				</div>
				<div className="items-center gap-2 hidden md:flex">
					<Image
						src="/candado.svg"
						alt="american express"
						width={16}
						height={23}
						className="w-[16px] h-[23px]"
					/>
					<p className="text-[13px] text-white">Tienda 100% segura</p>
				</div>
			</div>
		</div>
	);
}
