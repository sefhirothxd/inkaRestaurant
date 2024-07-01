'use client';

import WhatsappIcon from './icon/whatsAppBtn';
import PhoneIcon from './icon/phone';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store';
import clsx from 'clsx';

export default function HeaderPage() {
	const { cart } = useCartStore();

	return (
		<div className="bg-white w-full">
			<div className="max-w-[1400px] mx-auto  p-2 h-[70px] flex justify-between items-center ">
				<Link href={'/'}>
					<Image src={'/inkaflavors.svg'} alt="logo" width={110} height={50} />
				</Link>
				<div className="flex items-center gap-2 ">
					<a href="https://wa.me/51956769838">
						<div className="">
							<WhatsappIcon />
						</div>
					</a>
					<div className="sm:flex items-center hidden">
						<PhoneIcon />
						<div className="flex flex-col text-black font-bold text-sm">
							<span className="">Llámanos</span>
							<span className="">016060000</span>
						</div>
					</div>
				</div>
				<div className="relative font-fontPrincipal2">
					<Link
						href={'/carrito'}
						className={clsx(
							'flex  px-4 rounded-[10px] py-2 items-center gap-2 cursor-pointer bg-redPrimario text-white'
						)}
					>
						<Image
							src={'/carritoBlanco.svg'}
							alt="carrito de compra"
							width={22}
							height={21}
						/>
						{cart.length > 0 && (
							<div className=" text-white  flex justify-center items-center">
								<p className=" text-base font-bold">
									${' '}
									{cart.reduce(
										(acc, item) => acc + item.quantity! * item.price,
										0
									)}
								</p>
							</div>
						)}
					</Link>
					{cart.length > 0 && (
						<div className="absolute -top-2 -right-2 bg-[#FF0000] border-[1px] border-black text-white rounded-full  w-[24px] h-[24px] flex justify-center items-center">
							<p>{cart.length > 0 && cart.length}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
