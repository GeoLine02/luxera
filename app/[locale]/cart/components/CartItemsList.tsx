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
} from "@/app/store/features/cartSlice";
import { useEffect } from "react";
import { ProductImageType } from "@/app/types/product";

const CartItemsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useUser();
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  console.log(cart);
  const onQuantityChange = async (cartItemId: number, quantity: number) => {
    dispatch(changeCartItemQuantity({ cartItemId, quantity }));
  };

  const onItemDelete = async (cartItemId: number) => {
    dispatch(deleteCartItem({ cartItemId }));
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (!user?.id) return;
      const res = await fetchCartItems(user?.id);
      dispatch(saveCartItems(res.data));
    };

    fetchCart();
  }, [user?.id, dispatch]);

  return (
    <div className="w-full space-y-4">
      {/* Select All */}
      <div className="flex items-center gap-2 py-2 pl-2 rounded-lg">
        <Input type="checkbox" name="selectAll" checked={false} />
        <label htmlFor="selectAll" className="text-lg md:text-xl font-medium">
          Select All ({cart.length})
        </label>
      </div>

      {/* Items Container */}
      <div className="w-full border border-light-gray rounded-xl bg-white">
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            id={cartItem.id}
            description={cartItem.product.product_description}
            price={cartItem.variant.variant_price}
            quantity={cartItem.product_quantity}
            title={cartItem.variant.variant_name}
            image={(cartItem.variant.images as ProductImageType[])[0].imageUrl}
            onQuantityChange={onQuantityChange}
            onItemDelete={onItemDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItemsList;
