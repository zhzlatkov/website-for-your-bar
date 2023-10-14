export default function normalizeOrderedProduct(product) {
  const sanitizedProduct = {
    id: Number(product.id),
    name: String(product.name).trim().toLowerCase(),
    price: Number(product.price),
    quantity: Number(product.quantity),
    quantityType: String(product.quantityType).trim().toLowerCase(),
  };
  return sanitizedProduct;
}
