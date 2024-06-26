import { useCartStore, useProductsStore } from '@/store';
import CardProducModaltPage from './CardProductModal';
import { useState } from 'react';

interface Products {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	categoryId: number;
}

interface ProductAndCategory {
	category: number;
}

export default function CardListModalPage({ category }: ProductAndCategory) {
	const { loading, products } = useProductsStore();

	const filteredProducts =
		category === 0
			? products
			: products.filter((product) => product.categoryId === category);

	// const selectProduct = (product: any) => {
	// 	setProductsSelected(!productsSelected);
	// 	let newProduct = { ...product };

	// 	if (newProduct.quantity) {
	// 		newProduct.quantity += 1;
	// 	} else {
	// 		newProduct = { ...product, quantity: 1 };
	// 	}

	// 	handleAddProduct(newProduct);
	// };

	return (
		<div className="grid grid-cols-2 place-items-center sm:place-items-stretch gap-y-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
			{filteredProducts.map((product: Products) => (
				<CardProducModaltPage key={product.id} product={product} />
			))}
		</div>
	);
}
