import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

interface CartStore {
    items: Product[];
    add: (data: Product) => void;
    remove: (id: string) => void;
    flush: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        add: (data: Product) => {
            const curr = get().items;
            const item = curr.find((item) => item.id === data.id);

            if (item) {
                return toast("Item already in cart.");
            }

            set({ items: [...curr, data]});
            toast.success("Item added to cart.");
        },
        remove: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)]});
            toast.success("Item removed from the cart.");
        },
        flush: () => set({ items: [] })
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
);

export default useCart;
