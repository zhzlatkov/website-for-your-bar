import normalizeProduct from "./normalizeProduct";

export default function normalizeCategory(category) {
  let sanitizedCategory = {
    id: category && category.id ? Number(category.id) : undefined,
    name: String(category.category_name).trim().toLowerCase(),
    image: String(category.photo).trim(),
    shortDescription: String(category.short_description).trim(),
    status: Boolean(category.status),
  };
  if (category.id) {
    sanitizedCategory.id = Number(category.id);
  }
  if (category.products?.length > 0) {
    sanitizedCategory.products = category.products.map((product) =>
      normalizeProduct(product)
    );
  }
  return sanitizedCategory;
}
