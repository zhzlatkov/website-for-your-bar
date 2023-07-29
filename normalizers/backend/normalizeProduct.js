export default function normalizeProduct(product) {
  let sanitizedProduct = {
    name: String(product.product_name).trim().toLowerCase(),
    price: Number(product.price),
    quantity: Number(product.quantity),
    quantityType: String(product.quantity_type).trim().toLowerCase(),
    shortDescription: String(product.short_description).trim(),
    longDescription: String(product.long_description).trim(),
    categoryId: Number(product.categoryId),
    status: Boolean(product.status),
    image: String(product.photo).trim(),
  };
  if (product.id) {
    sanitizedProduct.product.id = Number(product.id);
  }
  return sanitizedProduct;
}
