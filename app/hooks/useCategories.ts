"use client";

import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { startLoading, setCategories, setCategoriesError } from '@/app/store/features/categoriesSlice';
import { fetchCategoriesData } from '@/data/categories';
import type { ApiCategory } from '@/data/categories';

export const useCategories = (locale: string) => {
  const dispatch = useDispatch<AppDispatch>();
  // Select the slice directly and rely on shallowEqual to prevent unnecessary re-renders
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categoriesReducer,
    shallowEqual
  );

  useEffect(() => {
    if (locale) {
      // Use the same data-access layer as server component Categories.tsx
      const run = async () => {
        try {
          dispatch(startLoading());
          const apiCategories: ApiCategory[] = await fetchCategoriesData(locale);
          // Normalize to store CategoryType shape, ensuring subCategories is an array
          const normalized = apiCategories.map((c) => ({
            label: c.label,
            image: c.image,
            subCategories: Array.isArray(c.subCategories) ? c.subCategories.map((s) => ({
              label: s.label,
              image: s.image,
            })) : [],
          }));
          dispatch(setCategories(normalized));
        } catch (e: any) {
          const message = e?.message || 'Failed to fetch categories';
          dispatch(setCategoriesError(message));
        }
      };
      run();
    }
  }, [dispatch, locale]);

  return {
    categories,
    loading,
    error,
  };
};

export default useCategories;
