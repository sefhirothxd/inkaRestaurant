import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	const inputStyle =
		'w-[360px] h-[50px] border-[1px] border-gray-300 rounded-[20px] px-4';

	return (
		<div className="flex bg-back-login object-cover bg-auto w-full min-h-screen bg-no-repeat justify-end relative">
			<Image
				className=" absolute top-0 left-16"
				src={'/trival.png'}
				alt="background"
				width={600}
				height={800}
			/>
			<div className="bg-white max-w-[500px] w-[600px] rounded-l-[30px] rounded-bl-[30px] flex justify-center items-center flex-col">
				<Image
					src={'/inkaflavors.svg'}
					alt="whatsapp"
					width={300}
					height={50}
					className="mb-[100px]"
				/>
				<form className="flex justify-center items-center flex-col gap-[38px] relative">
					<input className={inputStyle} type="text" placeholder="Usuario" />
					<input
						className={inputStyle}
						type="password"
						placeholder="Contraseña"
					/>
					<Link href="/dashboard/platos">
						<button className="w-[360px] h-[50px] bg-[#D80904] text-white rounded-[20px] font-bold">
							Acceder
						</button>
					</Link>
					<a href="#">¿Olvidaste tu contraseña?</a>
					<Image
						className="absolute -bottom-56 inset-x-auto"
						src={'/derechos.png'}
						alt="google"
						width={100}
						height={37}
					/>
				</form>
			</div>
		</div>
	);
}
