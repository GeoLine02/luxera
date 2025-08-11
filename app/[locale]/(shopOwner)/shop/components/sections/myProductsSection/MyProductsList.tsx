import { useState } from "react";
import MyProductCard from "./MyProductCard";
import {
  SellerProductStatusType,
  SellersProductType,
} from "@/app/types/product";

const productsMockData: SellersProductType[] = [
  {
    title: "პერსონალური ჭიქა",
    id: "456785",
    views: "12 / 250",
    sales: "0 / 8",
    status: "active",
  },
  {
    title: "პერსონალური ჭიქა",
    id: "456781",
    views: "12 / 250",
    sales: "0 / 8",
    status: "active",
  },
  {
    title: "პერსონალური ჭიქა",
    id: "456782",
    views: "12 / 250",
    sales: "0 / 8",
    status: "active",
  },
  {
    title: "პერსონალური ჭიქა",
    id: "456786",
    views: "12 / 250",
    sales: "0 / 8",
    status: "active",
  },
];

const MyProductsList = () => {
  const [products, setProducts] = useState(productsMockData);

  const handleChangeStatus = (
    productId: string,
    status: SellerProductStatusType
  ) => {
    setProducts((prevProudcts) =>
      prevProudcts.map((product) =>
        productId === product.id ? { ...product, status } : product
      )
    );
  };

  return (
    <div className="mt-6 space-y-2">
      {products.map((product) => (
        <MyProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          views={product.views}
          sales={product.sales}
          status={product.status}
          handleChangeStatus={handleChangeStatus}
        />
      ))}
    </div>
  );
};

export default MyProductsList;
