export default function normalizeProduct(product) {
  let sanitizedProduct = {
    id: product && product.id ? Number(product.id) : undefined,
    name: String(product.product_name).trim().toLowerCase(),
    price: Number(product.price),
    quantity: Number(product.quantity),
    quantityType: String(product.quantity_type).trim().toLowerCase(),
    shortDescription: String(product.short_description).trim(),
    longDescription: String(product.long_description).trim(),
    categoryId: Number(product.category + 1),
    status: Boolean(product.status),
    image: String(product.photo).trim(),
  };
  if (product.id) {
    sanitizedProduct.id = Number(product.id);
  }
  return sanitizedProduct;
}
