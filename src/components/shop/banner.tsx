'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
export default function BannerPage() {
	const [activeImage, setActiveImage] = useState(0);
	const images = [
		'/banner1.webp',
		'/banner2.webp',
		'/banner3.webp',
		'/banner4.webp',
	];
	return (
		<div>
			<div className="bg-black  text-white text-2xl p-2 uppercase font-bold flex justify-center">
				<div className="flex items-center gap-4">
					<Image src={'delivery.svg'} alt="logo" width={50} height={30} />
					<h2>Delivery gratis todos los dias - exclusivo en web</h2>
				</div>
			</div>
			<div className="relative w-full md:h-[400px] sm:h-60 h-40 overflow-hidden">
				<img
					src={images[activeImage]}
					alt="Imagen del banner"
					className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
				/>
				<div className="absolute w-full  flex justify-between items-center h-full p-4">
					<button
						className={`flex items-center justify-center w-[41px] font-bold text-lg h-[41px] rounded-full ${'bg-gray-200 text-gray-500'}`}
						onClick={() =>
							setActiveImage(
								activeImage === 0 ? images.length - 1 : activeImage - 1
							)
						}
					>
						{'<'}
					</button>
					<button
						className={`flex items-center justify-center w-[41px] h-[41px] font-bold text-lg rounded-full ${'bg-gray-200 text-gray-500'}`}
						onClick={() =>
							setActiveImage(
								activeImage === images.length - 1 ? 0 : activeImage + 1
							)
						}
					>
						{'>'}
					</button>
				</div>
			</div>
		</div>
	);
}
