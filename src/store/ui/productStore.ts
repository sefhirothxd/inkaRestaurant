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
	cart: Product[];
	product: Product | null;
	loading: boolean;
	error: Error | null;
	fetchProducts: () => Promise<void>;
	fetchProduct: (id: any) => Promise<void>;
	addCart: (products: any) => Promise<void>;
}
const initialState = {
	products: [],
	cart: [],
	loading: false,
	error: null,
};

export const useProductsStore = create<ProductsState>()((set, get) => ({
	products: [],
	product: null,
	cart: [],
	loading: true,
	error: null,
	fetchProducts: async () => {
		try {
			const response = await axios.get('http://localhost:4000/api/productos');
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
			// const response = await axios.get(
			// 	`http://localhost:4000/api/productos/${id}`
			// );
			// const data = response.data;

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
	addCart: async (products: any) => {
		try {
			const data = products;
			console.log(data);
			set({
				cart: data,
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
