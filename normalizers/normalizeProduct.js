export default function normalizeProduct(product) {
  let sanitizedProduct = {
    product: {
      name: String(product.product.name).trim().toLowerCase(),
      categoryId: Number(product.product.categoryId),
      price: Number(product.product.price),
      quantity: Number(product.product.quantity),
      quantityType: String(product.product.quantityType).trim().toLowerCase(),
      shortDescription: String(product.product.shortDescription).trim(),
      longDescription: String(product.product.longDescription).trim(),
      status: Boolean(product.product.status),
      photoPath: String(product.product.photoPath).trim().toLowerCase(),
    },
    image: product.image,
  };
  if (product.image) {
    sanitizedProduct.image = String(product.image).trim();
  }
  if (product.product.id) {
    sanitizedProduct.product.id = Number(product.product.id);
  }
  return sanitizedProduct;
}
