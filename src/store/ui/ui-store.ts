import { create } from 'zustand';

interface State {
	isSideMenuOpen: boolean;
	openModalMenu: () => void;
	closeModalMenu: () => void;
}

export const useUIStore = create<State>()((set) => ({
	isSideMenuOpen: false,
	openModalMenu: () => set({ isSideMenuOpen: true }),
	closeModalMenu: () => set({ isSideMenuOpen: false }),
}));
