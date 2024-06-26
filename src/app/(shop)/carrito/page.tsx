'use client';
import CardProductCartCantPage from '@/components/shop/cardProductCant';
import { useCartStore } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CarritoPage() {
	const { cart, removeCart, addCart, minusQuantity, plusQuantity } =
		useCartStore();

	// reditection
	const router = useRouter();

	const paymentStripe = async () => {
		try {
			const response = await fetch(
				'https://backend-inkarestaurant-production.up.railway.app/api/create-checkout-session',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ items: cart }),
				}
			);
			const url = await response.json();
			localStorage.removeItem('cart');

			router.push(url);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="bg-[#F5F5F5] max-w-[1400px] w-full mx-auto px-2 pb-10">
			<div className="w-full">
				<div className=" font-fontSecundario">
					<Link href={'/'}>
						<button className="flex items-center md:mt-[48px] mb-[30px] mt-[24px]">
							<div className=" flex justify-center items-center  text-white rounded-full bg-[#FF0000] w-[24px] h-[24px] mr-2">
								<Image
									className="mr-[2px]"
									src={'/flechaIzquierda.svg'}
									alt="flecha izquierda"
									width={8}
									height={8}
								/>
							</div>
							<p className="text-[20px]">Volver</p>
						</button>
					</Link>
				</div>
				<div className="flex gap-4 items-start w-full h-auto flex-wrap-reverse lg:flex-nowrap lg:h-[780px] overflow-hidden ">
					<div className="w-full max-w-[930px]">
						<div className="flex items-center gap-2 mb-4">
							<Image
								src={'/carrito.svg'}
								alt="icono de carrito"
								width={34}
								height={23}
							/>
							<h2 className="text-[30px]  font-semibold text-blackFontPrimario font-fontPrincipal">
								Carrito
							</h2>
						</div>
						<CardProductCartCantPage
							cart={cart}
							removeCart={removeCart}
							minusQuantity={minusQuantity}
							plusQuantity={plusQuantity}
						/>
					</div>
					<div className="w-full  lg:max-w-[30%]">
						{cart.length > 0 && (
							<div className="">
								<h2 className="mb-4 text-[30px]  font-semibold text-blackFontPrimario font-fontPrincipal">
									Resumen
								</h2>
								<div className="p-5 min-h-[240px] w-full bg-white rounded-[10px] shadow-lg font-fontPrincipal2 text-base">
									<div className="flex flex-col gap-4  mb-4">
										<div className="flex justify-between items-center">
											<p>Subtotal</p>
											<p>
												$
												{cart.reduce(
													(acc: number, product: any) =>
														acc + product.price * product.quantity!,
													0
												)}
											</p>
										</div>
										<div className="flex justify-between items-center">
											<p>Descuento</p>
											<p>$ 0</p>
										</div>
										<div className="flex justify-between items-center">
											<p>Delivery</p>
											<p>$ 0</p>
										</div>
										<hr />
										<div className="flex justify-between items-center">
											<p>Total a pagar</p>
											<p>
												$
												{cart
													.reduce(
														(acc: number, product: any) =>
															acc + product.price * product.quantity!,
														0
													)
													.toFixed(2)}
											</p>
										</div>
									</div>
									<button
										onClick={() => paymentStripe()}
										className="bg-[#FF0000] font-semibold text-white text-[18px] w-full rounded-[10px] py-[6px] mb-5"
									>
										Ir a pagar
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
