"use client";

import Input from "@/app/ui/Input";
import CartItem from "./CartItem";
import { useUser } from "@/app/providers/UserProvider";
import { fetchCartItems } from "@/app/services/cart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import {
  changeCartItemQuantity,
  deleteCartItem,
  saveCartItems,
  toggleCartItemSelection,
  toggleSelectAllCartItems,
} from "@/app/store/features/cartSlice";
import { useEffect } from "react";
import { ProductImageType } from "@/app/types/product";

const CartItemsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useUser();
  const { cart, selectedCartItems } = useSelector(
    (state: RootState) => state.cartReducer,
  );
  const onQuantityChange = async (cartItemId: number, quantity: number) => {
    dispatch(changeCartItemQuantity({ cartItemId, quantity }));
  };

  const onItemDelete = async (cartItemId: number) => {
    dispatch(deleteCartItem({ cartItemId }));
  };

  const onSelectChange = (cartItemId: number, selected: boolean) => {
    dispatch(toggleCartItemSelection({ cartItemId, selected }));
  };

  const onSelectAll = (selected: boolean) => {
    dispatch(toggleSelectAllCartItems(selected));
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (!user?.id) return;
      const res = await fetchCartItems(user?.id);
      dispatch(saveCartItems(res.data));
    };

    fetchCart();
  }, [user?.id, dispatch]);

  const allSelected =
    cart.length > 0 && selectedCartItems.length === cart.length;

  return (
    <div className="w-full space-y-4">
      {/* Select All */}
      <div className="flex items-center gap-2 py-2 pl-2 rounded-lg">
        <Input
          type="checkbox"
          name="selectAll"
          id="selectAll"
          checked={allSelected}
          onChange={(e) => onSelectAll(e.target.checked)}
        />
        <label htmlFor="selectAll" className="text-lg md:text-xl font-medium">
          Select All ({cart.length})
        </label>
      </div>

      {/* Items Container */}
      <div className="w-full border border-light-gray rounded-xl bg-white">
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            discount={cartItem.variant.variant_discount}
            id={cartItem.id}
            price={cartItem.variant.variant_price}
            quantity={cartItem.product_quantity}
            title={cartItem.variant.variant_name}
            image={(cartItem.variant.images as ProductImageType[])[0].imageUrl}
            selected={selectedCartItems.some((item) => item.id === cartItem.id)}
            onSelectChange={onSelectChange}
            onQuantityChange={onQuantityChange}
            onItemDelete={onItemDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItemsList;
