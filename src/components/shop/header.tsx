import WhatsappIcon from './icon/whatsAppBtn';
import PhoneIcon from './icon/phone';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderPage() {
	return (
		<div className="max-w-[1400px] mx-auto  p-2 h-[70px] flex justify-between items-center">
			<Link href={'/'}>
				<Image src={'/papajhon.svg'} alt="logo" width={110} height={50} />
			</Link>
			<div className="flex items-center gap-2 ">
				<a href="https://wa.me/51956769838">
					<div className="">
						<WhatsappIcon />
					</div>
				</a>
				<div className="flex items-center">
					<PhoneIcon />
					<div className="flex flex-col text-[#00795b] font-bold text-sm">
						<span className="">Llámanos</span>
						<span className="">016060000</span>
					</div>
				</div>
			</div>
			<div>
				<Image
					src={'/carrito.svg'}
					alt="carrito de compra"
					width={33}
					height={33}
				/>
			</div>
		</div>
	);
}
