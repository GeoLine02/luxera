import { z } from "zod";

export const productImageSchema = z.object({
  id: z.number(),
  image: z.string().url(),
  product_id: z.number(),
  variant_id: z.number(),
});

// Accept either a File OR a ProductImageType (URL object)
const imageUnionSchema = z.union([z.instanceof(File), productImageSchema]);

export const productVariantSchema = z.object({
  id: z.union([z.number(), z.string()]).optional(),
  variant_name: z.string().min(1, "Variant name is required"),
  variant_price: z.number().min(0, "Price must be 0 or more"),
  variant_quantity: z.number().min(0, "Quantity must be 0 or more"),
  variant_discount: z.number().min(0).max(100, "Discount must be 0–100"),
  product_id: z.number().optional(),
  images: z.array(imageUnionSchema).min(1, "At least one image is required"),
});

export const categorySchema = z.object({
  id: z.number(),
  category_name: z.string(),
  category_name_ka: z.string(),
  subCategories: z.array(
    z.object({
      id: z.number(),
      category_id: z.number(),
      sub_category_name: z.string(),
      sub_category_name_ka: z.string(),
    })
  ),
});

export const subCategorySchema = z.object({
  id: z.number(),
  category_id: z.number(),
  sub_category_name: z.string(),
  sub_category_name_ka: z.string(),
});

export const productUpdateFormSchema = z.object({
  id: z.number().optional(),
  product_description: z
    .string()
    .min(10, "Description must be at least 10 characters"),

  product_category: categorySchema.nullable(),

  product_sub_category: subCategorySchema.nullable(),

  product_variants: z
    .array(productVariantSchema)
    .min(1, "You must add at least one variant"),
  deletedVariantIds: z.number().array().optional(),
  deletedImageIds: z.number().array().optional(),
});
