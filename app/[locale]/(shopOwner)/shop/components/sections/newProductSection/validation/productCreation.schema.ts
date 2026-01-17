import { z } from "zod";

// SubCategory schema without image
const subCategoryWithoutImageSchema = z.object({
  id: z.number(),
  sub_category_name: z.string().min(1, "Sub-category name is required"),
  sub_category_name_ka: z.string().min(1, "Sub-category name is required"),
  category_id: z.number(),
});

// Category schema without images
const categoryWithoutImageSchema = z.object({
  id: z.number(),
  category_name: z.string().min(1, "Category name is required"),
  category_name_ka: z.string().min(1, "Category name is required"),
  subCategories: z.array(subCategoryWithoutImageSchema),
});

const productImageSchema = z.object({
  id: z.number(),
});

// Product variant schema with union type for images
const productVariantSchema = z.object({
  id: z.union([z.number(), z.string()]).optional(),
  variant_name: z.string().min(1, "Variant name is required"),
  variant_price: z.coerce
    .number({ invalid_type_error: "Price must be a number" })
    .positive("Price must be greater than 0"),
  variant_quantity: z.coerce
    .number({ invalid_type_error: "Quantity must be a number" })
    .int("Quantity must be a whole number")
    .min(0, "Quantity cannot be negative"),
  variant_discount: z.coerce
    .number({ invalid_type_error: "Discount must be a number" })
    .min(0, "Discount cannot be negative")
    .max(100, "Discount cannot exceed 100%"),
  product_id: z.number().optional(),
  // Check for File[] first, then fallback to structured images
  images: z
    .array(z.union([z.instanceof(File), productImageSchema]))
    .min(1, "At least one image is required"),
});

// Main ProductForm schema
export const productFormSchema = z.object({
  id: z.number().optional(),
  product_description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description cannot exceed 1000 characters"),
  product_variants: z
    .array(productVariantSchema)
    .min(1, "At least one product variant is required"),
  product_category: categoryWithoutImageSchema
    .nullable()
    .refine((val) => val !== null, {
      message: "Category is required",
    }),
  product_sub_category: subCategoryWithoutImageSchema
    .nullable()
    .refine((val) => val !== null, {
      message: "Subcateogry is required",
    }),
});

export type ProductFormSchema = z.infer<typeof productFormSchema>;
