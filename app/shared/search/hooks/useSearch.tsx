import { ProductWithPrimaryVariant } from "@/app/types/product";
import { useEffect, useState } from "react";
import { searchProcutService } from "../services/saerchProduct";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";

const useSearch = (searchValue: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ProductWithPrimaryVariant[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (searchValue.length) {
      const handleSearchProduct = async () => {
        setLoading(true);
        try {
          const res = await searchProcutService(searchValue);

          console.log(res.data);
          setData(res.data);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          console.log(error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      handleSearchProduct();
    } else {
      setData([]);
    }
  }, [searchValue, dispatch]);

  return [data, loading, error];
};

export default useSearch;
