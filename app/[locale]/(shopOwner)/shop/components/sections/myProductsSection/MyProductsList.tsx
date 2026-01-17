import { useEffect } from "react";
import MyProductCard from "./MyProductCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import {
  getSellerProducts,
  selectProductId,
} from "@/app/store/features/sellerSlice";
import { ClipLoader } from "react-spinners";
import { changeSection } from "@/app/store/features/shopSlice";

const MyProductsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { sellerProducts, error, loading } = useSelector(
    (state: RootState) => state.sellerReducer
  );

  const handleSelectProductId = (id: number) => {
    dispatch(changeSection("updateProduct"));
    dispatch(selectProductId(id));
  };

  useEffect(() => {
    dispatch(getSellerProducts());
  }, [dispatch]);

  if (error) {
    return (
      <div className="w-full min-h-[89vh] flex items-center justify-center">
        <h1 className="text-red-500 rext-3xl">{error}</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-[89vh] w-full bg-black/50 flex items-center justify-center">
        <ClipLoader size={30} color="white" />
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-2">
      {sellerProducts.map(
        (product) => (
          console.log(product.primaryVariant),
          (
            <MyProductCard
              key={product.id}
              id={product.id}
              title={product.primaryVariant.variant_name}
              status={product.product_status}
              salesPerDay={product.sales_per_day}
              salesPerMonth={product.sales_per_month}
              viewsPerDay={product.views_per_day}
              viewsPerMonth={product.views_per_month}
              productImage={product.primaryVariant.imageUrl}
              handleChangeStatus={() => {}}
              handleSelectProductId={handleSelectProductId}
            />
          )
        )
      )}
    </div>
  );
};

export default MyProductsList;
