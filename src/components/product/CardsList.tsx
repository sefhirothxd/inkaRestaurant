import CardPage from '../shop/card';

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
}

export default function NamePage({ products, category }: ProductAndCategory) {
	const filteredProducts =
		category === 0
			? products
			: products.filter((product) => product.categoryId === category);

	return (
		<div className="gap-x-9 mx-2 gap-y-6 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-content-center ">
			{filteredProducts &&
				filteredProducts.map((product: Products) => (
					<CardPage key={product.id} product={product} />
				))}
		</div>
	);
}
