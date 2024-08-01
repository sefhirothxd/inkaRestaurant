'use client';

import Image from 'next/image';
import { DataTable } from '../data-table/data-table';
import { columns } from '../data-table/columns';
import { useProductsStore } from '@/store';

export default function Home() {
	const { products, loading, error, fetchProducts } = useProductsStore();

	const filter = products.filter((product: any) => product.categoryId === 2);

	return (
		<div className="flex w-full min-h-screen">
			<div className="flex-1 bg-[#F9F9FB] p-9">
				<div className="flex justify-between mb-[40px]">
					<button className="uppercase bg-redPrimario text-white flex items-center px-5 rounded-[15px]">
						<Image
							src={'/agregar.svg'}
							alt="plus"
							width={20}
							height={20}
							className="mr-1"
						/>
						Añadir
					</button>
					<div className="flex gap-2">
						<button>Admin</button>
						<div className="w-[45px] h-[45px] bg-redPrimario rounded-full"></div>
					</div>
				</div>
				<div>
					<DataTable columns={columns} data={filter} />
				</div>
			</div>
		</div>
	);
}
