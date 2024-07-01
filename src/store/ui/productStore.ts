import { create } from 'zustand';
import axios from 'axios';

interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	categoryId: number;
	quantity?: number;
}

interface ProductsState {
	products: Product[];
	product: Product | null;
	loading: boolean;
	error: Error | null;
	fetchProducts: () => Promise<void>;
	fetchProduct: (id: any) => Promise<void>;
}
const initialState = {
	products: [],
	product: null,
	loading: false,
	error: null,
};

export const useProductsStore = create<ProductsState>()((set, get) => ({
	products: [],
	product: null,
	loading: true,
	error: null,
	fetchProducts: async () => {
		try {
			const response = await axios.get(
				'https://backend-inkarestaurant-production.up.railway.app/api/productos'
			);
			const data = response.data;
			set({
				...initialState,
				products: data,
				loading: false,
				error: null,
			});
		} catch (error) {
			set({
				products: [],
				loading: false,
				error: error as Error, // Ensure the error is typed as Error
			});
		}
	},
	fetchProduct: async (id: any) => {
		try {
			const data = get().products.find((product) => product.id === id);
			console.log(data);
			set({
				product: data,
				loading: false,
				error: null,
			});
		} catch (error) {
			set({
				product: null,
				loading: false,
				error: error as Error, // Ensure the error is typed as Error
			});
		}
	},
}));
