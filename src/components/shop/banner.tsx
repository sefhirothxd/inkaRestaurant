'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import FranjaNegraPage from './franjaNegra';
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
			<FranjaNegraPage
				text={'Delivery gratis todos los dias - exclusivo en web'}
			/>
			<div className="relative w-full md:h-[400px] sm:h-60 h-40 overflow-hidden max-w-[1400px] mx-auto rounded-[15px] sm:rounded-[52px] mt-[32px] ">
				<Image
					src={images[activeImage]}
					alt="Imagen del banner"
					className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
					width={1400}
					height={77}
				/>
				<div className="absolute w-full  flex justify-center items-end  h-full p-4 gap-2">
					{images.map((image, index) => (
						<div
							key={index}
							onClick={() => setActiveImage(index)}
							className={`cursor-pointer w-[18px] h-[7px]   sm:w-[37px] sm:h-[14px] rounded-full transition-all  ${
								activeImage === index
									? 'bg-[#fff] bg-opacity-100 '
									: 'bg-[#fff] bg-opacity-50'
							}`}
						></div>
					))}
				</div>
			</div>
		</div>
	);
}
