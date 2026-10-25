import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, Product, DemoOrder } from '@/types/product';

interface VaultStore {
  // Cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;

  // Wishlist
  wishlist: string[]; // product IDs
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Demo Orders
  orders: DemoOrder[];
  addOrder: (order: DemoOrder) => void;

  // UI state
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  quickAddProduct: Product | null;
  openQuickAdd: (product: Product) => void;
  closeQuickAdd: () => void;

  isSizeGuideOpen: boolean;
  openSizeGuide: () => void;
  closeSizeGuide: () => void;
}

export const useVaultStore = create<VaultStore>()(
  persist(
    (set, get) => ({
      // Cart State
      cart: [],
      addToCart: (itemData) => {
        const id = `${itemData.productId}-${itemData.size}-${itemData.color}`;
        const existing = get().cart.find((item) => item.id === id);

        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + itemData.quantity }
                : item
            ),
            isCartOpen: true,
          });
        } else {
          set({
            cart: [...get().cart, { ...itemData, id }],
            isCartOpen: true,
          });
        }
      },
      removeFromCart: (id) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },
      updateQuantity: (id, delta) => {
        set({
          cart: get()
            .cart.map((item) => {
              if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : null;
              }
              return item;
            })
            .filter(Boolean) as CartItem[],
        });
      },
      clearCart: () => set({ cart: [] }),
      getCartTotal: () => {
        return get().cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },
      getCartCount: () => {
        return get().cart.reduce((sum, item) => sum + item.quantity, 0);
      },

      // Wishlist State
      wishlist: [],
      toggleWishlist: (productId) => {
        const current = get().wishlist;
        if (current.includes(productId)) {
          set({ wishlist: current.filter((id) => id !== productId) });
        } else {
          set({ wishlist: [...current, productId] });
        }
      },
      isInWishlist: (productId) => {
        return get().wishlist.includes(productId);
      },

      // Demo Orders
      orders: [],
      addOrder: (order) => {
        set({ orders: [order, ...get().orders] });
      },

      // UI
      isCartOpen: false,
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set({ isCartOpen: !get().isCartOpen }),

      quickAddProduct: null,
      openQuickAdd: (product) => set({ quickAddProduct: product }),
      closeQuickAdd: () => set({ quickAddProduct: null }),

      isSizeGuideOpen: false,
      openSizeGuide: () => set({ isSizeGuideOpen: true }),
      closeSizeGuide: () => set({ isSizeGuideOpen: false }),
    }),
    {
      name: 'solevault-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        orders: state.orders,
      }),
    }
  )
);
