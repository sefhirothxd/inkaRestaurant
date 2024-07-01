import Image from 'next/image';

interface Props {
	text: string;
}

export default function FranjaNegraPage({ text }: Props) {
	return (
		<div className="bg-black  text-white text-sm text-center  md:text-2xl p-2 uppercase font-bold flex justify-center">
			<div className="flex items-center gap-4">
				<Image src={'/delivery.svg'} alt="logo" width={50} height={30} />
				<h2>{text}</h2>
			</div>
		</div>
	);
}
