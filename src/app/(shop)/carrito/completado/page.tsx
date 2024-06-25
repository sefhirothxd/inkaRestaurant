'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';

function ResultPayment() {
	const [data, setData] = useState<any>([]);
	const [items, setItems] = useState([]);

	const searchParams = useSearchParams();
	const search = searchParams.get('session_id');

	useEffect(() => {
		localStorage.removeItem('cart');
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://backend-inkarestaurant-production.up.railway.app/api/checkout-session/${search}`
				);
				const data = await response.json();
				setData(data[1]);
				setItems(data[0].data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<div className="">
			<h1 className=" text-center font-fontPrincipal text-[#00795b] text-3xl my-4">
				Payment Susseccful
			</h1>
			<div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto mb-5">
				<div className="flex items-center justify-between mb-8">
					<div className="flex items-center">
						<Image
							className="h-12 w-56"
							src="/inkaflavors.svg"
							alt="Logo"
							width={32}
							height={32}
						/>
					</div>
					<div className="text-gray-700">
						<div className="font-bold text-xl mb-2">INVOICE</div>
						<div className="text-sm">Date: 01/05/2023</div>
						<div className="text-sm">Invoice #: INV12345</div>
					</div>
				</div>
				<div className="border-b-2 border-gray-300 pb-8 mb-8">
					<h2 className="text-2xl font-bold mb-4">Bill To:</h2>
					<div className="text-gray-700 mb-2 capitalize">
						{data.customer_details?.name}
					</div>
					<div className="text-gray-700 mb-2">
						{data.customer_details?.address.line1}.
					</div>
					<div className="text-gray-700 mb-2">
						{data.customer_details?.address?.city},{' '}
						{data.customer_details?.address?.country}{' '}
						{data.customer_details?.address?.postal_code}
					</div>
					<div className="text-gray-700">{data.customer_details?.email}</div>
				</div>
				<table className="w-full text-left mb-8">
					<thead>
						<tr>
							<th className="text-gray-700 font-bold uppercase py-2">
								Description
							</th>
							<th className="text-gray-700 font-bold uppercase py-2">
								Quantity
							</th>
							<th className="text-gray-700 font-bold uppercase py-2">Price</th>
							<th className="text-gray-700 font-bold uppercase py-2">Total</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item: any) => (
							<tr key={item.id}>
								<td className="py-4 text-gray-700">{item.description}</td>
								<td className="py-4 text-gray-700">{item.quantity}</td>
								<td className="py-4 text-gray-700">
									${(item.amount_total / item.quantity / 100).toFixed(2)}
								</td>
								<td className="py-4 text-gray-700">
									${(item.amount_total / 100).toFixed(2)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="flex justify-end mb-8">
					<div className="text-gray-700 mr-2">Subtotal:</div>
					<div className="text-gray-700">
						$
						{(
							items.reduce(
								(acc: any, item: any) => acc + item.amount_total,
								0
							) / 100
						).toFixed(2)}
					</div>
				</div>
				<div className="text-right mb-8">
					{/* <div className="text-gray-700 mr-2">Tax:</div>
		<div className="text-gray-700">$25.50</div> */}
				</div>
				<div className="flex justify-end mb-8">
					<div className="text-gray-700 mr-2">Total:</div>
					<div className="text-gray-700 font-bold text-xl">
						$
						{(
							items.reduce(
								(acc: any, item: any) => acc + item.amount_total,
								0
							) / 100
						).toFixed(2)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default function CompletadoPage() {
	return (
		<Suspense fallback={<div>Cargando...</div>}>
			<ResultPayment />
		</Suspense>
	);
}
