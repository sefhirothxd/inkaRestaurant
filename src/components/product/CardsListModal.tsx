import CardProducModaltPage from './CardProductModal';

interface Products {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	categoryId: number;
}

interface ProductAndCategory {
	products: Products[];
	category: number;
	handleAddProduct: (product: Products) => void;
}

export default function CardListModalPage({
	products,
	category,
	handleAddProduct,
}: ProductAndCategory) {
	const filteredProducts =
		category === 0
			? products
			: products.filter((product) => product.categoryId === category);

	return (
		<div className="grid grid-cols-1 place-items-center sm:place-items-stretch gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{filteredProducts &&
				filteredProducts.map((product: Products) => (
					<CardProducModaltPage
						key={product.id}
						product={product}
						handleAddProduct={handleAddProduct}
					/>
				))}
		</div>
	);
}
