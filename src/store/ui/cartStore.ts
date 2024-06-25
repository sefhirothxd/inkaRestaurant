import { create } from 'zustand';

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
	cart: Product[];
	removeCart: (id: any) => Promise<void>;
	loading: boolean;
	error: Error | null;
	addCart: (products: any) => Promise<void>;
	plusQuantity: (id: any) => Promise<void>;
	minusQuantity: (id: any) => Promise<void>;
	addCartCache: (product: Product) => Promise<void>;
}
const initialState = {
	cart: [],
	loading: false,
	error: null,
};

export const useCartStore = create<ProductsState>()((set, get) => ({
	cart: [],
	loading: true,
	error: null,
	addCart: async (product: Product) => {
		try {
			const productExist = get().cart.find((item) => item.id === product.id);
			console.log('existe producto', productExist);

			if (productExist) {
				const newCart = get().cart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity! + 1 }
						: item
				);
				//local storage
				//delete old cart
				localStorage.removeItem('cart');
				localStorage.setItem('cart', JSON.stringify(newCart));

				set({
					cart: newCart,
					loading: false,
					error: null,
				});
				return;
			}

			const data = [...get().cart, product];
			console.log(data);

			localStorage.removeItem('cart');
			localStorage.setItem('cart', JSON.stringify(data));
			set({
				cart: data,
				loading: false,
				error: null,
			});
		} catch (error) {
			set({
				cart: [],
				loading: false,
				error: error as Error, // Ensure the error is typed as Error
			});
		}
	},
	removeCart: async (id: any) => {
		try {
			const newCart = get().cart.filter((product) => product.id !== id);
			localStorage.removeItem('cart');
			localStorage.setItem('cart', JSON.stringify(newCart));
			set({
				cart: newCart,
				loading: false,
				error: null,
			});
		} catch (error) {
			set({
				cart: [],
				loading: false,
				error: error as Error, // Ensure the error is typed as Error
			});
		}
	},
	plusQuantity: async (id: any) => {
		try {
			const newCart = get().cart.map((product) =>
				product.id === id
					? { ...product, quantity: product.quantity! + 1 }
					: product
			);
			localStorage.removeItem('cart');
			localStorage.setItem('cart', JSON.stringify(newCart));
			set({
				cart: newCart,
				loading: false,
				error: null,
			});
		} catch (error) {
			set({
				cart: [],
				loading: false,
				error: error as Error, // Ensure the error is typed as Error
			});
		}
	},
	minusQuantity: async (id: any) => {
		try {
			const newCart = get().cart.map((product) =>
				product.id === id && product.quantity! > 1
					? { ...product, quantity: product.quantity! - 1 }
					: product
			);
			localStorage.removeItem('cart');
			localStorage.setItem('cart', JSON.stringify(newCart));
			set({
				cart: newCart,
				loading: false,
				error: null,
			});
		} catch (error) {
			set({
				cart: [],
				loading: false,
				error: error as Error, // Ensure the error is typed as Error
			});
		}
	},
	addCartCache: async (product: any) => {
		try {
			set({
				cart: product,
				loading: false,
				error: null,
			});
		} catch (error) {
			set({
				cart: [],
				loading: false,
				error: error as Error, // Ensure the error is typed as Error
			});
		}
	},
}));
